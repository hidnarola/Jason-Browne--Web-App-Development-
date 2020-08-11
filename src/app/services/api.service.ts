import { BusinessSearchResultDto } from './../models/businessSearchResultDto';
import { Injectable } from '@angular/core';
import { Business } from '../models/business';
import { Observable, of } from 'rxjs';
import { SearchQuery } from '../models/search-query';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( ) { }

  SearchBusinesses(searchQuery: SearchQuery): Observable<BusinessSearchResultDto> {

    // return dummy data rather than make real API call

    return of(
      {
        "Count": 9,
        "Businesses": [
           {
              "BusinessId": "5e02df9b1d2b4486bb90ab73cee16f43",
              "ProviderId": "poi.180388640073",
              "ProviderName": null,
              "Name": "Starbucks",
              "IconUrl": null,
              "PrimaryPhotoUrl": null,
              "Address": "232 W College Ave, State College, Pennsylvania 16801",
              "City": "State College",
              "State": "Pennsylvania",
              "Zipcode": "16801",
              "LocationCoordinates": "-77.863558,40.792721",
              "Types": [
                 "coffee",
                 "cafe"
              ],
              "Phone": null,
              "Website": null,
              "OperatingHours": null,
              "ComfortRatingSummary": {
                 "ComfortRating": 2.5,
                 "ComfortRatingCount": 4
              },
              "CovidStandardSummaries": [
                 {
                    "StandardId": 1,
                    "Label": "Patrons six feet apart",
                    "YesPercent": 1,
                    "YesCount": 1,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": null,
                    "BlankCount": null
                 },
                 {
                    "StandardId": 2,
                    "Label": "Staff wears masks",
                    "YesPercent": 1,
                    "YesCount": 1,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": null,
                    "BlankCount": null
                 },
                 {
                    "StandardId": 3,
                    "Label": "Hand sanitizer available",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 4,
                    "Label": "Single flow traffic",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 5,
                    "Label": "Touchless menu/payment",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 6,
                    "Label": "Surfaces appear regulary wiped down",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 }
              ],
              "AffiliateLinks": null
           },
           {
              "BusinessId": "f6a84e8f18fe433a859db15ed56393e4",
              "ProviderId": "poi.558345838752",
              "ProviderName": null,
              "Name": "Saint's Cafe",
              "IconUrl": null,
              "PrimaryPhotoUrl": null,
              "Address": "123 W Beaver Ave, State College, Pennsylvania 16801",
              "City": "State College",
              "State": "Pennsylvania",
              "Zipcode": "16801",
              "LocationCoordinates": "-77.86091,40.793048",
              "Types": [
                 "cafe",
                 "coffee",
                 "tea",
                 "tea house"
              ],
              "Phone": null,
              "Website": null,
              "OperatingHours": null,
              "ComfortRatingSummary": {
                 "ComfortRating": 3,
                 "ComfortRatingCount": 3
              },
              "CovidStandardSummaries": [
                 {
                    "StandardId": 1,
                    "Label": "Patrons six feet apart",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 2,
                    "Label": "Staff wears masks",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 3,
                    "Label": "Hand sanitizer available",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 4,
                    "Label": "Single flow traffic",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 5,
                    "Label": "Touchless menu/payment",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 6,
                    "Label": "Surfaces appear regulary wiped down",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 }
              ],
              "AffiliateLinks": null
           },
           {
              "BusinessId": "a30c72223788470aa1df3eeb593019f0",
              "ProviderId": "poi.1047972048429",
              "ProviderName": null,
              "Name": "Dunkin'",
              "IconUrl": null,
              "PrimaryPhotoUrl": null,
              "Address": "200 W College Ave, State College, Pennsylvania 16801",
              "City": "State College",
              "State": "Pennsylvania",
              "Zipcode": "16801",
              "LocationCoordinates": "-77.862706,40.793361",
              "Types": [
                 "coffee",
                 "cafe"
              ],
              "Phone": null,
              "Website": null,
              "OperatingHours": null,
              "ComfortRatingSummary": {
                 "ComfortRating": 4,
                 "ComfortRatingCount": 1
              },
              "CovidStandardSummaries": [
                 {
                    "StandardId": 1,
                    "Label": "Patrons six feet apart",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 2,
                    "Label": "Staff wears masks",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 3,
                    "Label": "Hand sanitizer available",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 4,
                    "Label": "Single flow traffic",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 5,
                    "Label": "Touchless menu/payment",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 6,
                    "Label": "Surfaces appear regulary wiped down",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 }
              ],
              "AffiliateLinks": null
           },
           {
              "BusinessId": "df8b5027d4d745ce8d90e813a8eb88f3",
              "ProviderId": "poi.163208808135",
              "ProviderName": null,
              "Name": "Panera Bread",
              "IconUrl": null,
              "PrimaryPhotoUrl": null,
              "Address": "1613 N Atherton St, State College, Pennsylvania 16803",
              "City": "State College",
              "State": "Pennsylvania",
              "Zipcode": "16803",
              "LocationCoordinates": "-77.893826,40.80818",
              "Types": [
                 "cafe",
                 "coffee",
                 "tea",
                 "tea house"
              ],
              "Phone": null,
              "Website": null,
              "OperatingHours": null,
              "ComfortRatingSummary": {
                 "ComfortRating": 2.5,
                 "ComfortRatingCount": 2
              },
              "CovidStandardSummaries": [
                 {
                    "StandardId": 1,
                    "Label": "Patrons six feet apart",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 2,
                    "Label": "Staff wears masks",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 3,
                    "Label": "Hand sanitizer available",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 4,
                    "Label": "Single flow traffic",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 5,
                    "Label": "Touchless menu/payment",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 6,
                    "Label": "Surfaces appear regulary wiped down",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 }
              ],
              "AffiliateLinks": null
           },
           {
              "BusinessId": null,
              "ProviderId": "poi.34359843126",
              "ProviderName": null,
              "Name": "Panera Bread",
              "IconUrl": null,
              "PrimaryPhotoUrl": null,
              "Address": "148 S Allen St, State College, Pennsylvania 16801",
              "City": "State College",
              "State": "Pennsylvania",
              "Zipcode": "16801",
              "LocationCoordinates": "-77.860618,40.793381",
              "Types": [
                 "cafe",
                 "coffee",
                 "tea",
                 "tea house"
              ],
              "Phone": null,
              "Website": null,
              "OperatingHours": null,
              "ComfortRatingSummary": null,
              "CovidStandardSummaries": null,
              "AffiliateLinks": null
           },
           {
              "BusinessId": "faaf74c92a1e49ae929c933c969405ef",
              "ProviderId": "poi.335007542664",
              "ProviderName": null,
              "Name": "Starbucks",
              "IconUrl": null,
              "PrimaryPhotoUrl": null,
              "Address": "2030 N Atherton St, State College, Pennsylvania 16803",
              "City": "State College",
              "State": "Pennsylvania",
              "Zipcode": "16803",
              "LocationCoordinates": "-77.90748,40.809067",
              "Types": [
                 "coffee",
                 "cafe"
              ],
              "Phone": null,
              "Website": null,
              "OperatingHours": null,
              "ComfortRatingSummary": {
                 "ComfortRating": 5,
                 "ComfortRatingCount": 1
              },
              "CovidStandardSummaries": [
                 {
                    "StandardId": 1,
                    "Label": "Patrons six feet apart",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 2,
                    "Label": "Staff wears masks",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 3,
                    "Label": "Hand sanitizer available",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 4,
                    "Label": "Single flow traffic",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 5,
                    "Label": "Touchless menu/payment",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 6,
                    "Label": "Surfaces appear regulary wiped down",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 }
              ],
              "AffiliateLinks": null
           },
           {
              "BusinessId": null,
              "ProviderId": "poi.120259085996",
              "ProviderName": null,
              "Name": "Webster's Bookstore Cafe",
              "IconUrl": null,
              "PrimaryPhotoUrl": null,
              "Address": "133 E Beaver Ave, State College, Pennsylvania 16801",
              "City": "State College",
              "State": "Pennsylvania",
              "Zipcode": "16801",
              "LocationCoordinates": "-77.859854,40.794",
              "Types": [
                 "cafe",
                 "coffee",
                 "tea",
                 "tea house"
              ],
              "Phone": null,
              "Website": null,
              "OperatingHours": null,
              "ComfortRatingSummary": null,
              "CovidStandardSummaries": null,
              "AffiliateLinks": null
           },
           {
              "BusinessId": "b694aad324594026a26cc8c3cdd76a7f",
              "ProviderId": "poi.996432427577",
              "ProviderName": null,
              "Name": "Commonplace State College",
              "IconUrl": null,
              "PrimaryPhotoUrl": null,
              "Address": "115 S Fraser St, State College, Pennsylvania 16801",
              "City": "State College",
              "State": "Pennsylvania",
              "Zipcode": "16801",
              "LocationCoordinates": "-77.862323,40.79322",
              "Types": [
                 "cafe",
                 "coffee",
                 "tea",
                 "tea house"
              ],
              "Phone": null,
              "Website": null,
              "OperatingHours": null,
              "ComfortRatingSummary": {
                 "ComfortRating": 1.3333334,
                 "ComfortRatingCount": 3
              },
              "CovidStandardSummaries": [
                 {
                    "StandardId": 1,
                    "Label": "Patrons six feet apart",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 2,
                    "Label": "Staff wears masks",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 3,
                    "Label": "Hand sanitizer available",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 4,
                    "Label": "Single flow traffic",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 5,
                    "Label": "Touchless menu/payment",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 },
                 {
                    "StandardId": 6,
                    "Label": "Surfaces appear regulary wiped down",
                    "YesPercent": null,
                    "YesCount": null,
                    "NoPercent": null,
                    "NoCount": null,
                    "SomePercent": null,
                    "SomeCount": null,
                    "BlankPercent": 1,
                    "BlankCount": 1
                 }
              ],
              "AffiliateLinks": null
           },
           {
              "BusinessId": null,
              "ProviderId": "poi.661425023770",
              "ProviderName": null,
              "Name": "Starbucks",
              "IconUrl": null,
              "PrimaryPhotoUrl": null,
              "Address": "141 S Garner St, State College, Pennsylvania 16801",
              "City": "State College",
              "State": "Pennsylvania",
              "Zipcode": "16801",
              "LocationCoordinates": "-77.85611,40.797417",
              "Types": [
                 "coffee",
                 "cafe"
              ],
              "Phone": null,
              "Website": null,
              "OperatingHours": null,
              "ComfortRatingSummary": null,
              "CovidStandardSummaries": null,
              "AffiliateLinks": null
           }
        ]
     }
    );

  }

}
