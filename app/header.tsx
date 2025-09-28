import Link from "next/link";
import { getSetting } from "./queries/getSetting";
import { Nav } from "./nav";
import { Suspense } from "react";
export async function Header() {
  const setting = getSetting();
  return (
    <header>
      <Suspense fallback="loading..">
        <Nav settingPromise={setting} />
      </Suspense>
    </header>
  );
}
