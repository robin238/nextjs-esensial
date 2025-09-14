"use client";
import { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>counter : {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};
