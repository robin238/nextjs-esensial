import { Setting } from "../types/Setting";
export async function getSetting(): Promise<Setting> {
  const res = await fetch("http://localhost:3001/settings");
  const setting = await res.json();
  return setting;
}
