import Link from "next/link";
type Setting = {
  siteName: string;
};

async function getSetting(): Promise<Setting> {
  const res = await fetch("http://localhost:3001/settings");
  const setting = await res.json();
  return setting;
}
export async function Header() {
  const setting = await getSetting();
  return (
    <header>
      <div className="text-2xl">{setting.siteName}</div>
      <nav className="flex gap-4 border-b-2 p-4">
        {/* <a href="/">Home</a>
            <a href="/about/team">About Team</a>
            <a href="/admin/product">Admin Product</a> */}

        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/about/team"}>Team</Link>
      </nav>
    </header>
  );
}
