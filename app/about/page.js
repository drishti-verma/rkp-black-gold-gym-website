import ArenaStory from "@/components/ArenaStory";
import BajrangbaliSection from "@/components/BajrangbaliSection";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import WhyChoose from "@/components/WhyChoose";
import { site } from "@/lib/data";

export const metadata = {
  title: "About",
  description: "Learn the story, mission, vision and old-school training culture of RKP BLACK GOLD GYM in Betul Bazar."
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero eyebrow="About" title="Built On Power, Discipline And Brotherhood">
        <p>{site.name} is a premium old-school strength arena shaped by clean training, professional standards and Indian strength heritage.</p>
      </PageHero>
      <section className="section-pad bg-[#080706]">
        <div className="container-x grid items-stretch gap-8 lg:grid-cols-3">
          {[
            ["Mission", "Create a focused training environment where members build strength, confidence and discipline through consistent work."],
            ["Vision", "Position Betul Bazar with a premium gym culture that feels local in spirit and international in standard."],
            ["Culture", "Brotherhood, respect, clean facilities, serious coaching and old-school lifting principles."],
          ].map(([title, copy]) => (
            <article key={title} className="glass-panel flex h-full flex-col rounded-sm p-6">
              <p className="eyebrow">{title}</p>
              <h2 className="mt-3 font-display text-4xl text-blackgold-bone">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-blackgold-bone/66">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <BajrangbaliSection />
      <ArenaStory />
      <WhyChoose />
      <section className="section-pad bg-black">
        <div className="container-x">
          <SectionHeader eyebrow="Core philosophy" title={site.philosophy} align="center">
            <p>The arena expects effort, humility and consistency. Strength is physical, mental and personal.</p>
          </SectionHeader>
        </div>
      </section>
    </main>
  );
}
