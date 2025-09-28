"use client";
import Link from "next/link";
import { getSetting } from "./queries/getSetting";
import { Setting } from "./types/setting";
import { use } from "react";
export function Nav({ settingPromise }: { settingPromise: Promise<Setting> }) {
  // const setting = await getSetting();
  const setting = use(settingPromise);
  console.log(setting);
  return (
    <nav className="flex gap-4 border-b-2 p-4">
      <div className="text-2xl">{setting.siteName}</div>
      {/* <a href="/">Home</a>
            <a href="/about/team">About Team</a>
            <a href="/admin/product">Admin Product</a> */}
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/about/team"}>Team</Link>
    </nav>
  );
}
