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
var core_1 = require("@angular/core");
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.pageChanged = new core_1.EventEmitter();
        this.pageSize = 10;
        this.currentPage = 1;
        this.pages = [];
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        console.log(this.itemsCount);
        this.pages = [];
        for (var i = 1; i <= this.itemsCount / this.pageSize; i++) {
            this.pages.push(i);
        }
    };
    PaginationComponent.prototype.ngOnInit = function () {
        this.pages = [];
        for (var i = 1; i <= this.itemsCount / this.pageSize; i++) {
            this.pages.push(i);
        }
    };
    PaginationComponent.prototype.changePage = function (page) {
        this.currentPage = page;
        this.pageChanged.emit(this.currentPage);
    };
    PaginationComponent.prototype.previous = function () {
        if (this.currentPage === 1) {
            return;
        }
        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    };
    PaginationComponent.prototype.next = function () {
        if (this.currentPage === this.pageSize) {
            return;
        }
        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    };
    __decorate([
        core_1.Output('page-changed'), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "pageChanged", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "itemsCount", void 0);
    __decorate([
        core_1.Input('page-size'), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "pageSize", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'pagination-comp',
            template: "\n<nav aria-label=\"Page navigation example\"  *ngIf=\"itemsCount > pageSize\">\n  <ul class=\"pagination\">\n    <li class=\"page-item\" [class.disabled]=\" currentPage === 1\" (click)=\"previous()\">\n      <a aria-label=\"Previous\">\n        <span aria-hidden=\"true\">&laquo;</span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n    </li>\n    <li class=\"page-item\" *ngFor=\"let page of pages\" (click)=\"changePage(page)\" \n    [class.active]=\"currentPage === page\">\n    <a>{{page}}</a></li>\n    <li class=\"page-item\" [class.disabled]=\"currentPage === pages.length\" (click)=\"next()\">\n      <a aria-label=\"Next\">\n        <span aria-hidden=\"true\">&raquo;</span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </li>\n  </ul>\n</nav>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map