"use client";

import { Check, ChevronDown, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { membershipPlans, offer } from "@/lib/data";
import { whatsappHref } from "@/lib/utils";
import MagneticButton from "./MagneticButton";
import SectionHeader from "./SectionHeader";

export default function MembershipPlans({ compact = false }) {
  const [mode, setMode] = useState("standard");
  const [open, setOpen] = useState("quarterly");
  const plans = compact ? membershipPlans.slice(0, 3) : membershipPlans;

  const comparisonRows = useMemo(
    () => [
      ["Trainer support", "Basic", "Check-ins", "Support", "Support", "One-to-one"],
      ["Assessment access", "Optional", "Included", "Included", "Included", "Included"],
      ["Nutrition guidance", "Available", "Available", "Available", "Available", "Goal-based"],
      ["Progress tracking", "Basic", "Standard", "Standard", "Long-term", "Detailed"]
    ],
    []
  );

  return (
    <section id="membership" className="section-pad bg-[#080706]">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeader eyebrow="Membership plans" title="Choose Your Commitment">
            <p>
              Prices are intentionally configurable. Contact the gym for the current approved pricing and available membership details.
            </p>
          </SectionHeader>
          <div className="justify-self-start lg:justify-self-end">
            <div className="inline-flex rounded-sm border border-blackgold-gold/25 bg-black/60 p-1">
              {["standard", "long-term"].map((item) => (
                <button
                  key={item}
                  onClick={() => setMode(item)}
                  className={`focus-ring min-h-11 rounded-sm px-4 text-xs font-bold uppercase tracking-[0.14em] transition ${mode === item ? "bg-blackgold-gold text-black" : "text-blackgold-bone/64 hover:text-blackgold-gold"}`}
                >
                  {item === "standard" ? "Monthly View" : "Long-Term View"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {offer.enabled && (
          <div className="mt-8 glass-panel rounded-sm p-5">
            <p className="eyebrow">Current offer</p>
            <h3 className="mt-2 font-display text-3xl text-blackgold-gold">{offer.title}</h3>
            <p className="mt-2 text-sm text-blackgold-bone/65">{offer.description}</p>
          </div>
        )}

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-5">
          {plans.map((plan) => (
            <article key={plan.slug} id={plan.slug} className={`glass-panel metal-sheen flex h-full flex-col rounded-sm p-5 ${plan.featured ? "border-blackgold-gold/60 shadow-glow" : ""}`}>
              <div className="min-h-6">
                {plan.badge && <span className="rounded-sm bg-blackgold-gold px-2 py-1 text-[0.64rem] font-bold uppercase tracking-[0.14em] text-black">{plan.badge}</span>}
              </div>
              <h3 className="mt-4 font-display text-3xl text-blackgold-bone">{plan.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-blackgold-bone/50">{plan.duration}</p>
              <p className="mt-5 font-display text-4xl text-blackgold-gold">{plan.price}</p>
              <button onClick={() => setOpen(open === plan.slug ? "" : plan.slug)} className="focus-ring mt-5 flex w-full items-center justify-between rounded-sm border border-white/10 px-3 py-2 text-left text-sm text-blackgold-bone/72">
                Details <ChevronDown className={`h-4 w-4 transition ${open === plan.slug ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all ${open === plan.slug ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <ul className="overflow-hidden pt-4">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-2 py-2 text-sm text-blackgold-bone/66">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blackgold-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto grid gap-2 pt-5">
                <MagneticButton href={`/inquiry?plan=${plan.slug}`} className="w-full">Join Now</MagneticButton>
                <MagneticButton href={whatsappHref(`Namaste RKP BLACK GOLD GYM, I want pricing for ${plan.title}.`)} target="_blank" rel="noreferrer" variant="dark" className="w-full">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </MagneticButton>
              </div>
            </article>
          ))}
        </div>

        {!compact && (
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse overflow-hidden rounded-sm text-left text-sm">
              <caption className="sr-only">Membership comparison table</caption>
              <thead>
                <tr className="bg-blackgold-gold text-black">
                  <th className="p-4">Feature</th>
                  {membershipPlans.map((plan) => <th key={plan.slug} className="p-4">{plan.title}</th>)}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]} className="border-b border-white/10 bg-white/[0.03]">
                    {row.map((cell, index) => <td key={`${row[0]}-${cell}-${index}`} className="p-4 text-blackgold-bone/70">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
