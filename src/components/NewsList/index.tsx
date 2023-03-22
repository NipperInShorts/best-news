import React from "react";
import NewsArticle from "../NewsArticle";
import { Article, ArticleResponse } from "../NewsArticle/types";
import { topHeadlines } from "../articles-mock";
type Props = {};

const QUERY_LIMIT = 20;

async function getArticles() {
  // const res = await fetch();
  const res = topHeadlines;

  if (res.status === "error") {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.articles;
}

export async function ArticleList({}: Props) {
  const articles = await getArticles();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-8 gap-y-16 pb-24">
      {articles.map((article) => (
        <NewsArticle
          key={`${article.source.id}-${article.publishedAt}`}
          {...article}
        />
      ))}
    </div>
  );
}
