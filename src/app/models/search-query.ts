import { CoordinatesGeography } from './coordinates-geograpy';

export interface SearchQuery {
  QueryString: string;
  LocationString: string;
  Coordinates: CoordinatesGeography;
}
