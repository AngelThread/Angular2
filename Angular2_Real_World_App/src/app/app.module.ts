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
import {UserService} from './users/user.service';
import {UserFormComponent} from './users/user-form.component';
import {FormBuilder} from '@angular/forms';
import {EmailValidator} from './users/user-validator'
import{PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service'
import { PostsPageComponent } from "./posts/posts.component";
import { PostService } from "./posts/posts.service";
import { CommentsComponent } from "./comments.component";
import { PaginationComponent } from "./pagination.component";

@NgModule({
  imports:      [ BrowserModule , FormsModule,ReactiveFormsModule,routingDef,HttpModule,JsonpModule],
  declarations: [ AppComponent , CommentsComponent, PaginationComponent,NavBarComponent,NotFoundComponent,HomePageComponent,TableComponent,UserFormComponent,PostsPageComponent],
  bootstrap:    [ AppComponent ],
  providers:[UserService,PostService,FormBuilder,EmailValidator,PreventUnsavedChangesGuard]
})
export class AppModule { }