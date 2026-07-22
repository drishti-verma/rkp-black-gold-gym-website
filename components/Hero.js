"use client";

import { ArrowDown, Dumbbell, Phone } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { site, stats } from "@/lib/data";
import { phoneHref } from "@/lib/utils";
import MagneticButton from "./MagneticButton";
import ThreeArena from "./ThreeArena";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const imageX = useTransform(mouseX, [-1, 1], [-8, 8]);
  const imageY = useTransform(mouseY, [-1, 1], [-6, 6]);

  function onMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section id="home" onMouseMove={onMove} className="relative min-h-screen overflow-hidden pt-28">
      <motion.div style={{ x: imageX, y: imageY }} className="absolute inset-0 scale-[1.02]">
        <Image src={site.images.hero} alt="Cinematic black and gold underground gym arena with strength equipment" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.9)_0%,rgba(5,5,5,0.62)_48%,rgba(5,5,5,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(212,175,55,0.2),transparent_18rem)]" />
      <div className="hero-depth-field" aria-hidden="true">
        {Array.from({ length: 7 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <span className="absolute left-[12%] top-[18%] h-40 w-px rotate-12 bg-gradient-to-b from-transparent via-blackgold-gold/40 to-transparent" />
        <span className="absolute right-[18%] top-[8%] h-56 w-px -rotate-12 bg-gradient-to-b from-transparent via-blackgold-gold/25 to-transparent" />
      </div>

      <div className="container-x relative grid min-h-[calc(100vh-112px)] items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="eyebrow mb-5 max-w-[19rem] sm:max-w-none">
            {site.philosophy}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }} className="display-title max-w-4xl text-balance">
            <span className="block text-blackgold-bone">RKP BLACK</span>
            <span className="gold-text block">GOLD GYM</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.18 }} className="mt-4 font-accent text-xl uppercase tracking-[0.22em] text-blackgold-gold sm:text-2xl">
            {site.tagline}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.28 }} className="mt-6 max-w-2xl text-lg leading-8 text-blackgold-bone/76">
            Built for those who train with discipline, live with purpose, and refuse to remain ordinary.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.38 }} className="mt-8 grid max-w-xl gap-3 sm:flex sm:flex-wrap">
            <MagneticButton href="/inquiry" className="w-full sm:w-auto">Join the Arena</MagneticButton>
            <MagneticButton href="/membership" variant="dark" className="w-full sm:w-auto">Explore Memberships</MagneticButton>
            <MagneticButton href={phoneHref()} variant="dark" className="w-full sm:w-auto"><Phone className="h-4 w-4" /> Call Now</MagneticButton>
          </motion.div>
          <div className="mt-10 grid w-full max-w-xl grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-5">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.48 + index * 0.06 }}
                className="glass-panel rounded-sm p-3"
              >
                <span className="font-display text-3xl text-blackgold-gold">{item.value}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.12em] text-blackgold-bone/62">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.25 }} className="hidden w-full max-w-[540px] lg:block lg:justify-self-end">
          <div className="hero-emblem-shell glass-panel relative w-full max-w-[540px] overflow-hidden rounded-sm p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.18),transparent_18rem)]" />
            <div className="absolute inset-x-6 top-5 h-px bg-gradient-to-r from-transparent via-blackgold-gold/50 to-transparent" />
            <div className="relative grid place-items-center">
              <ThreeArena />
              <div className="mt-2 flex w-full items-center justify-between gap-4 border-t border-blackgold-gold/15 pt-4">
                <span className="inline-flex items-center gap-2 text-sm text-blackgold-bone/70"><Dumbbell className="h-4 w-4 text-blackgold-gold" /> Old-school iron culture</span>
                <span className="font-accent text-xs uppercase tracking-[0.22em] text-blackgold-gold">3D Arena Emblem</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <a href="#about-preview" className="focus-ring absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.18em] text-blackgold-bone/62 hover:text-blackgold-gold sm:flex">
        Scroll <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  );
}
