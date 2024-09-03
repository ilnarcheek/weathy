export interface ITimezone {
  countryCode: string;
  countryName: string;
  cityName: string;
  zoneName: string;
  timestamp: number | null;
  formatted: string;
}
