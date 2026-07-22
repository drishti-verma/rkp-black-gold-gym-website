"use client";

import { Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchRecords } from "@/lib/data";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 80);
    function onKey(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return searchRecords.slice(0, 8);
    return searchRecords
      .filter((item) => `${item.title} ${item.type} ${item.text}`.toLowerCase().includes(needle))
      .slice(0, 12);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1200] bg-black/88 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label="Site search">
      <div className="container-x mt-20 max-w-4xl">
        <div className="glass-panel p-4 sm:p-6">
          <div className="flex items-center gap-3 border-b border-blackgold-gold/15 pb-4">
            <Search className="h-5 w-5 text-blackgold-gold" aria-hidden="true" />
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="min-h-12 flex-1 bg-transparent text-lg text-blackgold-bone outline-none placeholder:text-blackgold-bone/42"
              placeholder="Search programs, memberships, trainers, FAQs..."
              aria-label="Search the website"
            />
            <button onClick={onClose} className="focus-ring grid h-10 w-10 place-items-center rounded-sm border border-white/10 text-blackgold-bone hover:text-blackgold-gold" aria-label="Close search">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 grid gap-3">
            {results.length > 0 ? (
              results.map((result) => (
                <Link
                  key={`${result.type}-${result.title}-${result.href}`}
                  href={result.href}
                  onClick={onClose}
                  className="focus-ring group rounded-sm border border-white/8 bg-white/[0.03] p-4 transition hover:border-blackgold-gold/40 hover:bg-blackgold-gold/8"
                >
                  <span className="eyebrow text-[0.65rem]">{result.type}</span>
                  <span className="mt-1 block font-display text-2xl text-blackgold-bone group-hover:text-blackgold-gold">{result.title}</span>
                  <span className="line-clamp-2 text-sm text-blackgold-bone/62">{result.text}</span>
                </Link>
              ))
            ) : (
              <p className="p-6 text-center text-blackgold-bone/65">No results found. Try "membership", "cardio", "trainer", or "timings".</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
