import { AffiliateLinkDto } from './affiliateLinkDto';
import { ComfortRatingSummaryDto } from './comfortRatingSummaryDto';
import { CovidStandardSummaryDto } from './covidStandardSummaryDto';

export interface BusinessDto {
    BusinessId?: string;
    ProviderId?: string;
    ProviderName?: string;
    Name?: string;
    IconUrl?: string;
    PrimaryPhotoUrl?: string;
    Address?: string;
    City?: string;
    State?: string;
    Zipcode?: string;
    LocationCoordinates?: string;
    Types?: Array<string>;
    Phone?: string;
    Website?: string;
    OperatingHours?: Array<string>;
    ComfortRatingSummary?: ComfortRatingSummaryDto;
    CovidStandardSummaries?: Array<CovidStandardSummaryDto>;
    AffiliateLinks?: Array<AffiliateLinkDto>;
}
