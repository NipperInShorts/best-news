"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Category, CountryOptions } from "@/components/types";
import { newsCategories } from "@/constants";
import { SearchParams } from "@/components/NewsList/types";
import { useCountrySelector } from "@/components/CountrySelect/hooks/useCountrySelector";

export function useCategories() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { country } = useCountrySelector();
  const [category, setCategory] = useState<Category | undefined>(
    categoryBySearchParams,
  );

  function categoryBySearchParams() {
    if (searchParams.has("category")) {
      return (searchParams.get("category") as Category) || undefined;
    }
    return undefined;
  }

  const handleSetCategory = useCallback(
    (categoryToSet: Category) => {
      setCategory(categoryToSet);
      // a little ham-fisted and repetitive
      // might be good to abstract to a helper
      const params: {
        category?: string;
        query?: string;
        country?: CountryOptions;
      } = {};
      if (searchParams.has("query")) {
        params.query = searchParams.get("query")!;
      }
      if (searchParams.has("country")) {
        params.country = searchParams.get("country")! as CountryOptions;
      } else {
        params.country = country;
      }
      if (categoryToSet) {
        params.category = categoryToSet;
      }
      const url = new URLSearchParams(params);
      router.push(`/search?${url}`);
    },
    [country, router, searchParams],
  );

  useEffect(() => {
    if (pathname === "/") {
      setCategory(undefined);
    }
  }, [pathname]);

  return useMemo(() => {
    return {
      category,
      options: newsCategories,
      handleSetCategory,
    };
  }, [category, handleSetCategory]);
}
