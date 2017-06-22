"use strict";
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.getEmailValidator = function () {
        return function emailValidator(control) {
            if (control.value && !control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
                return { emailValidator: true };
            }
        };
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=user-validator.js.map