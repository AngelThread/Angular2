
import { UserFormComponent } from './user-form.component';
import { CanDeactivate } from "@angular/router";


export class PreventUnsavedChangesGuard implements CanDeactivate<UserFormComponent>{
    canDeactivate(component: UserFormComponent) {

        if(component.signupForm.dirty){
            return confirm("Are you sure?");
        }
        return true;

    }
}