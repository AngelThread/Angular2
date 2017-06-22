import {Router, RouterModule} from '@angular/router';
import {NavBarComponent} from './navbar.component'
import {NotFoundComponent} from './not-found.component'
import {AppComponent} from './app.component'
import {HomePageComponent} from './home-page.component';
import {UserFormComponent} from './user-form.component';
import{PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service'

export const routingDef = RouterModule.forRoot([
    {path:'users/new',component:UserFormComponent, canDeactivate:[PreventUnsavedChangesGuard]},
    {path:'',component:HomePageComponent},
    {path:'**',component:HomePageComponent}
]);