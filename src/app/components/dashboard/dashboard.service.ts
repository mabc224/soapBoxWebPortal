import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../services/BaseHttpService';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app.settings';

@Injectable({
    providedIn: 'root'
})
export class DashboardService extends BaseHttpService {
    // tslint:disable-next-line:max-line-length
    private shipStationCustomersParams = '?stateCode=&countryCode=&tagId=&marketplaceId=&sortBy=&sortDir=ASC&page=1&pageSize=100';
    constructor(httpClient: HttpClient) {
        super(httpClient);
    }

    getCustomers() {
        // tslint:disable-next-line:max-line-length
        return this.getData(AppConfig.URL_ShipStationCustomers + this.shipStationCustomersParams);
    }
}
