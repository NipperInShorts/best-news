"use client";

import { CategoryChip } from "./components/CategoryChip";
import { useCategories } from "./hooks/useCategories";

export function Categories() {
  const { category, handleSetCategory, options } = useCategories();

  return (
    <div className="flex flex-row flex-wrap justify-center max-w-lg m-auto">
      {options.map((option) => (
        <CategoryChip
          key={option}
          category={option}
          selectedCategory={category}
          handleSetCategory={handleSetCategory}
        />
      ))}
    </div>
  );
}
