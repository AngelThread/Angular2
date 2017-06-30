import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { EmailValidator } from './user-validator'
import { CanDeactivate, Router } from "@angular/router";
import { UserService } from "./user.service";
import { ActivatedRoute } from '@angular/router';
import { User } from "./user";
@Component({
    selector: 'user-from',
    template: `
        <h1>{{mode}}</h1>
        <div class="row">
            <div class="col-md-6 well">
        <form [formGroup]="signupForm">
            <fieldset>
            <legend>User</legend>
                <div class="form-group">
                <label>Name</label>
                <input [(ngModel)]="user.name" class="form-control"  formControlName="name" type="text">
                <div *ngIf="!name.valid && name.dirty" class="alert alert-danger">User name is required</div>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" formControlName="email" type="text" [(ngModel)]="user.email">
                    <div *ngIf="email.errors">
                    <div *ngIf="email.errors.required && email.dirty " class="alert alert-danger">Email is required</div>
                    <div *ngIf="email.errors.emailValidator && email.dirty " class="alert alert-danger">Email is not valid!</div>
                    </div>
                    
                </div>
                <div class="form-group">
                    <label>Phone</label>
                <input [(ngModel)]="user.phone" class="form-control"  formControlName="phone" type="text">
                </div>
            </fieldset>
            <fieldset>
                <legend>Address</legend>
                <div class="form-group">
                    <label>Street</label>
                <input [(ngModel)]="user.address.street" class="form-control"  formControlName="street" type="text">
                </div>
                <div class="form-group">
                    <label>Suite</label>
                <input [(ngModel)]="user.address.suite" class="form-control"  formControlName="suite" type="text">
                </div>
                <div class="form-group">
                    <label>City</label>
                <input [(ngModel)]="user.address.city" class="form-control"  formControlName="city" type="text">
                </div>
                <div class="form-group">
                    <label>ZipCode</label>
                <input [(ngModel)]="user.address.zipcode" class="form-control"  formControlName="zipcode" type="text">
                </div>
            </fieldset>
            <button class="btn btn-primary" type="submit" [disabled]="!signupForm.valid" (click)="addUser()">Save</button>
        </form>
            </div>
        </div>
`
})
export class UserFormComponent implements OnInit {

    signupForm: FormGroup;
    email: AbstractControl;
    name: AbstractControl;
    phone: AbstractControl;
    street: AbstractControl;
    city: AbstractControl;
    suite: AbstractControl;
    zipcode: AbstractControl;

    mode = "Add User"
    user = new User();
    id = 0;
    
    constructor(fb: FormBuilder, private _userService: UserService, private _router: Router, private _route: ActivatedRoute) {


        this.signupForm = fb.group({
            'email': ['', Validators.compose([Validators.required, EmailValidator.getEmailValidator()])],
            'name': ['', Validators.required],
            'phone': ['', Validators.required],
            'street': ['', Validators.required],
            'suite': ['', Validators.required],
            'zipcode': ['', Validators.required],
            'city': ['', Validators.required]


        });
        this.email = this.signupForm.controls['email'];
        this.name = this.signupForm.controls['name'];
        this.phone = this.signupForm.controls['phone'];
        this.street = this.signupForm.controls['street'];
        this.suite = this.signupForm.controls['suite'];
        this.city = this.signupForm.controls['city'];
        this.zipcode = this.signupForm.controls['zipCode'];

    }

    ngOnInit(): void {
        this.id = 0;

        this._route.params.subscribe(params => {
            this.id = params["id"];
            console.log(params);

        });
        if (this.id !== 0) {
            this.mode = "Edit";
            this._userService.getUserById(this.id).subscribe(
                userInfo => {

                    this.user = userInfo;
                    console.log(userInfo);

                },
                error => {
                    console.log(error);
                });
        }
    }

    addUser() {
        let data = this.user;
    
        if (this.mode === "Add User") {

            this._userService.postUser(data).subscribe(x => {
                this.signupForm.markAsPristine();
                this._router.navigate(['Users']);
            });
        } else if (this.mode === "Edit") {
            this._userService.updateUser(data,this.id).subscribe(x => {
                this.signupForm.markAsPristine();
                this._router.navigate(['Users']);
            });
        }

    }
}