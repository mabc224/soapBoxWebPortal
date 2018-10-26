import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
    // tslint:disable-next-line:max-line-length
    public columnDefs: any = [{ headerName: 'Make', field: 'make' }, { headerName: 'Model', field: 'model' }, { headerName: 'Price', field: 'price' }];
    // tslint:disable-next-line:max-line-length
    public rowData: any = [{ make: 'Toyota', model: 'Celica', price: 35000 }, { make: 'Ford', model: 'Mondeo', price: 32000 }, { make: 'Porsche', model: 'Boxter', price: 72000 }];
    public title = 'Soap Box - Web Portal';
    public gridOptions: GridOptions = {};
    quickFilter: string;

    constructor() {}

    ngOnInit() {}

    ngAfterViewInit(): void {}

    onFilterTextChanged($event) {
        this.gridOptions.api.setQuickFilter(this.quickFilter);
    }
}
