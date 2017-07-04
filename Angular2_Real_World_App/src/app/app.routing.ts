import {Router, RouterModule} from '@angular/router';
import {NavBarComponent} from './navbar.component'
import {NotFoundComponent} from './not-found.component'
import {AppComponent} from './app.component'
import {HomePageComponent} from './home-page.component';
import {UserFormComponent} from './users/user-form.component';
import{PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service'
import { PostsPageComponent } from "./posts/posts.component";

export const routingDef = RouterModule.forRoot([
    {path:'users/:id',component:UserFormComponent, canDeactivate:[PreventUnsavedChangesGuard]},
    {path:'users',component:UserFormComponent, canDeactivate:[PreventUnsavedChangesGuard]},
    {path:'Posts',component:PostsPageComponent},
    {path:'',component:HomePageComponent},
    {path:'**',component:HomePageComponent}
]);