"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-pad bg-[#090806]">
      <div className="container-x grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <SectionHeader eyebrow="FAQ" title="Before You Step In">
          <p>Clear answers for timings, beginners, personal training, nutrition guidance, trial sessions and joining through WhatsApp.</p>
        </SectionHeader>
        <div className="grid gap-3">
          {faqs.map((item, index) => (
            <div key={item.question} className="glass-panel rounded-sm">
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="focus-ring flex min-h-14 w-full items-center justify-between gap-4 p-5 text-left"
                aria-expanded={open === index}
              >
                <span className="font-display text-2xl text-blackgold-bone">{item.question}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-blackgold-gold transition ${open === index ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all ${open === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden px-5 pb-5 text-sm leading-7 text-blackgold-bone/64">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
