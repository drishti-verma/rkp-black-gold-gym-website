"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    let frame;
    document.body.classList.add("cursor-ready");

    function move(event) {
      dotX = event.clientX;
      dotY = event.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
    }

    function animate() {
      ringX += (dotX - ringX) * 0.18;
      ringY += (dotY - ringY) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      frame = requestAnimationFrame(animate);
    }

    function click(event) {
      const impact = document.createElement("span");
      impact.className = "gada-impact";
      impact.style.left = `${event.clientX}px`;
      impact.style.top = `${event.clientY}px`;
      document.body.appendChild(impact);
      window.setTimeout(() => impact.remove(), 620);
      if (ringRef.current) {
        ringRef.current.style.width = "46px";
        ringRef.current.style.height = "46px";
        window.setTimeout(() => {
          if (ringRef.current) {
            ringRef.current.style.width = "34px";
            ringRef.current.style.height = "34px";
          }
        }, 140);
      }
    }

    function over(event) {
      const target = event.target.closest("a, button, input, textarea, select, [data-magnetic]");
      if (!target || !ringRef.current) return;
      ringRef.current.style.width = "54px";
      ringRef.current.style.height = "54px";
      ringRef.current.style.borderColor = "rgba(248, 231, 160, 0.95)";
    }

    function out(event) {
      const target = event.target.closest("a, button, input, textarea, select, [data-magnetic]");
      if (!target || !ringRef.current) return;
      ringRef.current.style.width = "34px";
      ringRef.current.style.height = "34px";
      ringRef.current.style.borderColor = "rgba(212, 175, 55, 0.75)";
    }

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", click);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    animate();

    return () => {
      document.body.classList.remove("cursor-ready");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", click);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <span ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <span ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
}
