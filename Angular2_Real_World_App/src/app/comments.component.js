"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var posts_service_1 = require("./posts/posts.service");
var CommentsComponent = (function () {
    function CommentsComponent(_postService) {
        this._postService = _postService;
        this.imgSrc = 'http://lorempixel.com/80/80/people?random+';
        this.comments = [];
    }
    CommentsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this._postService.getComments(this.id)
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postService.getComments(this.id)
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CommentsComponent.prototype, "id", void 0);
    CommentsComponent = __decorate([
        core_1.Component({
            selector: 'comment',
            template: "\n \n    <div class=\"media\" *ngFor=\"let comment of comments\">\n    <div class=\"media-left\">\n    <a href=\"#\">\n      <img class=\"media-object\" src=\"{{imgSrc+comment.id}}\" alt=\"...\">\n    </a>\n     </div>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">{{ comment?.name}} </h4>\n </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostService])
    ], CommentsComponent);
    return CommentsComponent;
}());
exports.CommentsComponent = CommentsComponent;
//# sourceMappingURL=comments.component.js.map