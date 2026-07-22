import PageHero from "@/components/PageHero";
import TrainersSection from "@/components/TrainersSection";

export const metadata = {
  title: "Trainers",
  description: "Meet the editable trainer profiles for RKP BLACK GOLD GYM."
};

export default function TrainersPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Trainers" title="Coaches Who Protect The Standard">
        <p>Replace placeholders with verified trainer names, certifications, photos and specializations.</p>
      </PageHero>
      <TrainersSection />
    </main>
  );
}
