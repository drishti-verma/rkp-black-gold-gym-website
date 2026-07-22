"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { galleryItems, site } from "@/lib/data";
import MagneticButton from "./MagneticButton";
import SectionHeader from "./SectionHeader";

export default function GallerySection({ compact = false }) {
  const categories = useMemo(() => ["All", ...new Set(galleryItems.map((item) => item.type))], []);
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState(null);
  const items = galleryItems.filter((item) => category === "All" || item.type === category);
  const shown = compact ? galleryItems.slice(0, 6) : items;

  useEffect(() => {
    if (!active) return undefined;
    function onKey(event) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        const index = galleryItems.findIndex((item) => item.id === active.id);
        setActive(galleryItems[(index + 1) % galleryItems.length]);
      }
      if (event.key === "ArrowLeft") {
        const index = galleryItems.findIndex((item) => item.id === active.id);
        setActive(galleryItems[(index - 1 + galleryItems.length) % galleryItems.length]);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="section-pad bg-black">
      <div className="container-x">
        <SectionHeader eyebrow="Gallery" title="The Arena In Motion">
          <p>
            Configurable media for interiors, equipment, workout moments, trainers, events, achievements, reels and the old-school training atmosphere.
          </p>
        </SectionHeader>
        {!compact && (
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button key={item} onClick={() => setCategory(item)} className={`focus-ring min-h-11 rounded-sm border px-4 text-xs font-bold uppercase tracking-[0.12em] ${category === item ? "border-blackgold-gold bg-blackgold-gold text-black" : "border-white/10 text-blackgold-bone/64 hover:border-blackgold-gold/40"}`}>
                {item}
              </button>
            ))}
          </div>
        )}
        <div className="masonry mt-10">
          {shown.map((item, index) => (
            <button key={item.id} onClick={() => setActive(item)} className="focus-ring group relative block w-full overflow-hidden rounded-sm border border-white/10 bg-white/[0.03] text-left">
              <Image src={item.src} alt={item.alt} width={index % 5 === 2 ? 1024 : 1536} height={index % 5 === 2 ? 1536 : 864} className={`w-full object-cover transition duration-500 group-hover:scale-105 ${index % 5 === 2 ? "h-[520px]" : "h-[300px]"}`} loading="lazy" sizes="(min-width: 1024px) 33vw, (min-width: 680px) 50vw, 100vw" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/10 to-transparent" />
              <span className="absolute bottom-4 left-4 right-4">
                <span className="eyebrow text-[0.62rem]">{item.type}</span>
                <span className="mt-1 block font-display text-3xl text-blackgold-bone">{item.title}</span>
              </span>
            </button>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <MagneticButton href={site.instagram} target="_blank" rel="noreferrer" variant="dark">Open Instagram</MagneticButton>
          {compact && <MagneticButton href="/gallery">View Full Gallery</MagneticButton>}
        </div>
      </div>
      {active && (
        <div className="fixed inset-0 z-[1300] grid place-items-center bg-black/90 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label={active.title}>
          <div className="relative w-full max-w-6xl">
            <button onClick={() => setActive(null)} className="focus-ring absolute right-0 top-0 z-10 grid h-11 w-11 translate-y-[-120%] place-items-center rounded-sm border border-white/10 bg-black text-blackgold-bone hover:text-blackgold-gold" aria-label="Close gallery image">
              <X className="h-5 w-5" />
            </button>
            <Image src={active.src} alt={active.alt} width={1600} height={1000} sizes="(min-width: 1200px) 1100px, 100vw" className="max-h-[82vh] w-full rounded-sm object-contain" />
            <p className="mt-3 text-sm text-blackgold-bone/64">{active.title}. Use Escape to close, arrow keys to move.</p>
          </div>
        </div>
      )}
    </section>
  );
}
