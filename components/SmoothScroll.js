"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let lenis;
    let frame;
    let active = true;

    import("lenis").then(({ default: Lenis }) => {
      if (!active) return;
      lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9, touchMultiplier: 1.1 });
      function raf(time) {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      }
      frame = requestAnimationFrame(raf);
    });

    return () => {
      active = false;
      if (frame) cancelAnimationFrame(frame);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
