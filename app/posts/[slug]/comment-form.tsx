"use client";
import { CreateComment } from "@/app/actions";
import { useActionState } from "react";

const initialState = {
  error: "",
};

export function CommentForm() {
  const [state, formAction, pending] = useActionState(
    CreateComment,
    initialState
  );
  // state = responsenya
  // formAction = action ke sisi server
  // pending = saat proses dijalankan atau loading
  return (
    <form action={formAction} className="flex flex-col w-72 gap-2">
      {state?.error && <div className="text-red-500"> {state.error}</div>}
      <textarea
        name="comment"
        placeholder="komentar"
        className="w-full h-40 border"
      />
      <input type="text" name="name" className="border" />
      <button
        className="bg-blue-500 text-whitep py-2 px-4 rounded w-full"
        disabled={pending} // saat diklik
      >
        Send
      </button>
    </form>
  );
}
