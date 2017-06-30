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
var core_1 = require('@angular/core');
var user_service_1 = require("./user.service");
var router_1 = require('@angular/router');
var HomePageComponent = (function () {
    function HomePageComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.users = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (users) {
            console.log("Usersss");
            console.log(JSON.parse(JSON.stringify(users)));
            _this.users = users;
        }, function (error) {
            console.log(error);
            console.log("Error");
        });
        console.log("X");
    };
    HomePageComponent.prototype.editClicked = function () {
        this._router.navigate(['/users', 2]);
    };
    HomePageComponent.prototype.deleteUser = function (user) {
        console.log("Id:" + user);
        var deleted;
        var filtered = this.users.filter(function (element) { deleted = user; return element.name !== user.name; });
        this.users = filtered;
        console.log(deleted);
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>Users</h1>\n        <p>\n            <a class=\"btn btn-primary\" href=\"/users\">Add user</a>\n        </p>\n        <table class=\"table table-bordered\">\n            <thead>\n            <tr>\n                <th>Name</th>\n                <th>Email</th>\n                <th>Edit</th>\n                <th>Delete</th>\n\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let user of users\">\n                <td>{{user?.name}}</td>\n                <td>{{user?.email}}</td>\n                <td [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><i \n                class=\" glyphicon glyphicon-pencil \" [routerLink]=\"['/users',user.id]\"  (click)=\"editClicked()\"></i></td>\n                <td><i class=\" glyphicon glyphicon-remove \" (click)=\"deleteUser(user)\"></i></td>\n            </tr>\n            </tbody>\n        </table>\n    "
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
/*{

 users = [ {"firstName":"Ali" , "lastName":"Yapar","userName":"User1"}, {"firstName":"Mehmet", "lastName":"Yapar","userName":"User2"},
 {"firstName":"Can", "lastName":"Yapar","userName":"User3"}];


 }
 */ 
//# sourceMappingURL=home-page.component.js.map