export type Error = {
  status: "error";
  code: string;
  message: string;
};

export type Success = {
  status: "ok";
  totalResults: number;
  articles: Article[];
};

export type ArticleResponse = Error | Success;

export type Article = {
  source: Source;
  author: string | null;

  /**
   * Headline
   */
  title: string;

  /**
   * A description or snippet from the article.
   * */
  description: string | null;

  /**
   * The direct URL to the article.
   */
  url: string;

  /**
   * // The URL to a relevant image for the article.
   */
  urlToImage: string | null;

  /**
   * The date and time that the article was published, in UTC (+000)
   */
  publishedAt: string;

  /**
   * The unformatted content of the article, where available. This is truncated to 200 chars.
   */
  content: string | null;
};

type Source = {
  id: string | null;
  name: string;
};
