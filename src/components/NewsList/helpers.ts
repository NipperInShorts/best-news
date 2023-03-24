import { HEADLINES_URL, emptyNewsMessages } from "@/constants";
import { SearchParams, UrlBuilder } from "./types";

export function getSearchUrl({ country, searchQuery }: UrlBuilder) {
  if (process.env.NEXT_PUBLIC_NEWS_API_KEY === undefined) {
    throw new Error("Undefined API key");
  }

  const params: SearchParams = {
    apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
    country,
  };

  if (searchQuery) {
    params["q"] = searchQuery;
  }

  const urlParams = new URLSearchParams(params);
  const urlToFetch = `${HEADLINES_URL}?${urlParams}`;

  return urlToFetch;
}

export function getRandomMessage() {
  let randomIndex = Math.floor(Math.random() * emptyNewsMessages.length);
  return emptyNewsMessages[randomIndex];
}
