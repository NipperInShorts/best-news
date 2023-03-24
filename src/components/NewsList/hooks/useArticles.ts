import { Article, ArticleResponse } from "@/components/NewsArticle/types";
import { ArticlesSearchParams } from "@/components/types";
import { getArticles } from "@/service/api";
import { useEffect, useMemo, useState } from "react";

export function useArticles({
  country,
  searchParams,
  searchQuery,
}: ArticlesSearchParams) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(true);

  let searchCountry = searchParams?.country || country;
  let query = searchParams?.query;
  let category = searchParams?.category;

  useEffect(() => {
    async function fetchArticles() {
      setLoadingArticles(true);
      try {
        const result = await getArticles({
          country: searchCountry,
          searchQuery: query,
          category,
        });
        if (!ignore) {
          setLoadingArticles(false);
          setArticles(result.articles);
        }
      } catch (e) {
        // send a log somewhere
        console.warn("had an error fetching", e);
        setLoadingArticles(false);
      }
    }

    let ignore = false;
    fetchArticles();
    return () => {
      ignore = true;
    };
  }, [category, country, query, searchCountry, searchQuery]);

  return useMemo(() => {
    return {
      loadingArticles,
      articles,
    };
  }, [articles, loadingArticles]);
}
