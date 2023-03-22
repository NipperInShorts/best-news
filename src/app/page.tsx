import { ArticleList } from "@/components/NewsList";

export default function Home() {
  return (
    /* @ts-expect-error Server Component */
    <ArticleList />
  );
}
