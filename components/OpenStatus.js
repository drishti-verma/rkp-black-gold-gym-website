"use client";

import { useEffect, useState } from "react";
import { getOpenStatus } from "@/lib/utils";

export default function OpenStatus({ compact = false }) {
  const [status, setStatus] = useState(() => getOpenStatus());

  useEffect(() => {
    const timer = window.setInterval(() => setStatus(getOpenStatus()), 60000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className={`inline-flex items-center gap-2 ${compact ? "text-xs" : "text-sm"} text-blackgold-bone/78`}>
      <span className={`h-2.5 w-2.5 rounded-full ${status.open ? "bg-emerald-400" : "bg-blackgold-orange"}`} aria-hidden="true" />
      {status.label} IST
    </span>
  );
}
