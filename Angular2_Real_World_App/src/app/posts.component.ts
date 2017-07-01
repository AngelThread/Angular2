import { OnInit, Component } from "@angular/core";
import { PostService } from "./posts.service";
import { Post } from "./post";


@Component({
    selector: 'my-app',
    template: `
<div class="row">
<div class="col-md-6">
<i class="fa fa-spinner fa-spin fa-3x"></i>
<ul class="list-group">
  <li *ngFor="let post of posts" class="list-group-item">{{post?.title}}</li>
</ul>  
</div>

</div>

    `

})
export class PostsPageComponent implements OnInit {
    isLoading: boolean;
    posts: Post[];

    constructor(private _postService: PostService) {


    }
    ngOnInit(): void {
        this._postService.getPosts().subscribe(
            posts => {
                this.isLoading=true;                
                this.posts = posts;
            },
            error => {
                console.log(error);
                console.log("Error");
            });
    }


}