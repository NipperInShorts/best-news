import { NewsList } from "@/components/NewsList";
import { BaseSearchParams } from "@/components/types";

interface PageProps {
  params: { slug: string };
  searchParams?: BaseSearchParams;
}

export default function Search({ searchParams }: PageProps) {
  return <NewsList searchParams={searchParams} />;
}
