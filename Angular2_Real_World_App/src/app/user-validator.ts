import { FormControl } from "@angular/forms";

export class EmailValidator {
    static getEmailValidator() {
        return function emailValidator(control: FormControl): { [s: string]: boolean } {

            if (control.value && !control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
                return { emailValidator: true };
            }
        }
    }
}