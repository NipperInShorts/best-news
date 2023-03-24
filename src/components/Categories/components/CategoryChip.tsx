import { Category } from "@/components/types";

type CategoryChipProps = {
  category: Category;
  handleSetCategory: (category: Category) => void;
  selectedCategory: Category | undefined;
};

export function CategoryChip({
  category,
  handleSetCategory,
  selectedCategory,
}: CategoryChipProps) {
  function handleClick() {
    handleSetCategory(category);
  }

  return (
    <div
      className={`rounded-md p-1 justify-center text-center mx-1 my-1 ${
        selectedCategory === category ? `bg-orange-500` : `bg-slate-400`
      } `}
    >
      <span onClick={handleClick} className={`text-white p-4`}>
        {category}
      </span>
    </div>
  );
}
