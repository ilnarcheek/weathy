export interface ISearchResult {
  suggestions: Array<{
    value: string;
    data: {
      geo_lat: number;
      geo_lon: number;
    };
  }>;
}
