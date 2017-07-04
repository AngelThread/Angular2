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
var user_service_1 = require("./user.service");
var PostsPageComponent = (function () {
    function PostsPageComponent(_postService, _userService) {
        this._postService = _postService;
        this._userService = _userService;
        this.isLoading = true;
        this.selectedPost = null;
        this.pageSize = 10;
    }
    PostsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUsers().subscribe(function (users) {
            _this.users = users;
        }, function (error) {
            console.log(error);
            console.log("Error at Users");
        }, function () { });
        this.loadPosts();
    };
    PostsPageComponent.prototype.postSelected = function (post) {
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
    PostsPageComponent.prototype.userSelected = function (filter) {
        console.log("user is selected.");
        this.selectedPost = null;
        this.loadPosts(filter);
    };
    PostsPageComponent.prototype.ngOnChanges = function (changes) {
        console.log("a Change happened.");
    };
    PostsPageComponent.prototype.loadPosts = function (filter) {
        var _this = this;
        if (filter && filter.id) {
            this._postService.getUsersPosts(filter.id).subscribe(function (posts) {
                setTimeout(function () {
                    _this.posts = posts;
                    _this.pagedPosts = _this.getPostsInPage(1);
                }, 500);
            }, function (error) {
                console.log(error);
                console.log("Error");
            }, function () {
                _this.isLoading = false;
            });
        }
        else {
            this._postService.getPosts().subscribe(function (posts) {
                setTimeout(function () {
                    _this.posts = posts;
                    _this.pagedPosts = _this.getPostsInPage(1);
                }, 500);
            }, function (error) {
                console.log(error);
                console.log("Error");
            }, function () {
                _this.isLoading = false;
            });
        }
    };
    PostsPageComponent.prototype.onPageChanged = function (page) {
        this.pagedPosts = this.getPostsInPage(page);
    };
    PostsPageComponent.prototype.getPostsInPage = function (page) {
        var startIndex = (page - 1) * this.pageSize;
        var endIndex = Math.min(startIndex + this.pageSize, this.posts.length);
        return this.posts.slice(startIndex, endIndex);
    };
    PostsPageComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n\n<div class=\"row\">\n<div class=\"col-md-6\">\n<div>\n <select #u class=\"form-control\" (change)=\"userSelected({id: u.value})\">\n <option selected hidden>Select a user here</option>\n <option *ngFor=\"let user of users\" value=\"{{user.id}}\" > {{ user.name }}</option>\n</select>\n</div>\n\n\n<i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n<pagination-comp [itemsCount]=\"posts?.length\" (page-changed)=\"onPageChanged($event)\"></pagination-comp>\t\n<ul class=\"list-group\">\n  <li *ngFor=\"let post of pagedPosts\" class=\"list-group-item\" (click)=\"postSelected(post)\">{{post?.title}}</li>\n</ul>  \n</div>\n<div class=\"col-md-6\">\n\n \n<div class=\"panel panel-default\" *ngIf=\" selectedPost !== null\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">{{selectedPost?.title}}</h3>\n  </div>\n  <div class=\"panel-body\">\n    {{selectedPost?.body}}\n  </div>\n  <comment [id]=\"selectedPost.id\"></comment>\n</div>\n</div>\n</div>\n\n\n    ",
            styles: [
                "            \n        li\t{\tcursor:\tdefault;\t}\n\t    li:hover\t{\tbackground:\t#ecf0f1;\t}\t\n        list-group-item.active,\t\n        list-group-item.active:hover,\t\n        list-group-item.active:focus\t\n        {\t\n        background-color:\t#ecf0f1;\n\t    border-color:\t#ecf0f1;\t\n\t    color:\t#2c3e50;}\n                \n        ",
            ]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostService, user_service_1.UserService])
    ], PostsPageComponent);
    return PostsPageComponent;
}());
exports.PostsPageComponent = PostsPageComponent;
//# sourceMappingURL=posts.component.js.map