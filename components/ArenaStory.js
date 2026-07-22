"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";

const chapters = [
  { title: "Raw Iron Culture", copy: "Training starts with respect for the basics: racks, plates, benches and controlled form." },
  { title: "Discipline Over Shortcuts", copy: "No miracle promises. The arena rewards consistency, coaching and recovery." },
  { title: "Brotherhood", copy: "Members push each other without ego, building accountability and community." },
  { title: "Modern Standards", copy: "Clean facilities, organized zones and safer training practices support hardcore work." }
];

const marqueeItems = ["Power", "Discipline", "Brotherhood", "Old Skool", "No Shortcuts", "Clean Mind", "Ultimate Strength"];

export default function ArenaStory() {
  const stageRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let ctx;
    let active = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
      if (!active || !stageRef.current || !trackRef.current) return;
      const gsap = gsapModule.gsap;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        if (window.innerWidth < 900) return;
        const stage = stageRef.current;
        const track = trackRef.current;
        const distance = Math.max(0, track.scrollWidth - stage.clientWidth);
        if (!distance) return;
        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: stage,
            start: "top 18%",
            end: `+=${distance + 420}`,
            scrub: 0.6,
            pin: true
          }
        });
      }, trackRef);
    });

    return () => {
      active = false;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="arena-story-section section-pad overflow-hidden bg-black">
      <div className="container-x">
        <SectionHeader eyebrow="The Old Skool Arena" title="Not a Shortcut Factory">
          <p>
            RKP BLACK GOLD is built around serious training, organized facilities, professional guidance and the old-school mindset of showing up even when motivation fades.
          </p>
        </SectionHeader>
      </div>
      <div ref={stageRef} className="arena-story-stage mt-10 overflow-hidden py-5">
        <ZigzagMarquee reverse={false} />
        <div ref={trackRef} className="arena-story-track grid gap-4 px-[max(16px,calc((100vw-1180px)/2))] py-8 lg:flex lg:overflow-visible">
          {chapters.map((chapter, index) => (
            <article key={chapter.title} className="arena-story-card glass-panel flex h-full min-h-[300px] flex-col rounded-sm p-7 lg:min-w-[520px]">
              <span className="font-display text-7xl text-blackgold-gold/22">0{index + 1}</span>
              <h3 className="mt-3 font-display text-4xl text-blackgold-bone">{chapter.title}</h3>
              <p className="mt-4 text-base leading-8 text-blackgold-bone/68">{chapter.copy}</p>
              <span className="mt-auto block pt-6 text-xs font-bold uppercase tracking-[0.24em] text-blackgold-gold/55">RKP Standard</span>
            </article>
          ))}
        </div>
        <ZigzagMarquee reverse />
      </div>
    </section>
  );
}

function ZigzagMarquee({ reverse }) {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="zigzag-marquee" aria-hidden="true">
      <div className={`zigzag-marquee__track ${reverse ? "zigzag-marquee__track--reverse" : ""}`}>
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="zigzag-marquee__item">
            <span className="zigzag-marquee__mark" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
