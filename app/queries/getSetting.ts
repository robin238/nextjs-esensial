import { Setting } from "../types/setting";
export async function getSetting(): Promise<Setting> {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, 3000)
  );

  const res = await fetch("http://localhost:3001/settings");
  const setting = await res.json();
  return setting;
}
