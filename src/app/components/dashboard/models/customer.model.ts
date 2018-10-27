import { MarketplaceUsernamesModel } from './marketplace.usernames.model';
import { TagsModel } from './tags.model';

export class CustomerModel {
    addressVerified: string;
    city: string;
    company: string;
    countryCode: string;
    createDate: Date;
    customerId: number;
    email: string;
    marketplaceUsernames: MarketplaceUsernamesModel[];
    modifyDate: Date;
    name: string;
    phone: string;
    postalCode: string;
    state: string;
    street1: string;
    street2: string;
    tags: TagsModel[];
}
