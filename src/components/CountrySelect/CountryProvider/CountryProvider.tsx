"use client";

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Category, CountryOptions } from "@/components/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const countryOptions: CountryOptions[] = ["us", "gb"];

type ContextProps = {
  country: CountryOptions;
  options: CountryOptions[];
  handleSetCountry: (countryToSet: CountryOptions) => void;
};

export const CountryContext = createContext<ContextProps>({
  country: "us",
  options: countryOptions,
  handleSetCountry: () => {},
});

export default function CountryProvider({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [country, setCountry] = useState<CountryOptions>(countryBySearchParams);

  function countryBySearchParams() {
    if (searchParams.has("country")) {
      return (searchParams.get("country") as CountryOptions) || "us";
    }
    return "us";
  }

  const handleSetCountry = useCallback(
    (countryToSet: CountryOptions) => {
      setCountry(countryToSet);
      // abstract this functionality out
      // to build out router urls
      const params: {
        query?: string;
        country?: CountryOptions;
        category?: Category;
      } = {
        country,
      };

      if (searchParams.has("query")) {
        params.query = searchParams.get("query")!;
      }

      if (countryToSet) {
        params.country = countryToSet;
      }

      if (searchParams.has("category")) {
        params.category = searchParams.get("category")! as Category;
      }

      let routerParams = new URLSearchParams(params);
      router.push(`/search?${routerParams}`);
    },
    [country, router, searchParams],
  );

  useEffect(() => {
    if (pathname === "/") {
      setCountry("us");
    }
  }, [pathname]);

  const value = useMemo(() => {
    return {
      country,
      options: countryOptions,
      handleSetCountry,
    };
  }, [country, handleSetCountry]);

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}
