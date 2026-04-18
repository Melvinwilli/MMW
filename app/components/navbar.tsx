import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-14 w-full border-b border-zinc-800 flex px-5 items-center justify-between fixed bg-background">
      <Link href="/">
        <h1 className="text-lg font-semibold tracking-tight">
          melvin
        </h1>
      </Link>
      <div className="flex gap-x-5">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/project" className="hover:underline">
          Project
        </Link>
      </div>
    </div>
  );
}