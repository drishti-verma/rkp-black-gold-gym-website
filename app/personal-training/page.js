import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import TrainersSection from "@/components/TrainersSection";
import MagneticButton from "@/components/MagneticButton";

export const metadata = {
  title: "Personal Training",
  description: "One-to-one coaching, form correction, progress tracking and goal-based programs at RKP BLACK GOLD GYM."
};

export default function PersonalTrainingPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Personal training" title="Accountability Changes Everything">
        <p>One-to-one coaching for form correction, custom training structure, progress tracking and consistent support.</p>
      </PageHero>
      <section className="section-pad bg-[#080706]">
        <div className="container-x grid items-stretch gap-8 lg:grid-cols-3">
          {["Assessment", "Custom Plan", "Progress Review"].map((title) => (
            <article key={title} className="glass-panel flex h-full flex-col rounded-sm p-6">
              <p className="eyebrow">{title}</p>
              <h2 className="mt-3 font-display text-4xl text-blackgold-bone">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-blackgold-bone/66">Editable content for the gym team to define the final coaching process and package details.</p>
            </article>
          ))}
        </div>
        <div className="container-x mt-10">
          <SectionHeader eyebrow="Book" title="Talk To A Coach">
            <p>Discuss your goal, schedule and personal training interest before choosing a package.</p>
          </SectionHeader>
          <div className="mt-6"><MagneticButton href="/inquiry?plan=personal-training">Book Personal Training</MagneticButton></div>
        </div>
      </section>
      <TrainersSection compact />
    </main>
  );
}
