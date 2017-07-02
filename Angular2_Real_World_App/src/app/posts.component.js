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
var posts_service_1 = require("./posts.service");
var PostsPageComponent = (function () {
    function PostsPageComponent(_postService) {
        this._postService = _postService;
        this.isLoading = true;
        this.selectedPost = null;
    }
    PostsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        }, function (error) {
            console.log(error);
            console.log("Error");
        }, function () {
            _this.isLoading = false;
        });
    };
    PostsPageComponent.prototype.selected = function (post) {
        var _this = this;
        this.selectedPost = post;
        this._postService.getComments(post.id).subscribe(function (posts) {
            _this.selectedPost.commnets = posts;
            console.log(_this.selectedPost.commnets);
        }, function (error) {
            console.log(error);
        }, function () {
            _this.isLoading = false;
        });
    };
    PostsPageComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<div class=\"row\">\n<div class=\"col-md-6\">\n<i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n<ul class=\"list-group\">\n  <li *ngFor=\"let post of posts\" class=\"list-group-item\" (click)=\"selected(post)\">{{post?.title}}</li>\n</ul>  \n</div>\n<div class=\"col-md-6\">\n\n \n<div class=\"panel panel-default\" *ngIf=\" selectedPost !== null\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">{{selectedPost?.title}}</h3>\n  </div>\n  <div class=\"panel-body\">\n    {{selectedPost?.body}}\n  </div>\n  <comment [id]=\"selectedPost.id\"></comment>\n</div>\n</div>\n</div>\n\n\n    ",
            styles: [
                "            \n        li\t{\tcursor:\tdefault;\t}\n\t    li:hover\t{\tbackground:\t#ecf0f1;\t}\t\n        list-group-item.active,\t\n        list-group-item.active:hover,\t\n        list-group-item.active:focus\t\n        {\t\n        background-color:\t#ecf0f1;\n\t    border-color:\t#ecf0f1;\t\n\t    color:\t#2c3e50;}\n                \n        ",
            ]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostService])
    ], PostsPageComponent);
    return PostsPageComponent;
}());
exports.PostsPageComponent = PostsPageComponent;
//# sourceMappingURL=posts.component.js.map