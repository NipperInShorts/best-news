import CountrySelect from "../CountrySelect";
import { Logo } from "../Logo";

export function Header() {
  return (
    <header className="flex justify-center flex-col px-10 pt-6 pb-4">
      <CountrySelect />
      <Logo />
    </header>
  );
}
