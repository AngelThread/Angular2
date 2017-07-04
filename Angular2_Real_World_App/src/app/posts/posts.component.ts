import { OnInit, Component, OnChanges, SimpleChanges } from "@angular/core";
import { PostService } from "./posts.service";
import { Post } from "./post";
import { UserService } from "../users/user.service";


@Component({
    selector: 'my-app',
    template: `


<div class="row">
<div class="col-md-6">
<div>
 <select #u class="form-control" (change)="userSelected({id: u.value})">
 <option selected hidden>Select a user here</option>
 <option *ngFor="let user of users" value="{{user.id}}" > {{ user.name }}</option>
</select>
</div>


<i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
<pagination-comp [itemsCount]="posts?.length" (page-changed)="onPageChanged($event)"></pagination-comp>	
<ul class="list-group">
  <li *ngFor="let post of pagedPosts" class="list-group-item" (click)="postSelected(post)">{{post?.title}}</li>
</ul>  
</div>
<div class="col-md-6">

 
<div class="panel panel-default" *ngIf=" selectedPost !== null">
  <div class="panel-heading">
    <h3 class="panel-title">{{selectedPost?.title}}</h3>
  </div>
  <div class="panel-body">
    {{selectedPost?.body}}
  </div>
  <comment [id]="selectedPost.id"></comment>
</div>
</div>
</div>


    `,
    styles: [
        `            
        li	{	cursor:	default;	}
	    li:hover	{	background:	#ecf0f1;	}	
        list-group-item.active,	
        list-group-item.active:hover,	
        list-group-item.active:focus	
        {	
        background-color:	#ecf0f1;
	    border-color:	#ecf0f1;	
	    color:	#2c3e50;}
                
        `,

    ]


})
export class PostsPageComponent implements OnInit, OnChanges {
    pagedPosts: Post[];

    users: any;
    isLoading: boolean = true;
    posts: Post[];
    selectedPost = null;
    pageSize = 10;

    constructor(private _postService: PostService, private _userService: UserService) {
    }
    ngOnInit(): void {

        this._userService.getUsers().subscribe(
            users => {
                this.users = users;

            },
            error => {
                console.log(error);
                console.log("Error at Users");
            }, () => { });
        this.loadPosts();

    }
    postSelected(post) {

        this.selectedPost = post;
        this._postService.getComments(post.id).subscribe(
            posts => {
                this.selectedPost.commnets = posts;
                console.log(this.selectedPost.commnets)

            },
            error => {
                console.log(error);
            }, () => {
                this.isLoading = false;
            });

    }

    userSelected(filter) {
        console.log("user is selected.");
        this.selectedPost = null;

        this.loadPosts(filter);

    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("a Change happened.")

    }

    loadPosts(filter?) {

        if (filter && filter.id) {
            this._postService.getUsersPosts(filter.id).subscribe(
                posts => {
                    setTimeout(() => {
                    this.posts = posts;
                    this.pagedPosts = this.getPostsInPage(1);
                },500)},
                error => {
                    console.log(error);
                    console.log("Error");
                }, () => {
                    this.isLoading = false;
                });
                
        } else {

            this._postService.getPosts().subscribe(
                posts => {
                    setTimeout(() => {
                    this.posts = posts;
                    this.pagedPosts = this.getPostsInPage(1);
                },500)},
                error => {
                    console.log(error);
                    console.log("Error");
                }, () => {
                    this.isLoading = false;
                });
        }


    }

     onPageChanged(page) {
         this.pagedPosts = this.getPostsInPage(page);
     }
         getPostsInPage(page) {
         const startIndex = (page - 1) * this.pageSize;
         const endIndex = Math.min(startIndex + this.pageSize, this.posts.length);
         
        return this.posts.slice(startIndex, endIndex);
    }
}