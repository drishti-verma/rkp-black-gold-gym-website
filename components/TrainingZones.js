import Image from "next/image";
import { trainingZones, site } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import MagneticButton from "./MagneticButton";

export default function TrainingZones({ compact = false }) {
  const zones = compact ? trainingZones.slice(0, 3) : trainingZones;

  return (
    <section id="facilities" className="section-pad bg-black">
      <div className="container-x">
        <SectionHeader eyebrow="Training zones" title="Built For Every Serious Goal">
          <p>
            Strength, cardio, functional movement, HIIT and personal coaching each get their own rhythm so training stays focused, safe and progressive.
          </p>
        </SectionHeader>
        <div className="mt-12 grid gap-8">
          {zones.map((zone, index) => (
            <article key={zone.id} id={zone.id} className={`gold-border overflow-hidden rounded-sm bg-[#0b0a08] ${index % 2 ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]"} grid lg:min-h-[420px]`}>
              <div className={`relative min-h-[260px] ${index % 2 ? "lg:order-2" : ""}`}>
                <Image src={site.images.floor} alt={`${zone.title} at RKP BLACK GOLD GYM`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                <span className="absolute bottom-5 left-5 font-display text-8xl text-blackgold-gold/20">0{index + 1}</span>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-9">
                <p className="eyebrow">{zone.eyebrow}</p>
                <h3 className="mt-4 font-display text-5xl text-blackgold-bone">{zone.title}</h3>
                <p className="mt-4 text-base leading-8 text-blackgold-bone/68">{zone.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {zone.bullets.map((item) => (
                    <span key={item} className="rounded-sm border border-blackgold-gold/20 bg-black/38 px-3 py-2 text-xs uppercase tracking-[0.12em] text-blackgold-bone/68">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <MagneticButton href={`/inquiry?zone=${zone.id}`} variant="dark">Ask About {zone.title}</MagneticButton>
                </div>
              </div>
            </article>
          ))}
        </div>
        {compact && (
          <div className="mt-10 text-center">
            <MagneticButton href="/facilities">View All Training Zones</MagneticButton>
          </div>
        )}
      </div>
    </section>
  );
}
