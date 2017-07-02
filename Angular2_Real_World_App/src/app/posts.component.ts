import { OnInit, Component } from "@angular/core";
import { PostService } from "./posts.service";
import { Post } from "./post";


@Component({
    selector: 'my-app',
    template: `
<div class="row">
<div class="col-md-6">
<i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
<ul class="list-group">
  <li *ngFor="let post of posts" class="list-group-item" (click)="selected(post)">{{post?.title}}</li>
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
export class PostsPageComponent implements OnInit {
    isLoading: boolean = true;
    posts: Post[];
    selectedPost = null;

    constructor(private _postService: PostService) {
    }
    ngOnInit(): void {
        this._postService.getPosts().subscribe(
            posts => {
                this.posts = posts;

            },
            error => {
                console.log(error);
                console.log("Error");
            }, () => {
                this.isLoading = false;
            });

    }
    selected(post) {

        this.selectedPost = post;

    }

}