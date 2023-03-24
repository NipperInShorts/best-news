import { getSearchUrl } from "@/components/NewsList/helpers";
import { ArticlesSearchParams } from "@/components/types";

export async function getArticles({
  category,
  country,
  searchQuery,
}: ArticlesSearchParams) {
  const urlToFetch = getSearchUrl({ category, country, searchQuery });
  const response = await fetch(urlToFetch);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const articles = await response.json();
  return articles;
}
