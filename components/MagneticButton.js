"use client";

import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function MagneticButton({
  href,
  children,
  variant = "gold",
  className = "",
  type = "button",
  onClick,
  target,
  rel,
  ariaLabel
}) {
  const ref = useRef(null);

  function handleMove(event) {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.14}px, ${y * 0.18}px)`;
  }

  function reset() {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  }

  const classes = cn(
    "metal-sheen focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] transition duration-300",
    variant === "gold" && "bg-blackgold-gold text-black shadow-glow hover:bg-[#f3cf58]",
    variant === "dark" && "border border-blackgold-gold/30 bg-black/55 text-blackgold-bone hover:border-blackgold-gold hover:text-blackgold-gold",
    variant === "ghost" && "text-blackgold-bone hover:text-blackgold-gold",
    className
  );

  const props = {
    ref,
    className: classes,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    onBlur: reset,
    onClick,
    "data-magnetic": true,
    "aria-label": ariaLabel
  };

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
}
