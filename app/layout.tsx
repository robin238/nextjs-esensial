import type { Metadata } from "next";
import { Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Header } from "./header";
import { Footer } from "./footer";
import { getSetting } from "./queries/getSetting";
const fontSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "BLog gue nih",
// };

// export const metadata: Metadata = {
export async function generateMetadata() {
  const setting = await getSetting();
  return {
    // title: "Create Next App",
    title: { template: `%s | ${setting.siteName}`, default: "untitled" },
    description: "BLog gue nih",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // throw new Error("Error from root layout");
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
