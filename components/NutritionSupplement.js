"use client";

import { useState } from "react";
import { nutritionNotes, supplements } from "@/lib/data";
import { whatsappHref } from "@/lib/utils";
import MagneticButton from "./MagneticButton";
import SectionHeader from "./SectionHeader";

export default function NutritionSupplement() {
  const categories = ["All", ...supplements.map((item) => item.category)];
  const [category, setCategory] = useState("All");
  const shown = supplements.filter((item) => category === "All" || item.category === category);

  return (
    <section className="section-pad bg-[#090806]">
      <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader eyebrow="Nutrition guidance" title="Fuel The Work">
            <p>
              General meal-planning, hydration, protein, recovery and habit education for members who want structure around their training.
            </p>
          </SectionHeader>
          <div className="mt-8 grid items-stretch gap-3">
            {nutritionNotes.map((item) => (
              <div key={item} className="glass-panel flex h-full items-center rounded-sm p-4 text-sm leading-7 text-blackgold-bone/68">{item}</div>
            ))}
          </div>
          <p className="mt-5 rounded-sm border border-blackgold-orange/35 bg-blackgold-orange/10 p-4 text-xs leading-6 text-blackgold-bone/64">
            Nutrition content is general guidance and does not replace professional medical or dietetic advice.
          </p>
        </div>
        <div>
          <SectionHeader eyebrow="Supplement corner" title="Education Before Purchase">
            <p>
              Informational categories only. Direct purchase functionality should be added only after product details, inventory, payment requirements and compliance are approved.
            </p>
          </SectionHeader>
          <div className="mt-7 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button key={item} onClick={() => setCategory(item)} className={`focus-ring min-h-10 rounded-sm border px-3 text-xs font-bold uppercase tracking-[0.12em] ${category === item ? "border-blackgold-gold bg-blackgold-gold text-black" : "border-white/10 text-blackgold-bone/62 hover:border-blackgold-gold/40"}`}>
                {item}
              </button>
            ))}
          </div>
          <div className="mt-6 grid items-stretch gap-3 sm:grid-cols-2">
            {shown.map((item) => (
              <article key={item.category} className="glass-panel flex h-full flex-col rounded-sm p-5">
                <h3 className="font-display text-3xl text-blackgold-bone">{item.category}</h3>
                <p className="mt-3 text-sm leading-7 text-blackgold-bone/64">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <MagneticButton href={whatsappHref("Namaste RKP BLACK GOLD GYM, I want general guidance about supplements.")} target="_blank" rel="noreferrer">Ask on WhatsApp</MagneticButton>
            <p className="max-w-xl text-xs leading-6 text-blackgold-bone/50">Consult a qualified professional before using supplements, especially if you have medical conditions or take medication.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
