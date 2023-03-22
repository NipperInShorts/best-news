"use client";

import React from "react";
import { useCountrySelector } from "./hooks/useCountrySelector";

function CountrySelect() {
  const { country, options, setCountry } = useCountrySelector();

  return (
    <div className="flex justify-center py-2">
      {options.map((option) => (
        <button key={option} onClick={() => setCountry(option)}>
          <span
            className={`${
              country === option ? "text-orange-500" : "text-slate-900"
            } px-2 font-bold text-sm`}
          >
            {option}
          </span>
        </button>
      ))}
    </div>
  );
}

export default CountrySelect;
