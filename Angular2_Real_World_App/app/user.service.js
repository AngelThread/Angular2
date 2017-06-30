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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.userURL = 'http://jsonplaceholder.typicode.com/users';
    }
    UserService.prototype.getUsers = function () {
        var user;
        return this.http.get(this.userURL).map(function (res) {
            user = res.json();
            return user;
        }).catch(this.handleError);
    };
    UserService.prototype.getUserById = function (userId) {
        var user;
        return this.http.get(this.userURL + "/" + userId).map(function (res) {
            user = res.json();
            return user;
        }).catch(this.handleError);
    };
    UserService.prototype.postUser = function (data) {
        var user;
        return this.http.post(this.userURL, data).map(function (res) {
            user = res.json();
            return user;
        }).catch(this.handleError);
    };
    UserService.prototype.updateUser = function (data, id) {
        var user;
        return this.http.put(this.userURL + "/" + id, data).map(function (res) {
            user = res.json();
            return user;
        }).catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map