import { CustomerModel } from './customer.model';

export class CustomersResponseModel {
    customers: CustomerModel;
    total: number;
    page: number;
    pages: number;
}
