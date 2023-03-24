export type CountryOptions = "us" | "gb";

export type ArticlesSearchParams = {
  category?: Category;
  country: CountryOptions;
  searchParams?: BaseSearchParams;
  searchQuery?: string;
};

export type BaseSearchParams = {
  category?: Category;
  country: CountryOptions;
  query: string;
};

export type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";
