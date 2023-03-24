export type CountryOptions = "us" | "gb";

export type ArticlesSearchParams = {
  country: CountryOptions;
  searchParams?: BaseSearchParams;
  searchQuery?: string;
};

export type BaseSearchParams = {
  country: CountryOptions;
  query: string;
};
