"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { trainers } from "@/lib/data";
import MagneticButton from "./MagneticButton";
import SectionHeader from "./SectionHeader";

export default function TrainersSection({ compact = false }) {
  const [selected, setSelected] = useState(null);
  const shown = compact ? trainers.slice(0, 3) : trainers;

  function tilt(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
  }

  function reset(event) {
    event.currentTarget.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
  }

  return (
    <section id="trainers" className="section-pad bg-black">
      <div className="container-x">
        <SectionHeader eyebrow="Trainers" title="Guidance With Standards">
          <p>
            Trainer data is centralized and editable. Replace the placeholder profiles with verified names, photos, experience and certifications.
          </p>
        </SectionHeader>
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
          {shown.map((trainer) => (
            <article key={trainer.slug} onMouseMove={tilt} onMouseLeave={reset} className="glass-panel flex h-full flex-col overflow-hidden rounded-sm transition duration-200">
              <div className="relative h-72">
                <Image src={trainer.image} alt={`${trainer.name} profile placeholder`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="eyebrow text-[0.64rem]">{trainer.role}</p>
                <h3 className="mt-2 font-display text-3xl text-blackgold-bone">{trainer.name}</h3>
                <p className="mt-3 text-sm leading-7 text-blackgold-bone/62">{trainer.philosophy}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {trainer.specializations.map((item) => (
                    <span key={item} className="rounded-sm border border-blackgold-gold/20 px-2 py-1 text-xs text-blackgold-bone/62">{item}</span>
                  ))}
                </div>
                <div className="mt-auto grid gap-2 pt-5 sm:grid-cols-2">
                  <MagneticButton onClick={() => setSelected(trainer)} variant="dark">View Profile</MagneticButton>
                  <MagneticButton href={`/inquiry?trainer=${trainer.slug}`}>Book Session</MagneticButton>
                </div>
              </div>
            </article>
          ))}
        </div>
        {compact && (
          <div className="mt-10 text-center">
            <MagneticButton href="/trainers">Meet All Trainers</MagneticButton>
          </div>
        )}
      </div>
      {selected && (
        <div className="fixed inset-0 z-[1300] grid place-items-center bg-black/86 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label={`${selected.name} profile`}>
          <div className="glass-panel max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-sm p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{selected.role}</p>
                <h3 className="mt-2 font-display text-5xl text-blackgold-bone">{selected.name}</h3>
              </div>
              <button onClick={() => setSelected(null)} className="focus-ring grid h-10 w-10 place-items-center rounded-sm border border-white/10 text-blackgold-bone hover:text-blackgold-gold" aria-label="Close trainer profile">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-5 text-blackgold-bone/72">{selected.philosophy}</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <ProfileList title="Specializations" items={selected.specializations} />
              <ProfileList title="Certifications" items={selected.certifications} />
            </div>
            <div className="mt-6">
              <MagneticButton href={`/inquiry?trainer=${selected.slug}`}>Book a Session</MagneticButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProfileList({ title, items }) {
  return (
    <div className="rounded-sm border border-white/10 bg-white/[0.03] p-4">
      <p className="eyebrow mb-3 text-[0.64rem]">{title}</p>
      <ul className="grid gap-2 text-sm text-blackgold-bone/66">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
