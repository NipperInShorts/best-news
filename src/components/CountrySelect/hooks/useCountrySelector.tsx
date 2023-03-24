import { useContext } from "react";

import { CountryContext } from "../CountryProvider/CountryProvider";

export function useCountrySelector() {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error("useCountrySelector must be used within a CountryProvider");
  }
  return context;
}
