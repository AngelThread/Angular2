

import { OnInit, OnChanges, EventEmitter, Input, Component, Output } from "@angular/core";
import { PostService } from "./posts.service";

@Component({
    selector: 'pagination-comp',
    template: `
<nav aria-label="Page navigation example"  *ngIf="itemsCount > pageSize">
  <ul class="pagination">
    <li class="page-item" [class.disabled]=" currentPage === 1" (click)="previous()">
      <a aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item" *ngFor="let page of pages" (click)="changePage(page)" 
    [class.active]="currentPage === page">
    <a>{{page}}</a></li>
    <li class="page-item" [class.disabled]="currentPage === pages.length" (click)="next()">
      <a aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
`
})

export class PaginationComponent implements OnInit, OnChanges {
    @Output('page-changed') pageChanged = new EventEmitter();


    @Input() itemsCount;
    @Input('page-size') pageSize = 10;
    pageCount;

    currentPage=1;
    pages = [];

    ngOnChanges() {
        console.log(this.itemsCount);
        this.pages = [];
        for (let i = 1; i <= this.itemsCount / this.pageSize; i++) {
            this.pages.push(i);

        }
    }

    ngOnInit(): void {
        this.pages = [];
        for (let i = 1; i <= this.itemsCount / this.pageSize; i++) {
            this.pages.push(i);
        }
    }

    changePage(page) {
        this.currentPage = page;
        this.pageChanged.emit(this.currentPage);
    }

    previous(){
        if(this.currentPage === 1){
            return;
        }
        this.currentPage--;
        this.pageChanged.emit(this.currentPage);

    }
    next(){
        if(this.currentPage === this.pageSize){
            return;
        }
        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    }
}