import PageHero from "@/components/PageHero";
import TrainingZones from "@/components/TrainingZones";
import { site } from "@/lib/data";

export const metadata = {
  title: "Facilities and Training Zones",
  description: "Explore strength, cardio, functional training, CrossFit and personal training zones at RKP BLACK GOLD GYM."
};

export default function FacilitiesPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Facilities" title="Every Zone Has A Purpose" image={site.images.floor}>
        <p>Strength racks, free weights, cardio equipment, functional space, high-intensity training and personal coaching are organized for focused work.</p>
      </PageHero>
      <TrainingZones />
    </main>
  );
}
