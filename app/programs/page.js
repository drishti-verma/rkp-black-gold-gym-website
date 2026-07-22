import NutritionSupplement from "@/components/NutritionSupplement";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import TrainingZones from "@/components/TrainingZones";
import MagneticButton from "@/components/MagneticButton";
import { programs, site } from "@/lib/data";

export const metadata = {
  title: "Programs",
  description: "Strength, muscle building, fat loss, functional fitness and personal training programs at RKP BLACK GOLD GYM."
};

export default function ProgramsPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Programs" title="Train For A Clear Outcome">
        <p>Program structures are goal-based and adjustable by experience level, weekly availability and coaching needs.</p>
      </PageHero>
      <section className="section-pad bg-[#080706]">
        <div className="container-x">
          <SectionHeader eyebrow="Program paths" title="Choose The Work" />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <article key={program.slug} id={program.slug} className="glass-panel flex h-full flex-col rounded-sm p-6">
                <p className="eyebrow">{program.days}</p>
                <h2 className="mt-3 font-display text-4xl text-blackgold-bone">{program.title}</h2>
                <p className="mt-4 text-sm leading-7 text-blackgold-bone/66">{program.goal}</p>
                <div className="mt-auto pt-6">
                  <MagneticButton href={`/inquiry?program=${program.slug}`} variant="dark">Ask About Program</MagneticButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <TrainingZones compact />
      <NutritionSupplement />
    </main>
  );
}
