import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {NavBarComponent} from './navbar.component'
import {NotFoundComponent} from './not-found.component'
import {routingDef} from './app.routing';
import {HomePageComponent} from './home-page.component'
import {TableComponent} from "./table.component";
import { HttpModule ,JsonpModule} from '@angular/http';
import {UserService} from './user.service';
import {UserFormComponent} from './user-form.component';
import {FormBuilder} from '@angular/forms';
import {EmailValidator} from './user-validator'
import{PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service'

@NgModule({
  imports:      [ BrowserModule , FormsModule,ReactiveFormsModule,routingDef,HttpModule,JsonpModule],
  declarations: [ AppComponent , NavBarComponent,NotFoundComponent,HomePageComponent,TableComponent,UserFormComponent],
  bootstrap:    [ AppComponent ],
  providers:[UserService,FormBuilder,EmailValidator,PreventUnsavedChangesGuard]
})
export class AppModule { }