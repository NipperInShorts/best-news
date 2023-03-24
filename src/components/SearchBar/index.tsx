"use client";

import { ChangeEvent, FormEvent } from "react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { useSearchBar } from "./hooks/useSearchBar";

interface SearchInputElement extends HTMLFormControlsCollection {
  searchInput: HTMLInputElement;
}

interface SearchForm extends HTMLFormElement {
  readonly elements: SearchInputElement;
}

export default function SearchBar() {
  const { handleOnChange, handleSetQuery, searchQuery } = useSearchBar();

  function handleSubmit(event: FormEvent<SearchForm>) {
    event.preventDefault();
    handleSetQuery(event.currentTarget.elements.searchInput.value);
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    handleOnChange(event.target.value);
  }

  return (
    <div className="flex justify-center pb-10">
      <form onSubmit={handleSubmit}>
        <label className="relative block">
          <input
            type="text"
            name="searchInput"
            className="placeholder:italic text-slate-700 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 sm:text-sm w-80"
            placeholder="Search the news"
            value={searchQuery}
            onChange={onChange}
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <MagnifyingGlassCircleIcon className="h-6 w-6 text-slate-400" />
          </span>
        </label>
      </form>
    </div>
  );
}
