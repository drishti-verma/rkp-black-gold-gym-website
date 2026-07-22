"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "@/lib/data";
import "swiper/css";
import "swiper/css/navigation";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="section-pad bg-black">
      <div className="container-x">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Testimonials" title="Member Voices" />
          <button onClick={() => setPaused((value) => !value)} className="focus-ring inline-flex min-h-11 items-center gap-2 self-start rounded-sm border border-white/10 px-4 text-sm text-blackgold-bone/72 hover:text-blackgold-gold">
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            {paused ? "Play" : "Pause"}
          </button>
        </div>
        <Swiper
          modules={[Autoplay, Navigation, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          autoplay={paused ? false : { delay: 4200, disableOnInteraction: false }}
          a11y={{ enabled: true }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <article className="glass-panel grid gap-6 rounded-sm p-6 md:grid-cols-[240px_1fr]">
                <div className="relative h-64 overflow-hidden rounded-sm">
                  <Image src={item.image} alt={`${item.name} testimonial placeholder`} fill sizes="(min-width: 768px) 240px, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-display text-8xl leading-none text-blackgold-gold/18">"</span>
                  <p className="text-xl leading-9 text-blackgold-bone/78">{item.quote}</p>
                  <p className="mt-5 font-display text-3xl text-blackgold-gold">{item.name}</p>
                  <p className="text-sm text-blackgold-bone/54">{item.goal}</p>
                  <p className="mt-3 text-xs text-blackgold-bone/44">Verified-review labels and ratings should appear only after verification.</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
