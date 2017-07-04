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
var forms_1 = require('@angular/forms');
var user_validator_1 = require('./user-validator');
var router_1 = require("@angular/router");
var user_service_1 = require("./user.service");
var router_2 = require('@angular/router');
var user_1 = require("./user");
var UserFormComponent = (function () {
    function UserFormComponent(fb, _userService, _router, _route) {
        this._userService = _userService;
        this._router = _router;
        this._route = _route;
        this.mode = "Add User";
        this.user = new user_1.User();
        this.id = 0;
        this.signupForm = fb.group({
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, user_validator_1.EmailValidator.getEmailValidator()])],
            'name': ['', forms_1.Validators.required],
            'phone': ['', forms_1.Validators.required],
            'street': ['', forms_1.Validators.required],
            'suite': ['', forms_1.Validators.required],
            'zipcode': ['', forms_1.Validators.required],
            'city': ['', forms_1.Validators.required]
        });
        this.email = this.signupForm.controls['email'];
        this.name = this.signupForm.controls['name'];
        this.phone = this.signupForm.controls['phone'];
        this.street = this.signupForm.controls['street'];
        this.suite = this.signupForm.controls['suite'];
        this.city = this.signupForm.controls['city'];
        this.zipcode = this.signupForm.controls['zipCode'];
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = 0;
        this._route.params.subscribe(function (params) {
            _this.id = params["id"];
            console.log(params);
        });
        if (this.id !== 0) {
            this.mode = "Edit";
            this._userService.getUserById(this.id).subscribe(function (userInfo) {
                _this.user = userInfo;
                console.log(userInfo);
            }, function (error) {
                console.log(error);
            });
        }
    };
    UserFormComponent.prototype.addUser = function () {
        var _this = this;
        var data = this.user;
        if (this.mode === "Add User") {
            this._userService.postUser(data).subscribe(function (x) {
                _this.signupForm.markAsPristine();
                _this._router.navigate(['Users']);
            });
        }
        else if (this.mode === "Edit") {
            this._userService.updateUser(data, this.id).subscribe(function (x) {
                _this.signupForm.markAsPristine();
                _this._router.navigate(['Users']);
            });
        }
    };
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'user-from',
            template: "\n        <h1>{{mode}}</h1>\n        <div class=\"row\">\n            <div class=\"col-md-6 well\">\n        <form [formGroup]=\"signupForm\">\n            <fieldset>\n            <legend>User</legend>\n                <div class=\"form-group\">\n                <label>Name</label>\n                <input [(ngModel)]=\"user.name\" class=\"form-control\"  formControlName=\"name\" type=\"text\">\n                <div *ngIf=\"!name.valid && name.dirty\" class=\"alert alert-danger\">User name is required</div>\n                </div>\n                <div class=\"form-group\">\n                    <label>Email</label>\n                    <input class=\"form-control\" formControlName=\"email\" type=\"text\" [(ngModel)]=\"user.email\">\n                    <div *ngIf=\"email.errors\">\n                    <div *ngIf=\"email.errors.required && email.dirty \" class=\"alert alert-danger\">Email is required</div>\n                    <div *ngIf=\"email.errors.emailValidator \" class=\"alert alert-danger\">Email is not valid!</div>\n                    </div>\n                    \n                </div>\n                <div class=\"form-group\">\n                    <label>Phone</label>\n                <input [(ngModel)]=\"user.phone\" class=\"form-control\"  formControlName=\"phone\" type=\"text\">\n                </div>\n            </fieldset>\n            <fieldset>\n                <legend>Address</legend>\n                <div class=\"form-group\">\n                    <label>Street</label>\n                <input [(ngModel)]=\"user.address.street\" class=\"form-control\"  formControlName=\"street\" type=\"text\">\n                </div>\n                <div class=\"form-group\">\n                    <label>Suite</label>\n                <input [(ngModel)]=\"user.address.suite\" class=\"form-control\"  formControlName=\"suite\" type=\"text\">\n                </div>\n                <div class=\"form-group\">\n                    <label>City</label>\n                <input [(ngModel)]=\"user.address.city\" class=\"form-control\"  formControlName=\"city\" type=\"text\">\n                </div>\n                <div class=\"form-group\">\n                    <label>ZipCode</label>\n                <input [(ngModel)]=\"user.address.zipcode\" class=\"form-control\"  formControlName=\"zipcode\" type=\"text\">\n                </div>\n            </fieldset>\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"(signupForm.invalid)\" (click)=\"addUser()\">Save</button>\n        </form>\n            </div>\n        </div>\n"
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, user_service_1.UserService, router_1.Router, router_2.ActivatedRoute])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map