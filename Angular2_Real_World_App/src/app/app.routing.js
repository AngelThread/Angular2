"use strict";
var router_1 = require('@angular/router');
var home_page_component_1 = require('./home-page.component');
var user_form_component_1 = require('./users/user-form.component');
var prevent_unsaved_changes_guard_service_1 = require('./prevent-unsaved-changes-guard.service');
var posts_component_1 = require("./posts/posts.component");
exports.routingDef = router_1.RouterModule.forRoot([
    { path: 'users/:id', component: user_form_component_1.UserFormComponent, canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard] },
    { path: 'users', component: user_form_component_1.UserFormComponent, canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard] },
    { path: 'Posts', component: posts_component_1.PostsPageComponent },
    { path: '', component: home_page_component_1.HomePageComponent },
    { path: '**', component: home_page_component_1.HomePageComponent }
]);
//# sourceMappingURL=app.routing.js.map