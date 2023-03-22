import Link from "next/link";

export function Logo() {
  return (
    <div className="flex justify-center space-x-2">
      <Link href={"/"}>
        <h1 className="text-5xl font-bold">Best News</h1>
      </Link>
    </div>
  );
}
