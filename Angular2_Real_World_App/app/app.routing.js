"use strict";
var router_1 = require('@angular/router');
var home_page_component_1 = require('./home-page.component');
var user_form_component_1 = require('./user-form.component');
var prevent_unsaved_changes_guard_service_1 = require('./prevent-unsaved-changes-guard.service');
exports.routingDef = router_1.RouterModule.forRoot([
    { path: 'users/new', component: user_form_component_1.UserFormComponent, canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard] },
    { path: '', component: home_page_component_1.HomePageComponent },
    { path: '**', component: home_page_component_1.HomePageComponent }
]);
//# sourceMappingURL=app.routing.js.map