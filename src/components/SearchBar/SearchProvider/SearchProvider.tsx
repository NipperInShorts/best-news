"use client";

import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCountrySelector } from "@/components/CountrySelect/hooks/useCountrySelector";
import { Category, CountryOptions } from "@/components/types";

export const SearchContext = createContext({
  searchQuery: "",
  handleSetQuery: (query: string) => {},
  handleOnChange: (query: string) => {},
});

export default function SearchProvider({ children }: PropsWithChildren) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState(searchStateByParam);
  const { country } = useCountrySelector();

  function searchStateByParam() {
    if (searchParams.has("query")) {
      return searchParams.get("query") || "";
    }
    return "";
  }

  useEffect(() => {
    if (pathname === "/") {
      setSearchQuery("");
    }
  }, [setSearchQuery, pathname]);

  const value = useMemo(() => {
    function handleSetQuery(query: string) {
      setSearchQuery(query);
      // abstract this functionality out
      // to build out router urls
      const params: {
        query?: string;
        country?: CountryOptions;
        category?: Category;
      } = {};

      if (searchQuery) {
        params.query = searchQuery;
      }

      if (searchParams.has("country")) {
        params.country = searchParams.get("country")! as CountryOptions;
      }

      if (searchParams.has("category")) {
        params.category = searchParams.get("category")! as Category;
      }
      let routerParams = new URLSearchParams(params);
      router.push(`/search?${routerParams}`);
    }

    function handleOnChange(query: string) {
      setSearchQuery(query);
    }

    return {
      handleOnChange,
      handleSetQuery,
      searchQuery,
    };
  }, [country, searchParams, searchQuery]);
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
