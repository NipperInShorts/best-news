import { useContext, useMemo } from "react";
import { SearchContext } from "../SearchProvider/SearchProvider";

export function useSearchBar() {
  const { handleOnChange, handleSetQuery, searchQuery } =
    useContext(SearchContext);

  return useMemo(() => {
    return {
      searchQuery,
      handleOnChange,
      handleSetQuery,
    };
  }, [handleOnChange, handleSetQuery, searchQuery]);
}
