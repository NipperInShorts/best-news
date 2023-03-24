import { Category, CountryOptions } from "../types";

export type SearchParams = {
  apiKey: string;
  category?: Category;
  country?: CountryOptions;
  q?: string;
};

export type UrlBuilder = {
  category?: Category;
  country: CountryOptions;
  searchQuery?: string;
};
