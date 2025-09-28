import Link from "next/link";
import { getSetting } from "./queries/getSetting";
import { Nav } from "./nav";
export async function Header() {
  const setting = await getSetting();
  return (
    <header>
      <div className="text-2xl">{setting.siteName}</div>
      <Nav />
    </header>
  );
}
