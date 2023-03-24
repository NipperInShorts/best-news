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

export const SearchContext = createContext({
  searchQuery: "",
  handleSetQuery: (query: string) => {},
  handleOnChange: (query: string) => {},
});

export default function SearchProvider({ children }: PropsWithChildren) {
  const [searchQuery, setSearchQuery] = useState(searchStateByParam);
  const { country } = useCountrySelector();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

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
      if (query) {
        router.push(`/search?query=${searchQuery}&country=${country}`);
      }
    }

    function handleOnChange(query: string) {
      setSearchQuery(query);
    }

    return {
      handleOnChange,
      handleSetQuery,
      searchQuery,
    };
  }, [country, router, searchQuery]);
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
