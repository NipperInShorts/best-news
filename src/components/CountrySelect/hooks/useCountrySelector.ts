import { useState } from "react";
import { CountryOptions } from "../types";

export function useCountrySelector() {
  const options: CountryOptions[] = ["US", "GB"];
  const [country, setCountry] = useState<CountryOptions>("US");

  return {
    country,
    options,
    setCountry,
  };
}
