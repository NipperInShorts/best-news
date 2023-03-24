"use client";

import React from "react";
import NewsArticle from "../NewsArticle";

import { BaseSearchParams } from "../types";
import { useCountrySelector } from "../CountrySelect/hooks/useCountrySelector";

import { useArticles } from "./hooks/useArticles";
import { getRandomMessage } from "./helpers";
import { ArticleLoader } from "../ArticleSkeleton";

type Props = {
  searchParams?: BaseSearchParams;
};

export function NewsList({ searchParams }: Props) {
  const { country } = useCountrySelector();

  const { articles, loadingArticles } = useArticles({ country, searchParams });

  if (loadingArticles) return <ArticleLoader />;

  return (
    <div className="mt-4">
      {articles.length === 0 ? (
        <>
          <div className="flex justify-center">
            <h2 className="font-bold text-3xl text-green-700">
              {getRandomMessage()}
            </h2>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-8 gap-y-16 pb-24">
          {articles?.map((article) => (
            <NewsArticle key={article.url} {...article} />
          ))}
        </div>
      )}
    </div>
  );
}
