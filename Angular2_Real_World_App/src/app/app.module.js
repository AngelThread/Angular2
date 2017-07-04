"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar.component');
var not_found_component_1 = require('./not-found.component');
var app_routing_1 = require('./app.routing');
var home_page_component_1 = require('./home-page.component');
var table_component_1 = require("./table.component");
var http_1 = require('@angular/http');
var user_service_1 = require('./user.service');
var user_form_component_1 = require('./user-form.component');
var forms_2 = require('@angular/forms');
var user_validator_1 = require('./user-validator');
var prevent_unsaved_changes_guard_service_1 = require('./prevent-unsaved-changes-guard.service');
var posts_component_1 = require("./posts.component");
var posts_service_1 = require("./posts.service");
var comments_component_1 = require("./comments.component");
var pagination_component_1 = require("./pagination.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, app_routing_1.routingDef, http_1.HttpModule, http_1.JsonpModule],
            declarations: [app_component_1.AppComponent, comments_component_1.CommentsComponent, pagination_component_1.PaginationComponent, navbar_component_1.NavBarComponent, not_found_component_1.NotFoundComponent, home_page_component_1.HomePageComponent, table_component_1.TableComponent, user_form_component_1.UserFormComponent, posts_component_1.PostsPageComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [user_service_1.UserService, posts_service_1.PostService, forms_2.FormBuilder, user_validator_1.EmailValidator, prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map