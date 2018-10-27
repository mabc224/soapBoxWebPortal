import { MarketplaceUsernamesModel } from './models/marketplace.usernames.model';
import { TagsModel } from './models/tags.model';

export class CustomerConstants {
    static getColumnDefs() {
        return [
            {
                headerName: 'Name',
                field: 'name',
                tooltipField: 'name'
            },
            {
                headerName: 'Address Verified',
                field: 'addressVerified',
                tooltipField: 'addressVerified'
            },
            {
                headerName: 'City',
                field: 'city',
                tooltipField: 'city'
            },
            {
                headerName: 'Company',
                field: 'company',
                tooltipField: 'company'
            },
            {
                headerName: 'Country Code',
                field: 'countryCode',
                tooltipField: 'countryCode'
            },
            {
                headerName: 'Create Date',
                field: 'createDate',
                tooltipField: 'createDate'
            },
            {
                headerName: 'Customer Id',
                field: 'customerId',
                tooltipField: 'customerId'
            },
            {
                headerName: 'Email',
                field: 'email',
                tooltipField: 'email'
            },
            {
                headerName: 'Marketplace Usernames',
                field: 'marketplaceUsernames',
                valueFormatter: CustomerConstants.marketPlaceFormatter,
                tooltip: CustomerConstants.marketPlaceFormatter
            },
            {
                headerName: 'Modify Date',
                field: 'modifyDate'
            },
            {
                headerName: 'Phone',
                field: 'phone'
            },
            {
                headerName: 'Postal Code',
                field: 'postalCode'
            },
            {
                headerName: 'State',
                field: 'state'
            },
            {
                headerName: 'Street1',
                field: 'street1'
            },
            {
                headerName: 'Street2',
                field: 'street2'
            },
            {
                headerName: 'Tags',
                field: 'tags',
                valueFormatter: CustomerConstants.tagsFormatter,
                tooltip: CustomerConstants.tagsFormatter
            }
        ];
    }

    static marketPlaceFormatter(params: any) {
        let result: string;
        const marketplaceUsernames = params.value as MarketplaceUsernamesModel[];
        marketplaceUsernames.forEach(element => {
            result += element.username + ', ';
        });
        return result;
    }

    static tagsFormatter(params: any) {
        let result: string;
        const tags = params.value as TagsModel[];
        tags.forEach(element => {
            result += element.name + ', ';
        });
        return result;
    }
}
