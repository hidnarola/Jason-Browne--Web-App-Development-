import { BusinessDto } from './businessDto';

export interface BusinessSearchResultDto {
    Count?: number;
    Businesses?: Array<BusinessDto>;
}
