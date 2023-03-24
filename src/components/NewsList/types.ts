import { CountryOptions } from "../types";

export type SearchParams = {
  apiKey: string;
  country?: CountryOptions;
  q?: string;
};

export type UrlBuilder = {
  country: CountryOptions;
  searchQuery?: string;
};
