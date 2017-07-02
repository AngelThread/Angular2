

import { OnInit, OnChanges, SimpleChanges, Input, Component } from "@angular/core";
import { PostService } from "./posts.service";

@Component({
    selector: 'comment',
    template: `
 
    <div class="media" *ngFor="let comment of comments">
    <div class="media-left">
    <a href="#">
      <img class="media-object" src="{{imgSrc+comment.id}}" alt="...">
    </a>
     </div>
  <div class="media-body">
    <h4 class="media-heading">{{ comment?.name}} </h4>
 </div>
</div>
`
})

export class CommentsComponent implements OnInit, OnChanges {

    @Input() id;
    imgSrc = 'http://lorempixel.com/80/80/people?random+';
    comments = [];

    constructor(private _postService: PostService) {
    }
    ngOnChanges(changes: SimpleChanges): void {
        this._postService.getComments(this.id)
            .subscribe(comments => this.comments = comments);
    }
    ngOnInit(): void {
        this._postService.getComments(this.id)
            .subscribe(comments => this.comments = comments);
    }

}
