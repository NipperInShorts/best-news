import { CountryOptions } from "@/components/types";

type ButtonProps = {
  handleSetCountry: (option: CountryOptions) => void;
  option: CountryOptions;
  selectedCountry: CountryOptions;
};

export function CountryButton({
  handleSetCountry,
  option,
  selectedCountry,
}: ButtonProps) {
  function hanldeClick() {
    handleSetCountry(option);
  }
  return (
    <button onClick={hanldeClick}>
      <span
        className={`${
          selectedCountry === option ? "text-orange-500" : "text-slate-900"
        } px-2 font-bold text-sm`}
      >
        {option.toUpperCase()}
      </span>
    </button>
  );
}
