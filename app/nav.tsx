import Link from "next/link";

export async function Nav() {
  return (
    <nav className="flex gap-4 border-b-2 p-4">
      {/* <a href="/">Home</a>
            <a href="/about/team">About Team</a>
            <a href="/admin/product">Admin Product</a> */}

      <Link href={"/"}>Home</Link>
      <Link href={"/posts"}>Posts</Link>
      <Link href={"/about"}>About</Link>
    </nav>
  );
}
