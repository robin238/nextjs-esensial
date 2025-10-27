import type { Metadata } from "next";
import { Counter } from "@/app/counter";
import Image from "next/image";
import { gambarKucing2 } from "@/public/image";

export const metadata: Metadata = {
  title: "Home",
  description: "Ini home",
};

export default function Home() {
  return (
    <div>
      hello <Counter />
      {/* <Image
        height={100}
        width={100}
        alt="cat"
        src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww"
      /> */}
      {/* <div className="relative"> */}
      <div className="relative size-72 rounded-full border-2 overflow-hidden">
        <Image
          src={gambarKucing2}
          alt="gamabar kucing"
          fill
          className="object-cover"
          placeholder="blur"
          // blurDataURL=""
        />
      </div>
      {/* </div> */}
    </div>
  );
}
