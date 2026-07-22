import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { site } from "@/lib/data";

export default function BajrangbaliSection() {
  return (
    <section className="section-pad overflow-hidden bg-[#080706]">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_34rem)]" />
          <div className="gold-border relative overflow-hidden rounded-sm bg-black shadow-glow">
            <Image
              src={site.images.mural}
              alt="Respectful gold line-art mural inspired by Bajrangbali symbolizing courage, discipline and devotion"
              width={1024}
              height={1536}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-[680px] w-full object-cover object-center max-lg:h-[540px]"
            />
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="Strength guided by discipline" title="Power With Devotion">
            <p>
              At RKP BLACK GOLD GYM, strength is not measured only by what the body can lift, but by the discipline, courage and devotion carried within.
            </p>
          </SectionHeader>
          <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2">
            {["Self-control before ego", "Courage under pressure", "Devotion to clean training", "Respect for the old-school path"].map((item) => (
              <div key={item} className="glass-panel flex h-full flex-col justify-between rounded-sm p-5">
                <span className="block h-px w-14 bg-blackgold-gold" />
                <p className="mt-4 font-display text-2xl text-blackgold-bone">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-blackgold-bone/58">
            This artwork is used as a respectful cultural symbol. Promotional pricing and calls to action are intentionally kept away from the sacred visual.
          </p>
        </div>
      </div>
    </section>
  );
}
