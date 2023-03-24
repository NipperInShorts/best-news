"use client";

import React from "react";
import { useCountrySelector } from "./hooks/useCountrySelector";
import { CountryButton } from "./components/CountryButton";

function CountrySelect() {
  const { country, options, handleSetCountry } = useCountrySelector();

  return (
    <div className="flex justify-center py-2">
      {options.map((option) => (
        <CountryButton
          key={option}
          option={option}
          handleSetCountry={handleSetCountry}
          selectedCountry={country}
        />
      ))}
    </div>
  );
}

export default CountrySelect;
