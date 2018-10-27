import { environment } from '../environments/environment';

export class AppConfig {
    public static URL_AppBase: string = environment.appRoot;
    public static URL_ShipStationCustomers: string = AppConfig.URL_AppBase + '/customers';
}
