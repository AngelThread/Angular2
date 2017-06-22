import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { EmailValidator } from './user-validator'
import { CanDeactivate, Router } from "@angular/router";
import {UserService} from "./user.service";

@Component({
    selector: 'user-from',
    template: `
        <h1>Add a User</h1>
        <div class="row">
            <div class="col-md-6 well">
        <form [formGroup]="signupForm">
            <fieldset>
            <legend>User</legend>
                <div class="form-group">
                <label>Name</label>
                <input class="form-control"  formControlName="name" type="text">
                <div *ngIf="!name.valid && name.dirty" class="alert alert-danger">User name is required</div>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" formControlName="email" type="text">
                    <div *ngIf="email.errors">
                    <div *ngIf="email.errors.required && email.dirty " class="alert alert-danger">Email is required</div>
                    <div *ngIf="email.errors.emailValidator && email.dirty " class="alert alert-danger">Email is not valid!</div>
                    </div>
                    
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input class="form-control" ngcontrol="phone" type="text">
                </div>
            </fieldset>
            <fieldset>
                <legend>Address</legend>
                <div class="form-group">
                    <label>Street</label>
                    <input class="form-control" ngcontrol="street" type="text">
                </div>
                <div class="form-group">
                    <label>Suite</label>
                    <input class="form-control" ngcontrol="suite" type="text">
                </div>
                <div class="form-group">
                    <label>City</label>
                    <input class="form-control" ngcontrol="city" type="text">
                </div>
                <div class="form-group">
                    <label>ZipCode</label>
                    <input class="form-control" ngcontrol="zipcode" type="text">
                </div>
            </fieldset>
            <button class="btn btn-primary" type="submit" [disabled]="!signupForm.valid" (click)="addUser()">Save</button>
        </form>
            </div>
        </div>
`
})
export class UserFormComponent {
    signupForm: FormGroup;
    email: AbstractControl;
    name: AbstractControl;
    /*
        constructor(  fb: FormBuilder){
    
            this.form = fb.group({
                name: fb.group({
                    name: ['', Validators.minLength(2)],
                    last: 'Drew',
                }),
                email: '',
            });
        }
    */
    constructor(fb: FormBuilder,private _userService: UserService, private _router: Router) {


        this.signupForm = fb.group({
            'email': ['', Validators.compose([Validators.required, EmailValidator.getEmailValidator()])],
            'name': ['', Validators.required]

        });
        this.email = this.signupForm.controls['email'];
        this.name = this.signupForm.controls['name'];
    }

    addUser(){
        let data = {"Name":this.signupForm.get('name').value, "email":this.signupForm.get('email').value};
         console.log(data);

         this._userService.postUser(data).subscribe(x => {
             this.signupForm.markAsPristine();
             this._router.navigate(['Users']);
         });
    }
}