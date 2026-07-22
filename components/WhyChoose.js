import { Activity, ClipboardCheck, HeartPulse, ShieldCheck, Sparkles, Users, Weight, Wind } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  { icon: Weight, title: "High-quality strength equipment", copy: "Free weights, benches, racks and machines for structured progressive overload." },
  { icon: HeartPulse, title: "Dedicated cardio zone", copy: "Endurance and fat-loss training with controlled pacing and guidance." },
  { icon: Activity, title: "Functional and HIIT training", copy: "Mobility, core, conditioning and scalable high-intensity work." },
  { icon: ClipboardCheck, title: "Personalized workout plans", copy: "Goal-based training direction with assessment and progress tracking." },
  { icon: Sparkles, title: "Old-school discipline", copy: "A focused arena culture that respects consistency over shortcuts." },
  { icon: Wind, title: "Clean organized floor", copy: "A premium, hygienic environment designed for repeated serious training." },
  { icon: Users, title: "Supportive brotherhood", copy: "Community energy without ego, built around accountability and effort." },
  { icon: ShieldCheck, title: "Modern safety standards", copy: "Form correction, sensible progression and clear training zones." }
];

export default function WhyChoose() {
  return (
    <section className="section-pad bg-[#090806]">
      <div className="container-x">
        <SectionHeader eyebrow="Why choose us" title="Hardcore Training, Premium Standards" align="center">
          <p>
            Every detail is designed for disciplined work: clean space, serious equipment, professional support and a culture that keeps members accountable.
          </p>
        </SectionHeader>
        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="glass-panel group flex h-full flex-col rounded-sm p-5 transition duration-300 hover:-translate-y-1 hover:border-blackgold-gold/38">
              <div className="grid h-12 w-12 place-items-center rounded-sm border border-blackgold-gold/25 bg-blackgold-gold/10 text-blackgold-gold">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-blackgold-bone">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-blackgold-bone/62">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
