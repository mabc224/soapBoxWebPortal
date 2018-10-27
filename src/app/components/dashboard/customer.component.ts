import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { CustomerService } from './customer.service';
import { CustomerModel } from './models/customer.model';
import { CustomersResponseModel } from './models/customers.response.model';
import { CustomerConstants } from './customer.constants';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, AfterViewInit {
    // tslint:disable-next-line:max-line-length
    public columnDefs: any;
    // tslint:disable-next-line:max-line-length
    public rowData: any = undefined;
    public title = 'Soap Box - Web Portal';
    public gridOptions: GridOptions = {};
    public quickFilter: string;
    public customersData: CustomerModel;

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomers().subscribe((res: CustomersResponseModel) => {
            if (res.total > 0) {
                this.customersData = res.customers;
                this.columnDefs = CustomerConstants.getColumnDefs();
                this.rowData = res.customers;
            }
        });
    }

    ngAfterViewInit(): void {}

    onFilterTextChanged($event) {
        this.gridOptions.api.setQuickFilter(this.quickFilter);
    }
}
