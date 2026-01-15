"use client";

import { useEffect, useState } from "react";
import { getRandomQuote } from "@/data/quotes";

export function RandomQuote() {
  const [quote, setQuote] = useState<string>("");

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <div className="mb-10 p-6 border-l-4 border-orange-500 bg-zinc-900/30 rounded-r-lg">
      <p className="text-zinc-200 italic font-light leading-relaxed">
        &quot;{quote}&quot;
      </p>
    </div>
  );
}
