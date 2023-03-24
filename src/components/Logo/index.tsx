import Link from "next/link";

export function Logo() {
  return (
    <div className="flex justify-center">
      <Link href={"/"}>
        <h1 className="text-5xl font-bold">Best News</h1>
      </Link>
    </div>
  );
}
