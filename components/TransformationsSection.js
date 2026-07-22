"use client";

import Image from "next/image";
import { useState } from "react";
import { transformationFilters, transformations } from "@/lib/data";
import MagneticButton from "./MagneticButton";
import SectionHeader from "./SectionHeader";

export default function TransformationsSection({ compact = false }) {
  const [filter, setFilter] = useState("All");
  const [split, setSplit] = useState(50);
  const filtered = transformations.filter((item) => filter === "All" || item.filter === filter);

  return (
    <section id="transformations" className="section-pad bg-[#080706]">
      <div className="container-x">
        <SectionHeader eyebrow="Transformations" title="Approved Proof Only">
          <p>
            This section is ready for before-and-after stories, but it avoids fake claims. Add only approved member content with verified permission.
          </p>
        </SectionHeader>
        {!compact && (
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Transformation filters">
            {transformationFilters.map((item) => (
              <button key={item} onClick={() => setFilter(item)} className={`focus-ring min-h-11 rounded-sm border px-4 text-xs font-bold uppercase tracking-[0.12em] ${filter === item ? "border-blackgold-gold bg-blackgold-gold text-black" : "border-white/10 text-blackgold-bone/64 hover:border-blackgold-gold/40"}`}>
                {item}
              </button>
            ))}
          </div>
        )}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {filtered.map((item) => (
            <article key={item.id} className="glass-panel overflow-hidden rounded-sm">
              <div className="relative h-[440px]">
                <Image src={item.after} alt={`${item.name} after image placeholder`} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${split}%` }}>
                  <Image src={item.before} alt={`${item.name} before image placeholder`} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
                </div>
                <div className="absolute inset-y-0" style={{ left: `${split}%` }}>
                  <span className="absolute inset-y-0 w-px bg-blackgold-gold" />
                </div>
                <input
                  type="range"
                  min="8"
                  max="92"
                  value={split}
                  onChange={(event) => setSplit(Number(event.target.value))}
                  className="absolute bottom-5 left-1/2 w-[82%] -translate-x-1/2 accent-blackgold-gold"
                  aria-label="Before and after comparison slider"
                />
              </div>
              <div className="p-6">
                <p className="eyebrow">{item.goal}</p>
                <h3 className="mt-2 font-display text-4xl text-blackgold-bone">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-blackgold-bone/64">{item.testimonial}</p>
                {!item.approved && <p className="mt-4 rounded-sm border border-blackgold-gold/20 bg-blackgold-gold/8 p-3 text-xs text-blackgold-bone/62">Status: placeholder only. Replace with approved, realistic client media before publishing claims.</p>}
              </div>
            </article>
          ))}
          <div className="grid content-center items-stretch gap-4">
            {["Permission-first gallery", "Trainer involved", "Goal achieved", "Training duration", "Fullscreen viewing ready"].map((item) => (
              <div key={item} className="glass-panel flex h-full items-center rounded-sm p-5">
                <p className="font-display text-2xl text-blackgold-bone">{item}</p>
              </div>
            ))}
            <MagneticButton href="/inquiry">Start Your Journey</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
