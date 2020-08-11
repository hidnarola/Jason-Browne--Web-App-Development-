import { CoordinatesGeography } from 'src/app/models/coordinates-geograpy';
import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() searchQueryString: string;
  @Input() locationString: string;
  @Input() coordinates: CoordinatesGeography;
  @Output() searchQueryStringChange = new EventEmitter<string>();
  @Output() locationStringChange = new EventEmitter<string>();
  @Output() coordinatesChange = new EventEmitter<CoordinatesGeography>();
  @Output() enterKeyPress = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onEnterKeyDownSearchInput(e: KeyboardEvent): void {
    this.enterKeyPress.emit();
  }

  onSearchInput(e: InputEvent): void {
    this.searchQueryStringChange.emit((e.target as HTMLInputElement).value);
  }

  onLocationInput(e: InputEvent): void {
    this.locationStringChange.emit((e.target as HTMLInputElement).value);
  }

  onLocationAutoCompleteSelectionChanged(e: MatAutocompleteSelectedEvent): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.locationStringChange.emit('Your current location');
        this.coordinatesChange.emit( { Latitude: latitude, Longitude: longitude});
      });
    } else {
      // If they don't give browser locaiton permission, do nothing
      // We should geolocate their Ip address and use that
    }
  }
}
