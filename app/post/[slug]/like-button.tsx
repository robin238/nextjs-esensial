"use client";

import { CreateLike } from "@/app/actions";
import { useState, useTransition } from "react";

export function LikeButton() {
  //   const [pending, setPending] = useState(false);
  const [pending, startTransition] = useTransition();
  async function handleLike() {
    // setPending(true);
    //   await CreateLike();
    // setPending(false);

    startTransition(async () => {
      await CreateLike();
    });
  }
  return (
    <button
      className="bg-red-400 text-white rounded cursor-pointer"
      onClick={handleLike}
    >
      {pending ? "liking.." : " like"}
    </button>
  );
}
