import PageHero from "@/components/PageHero";
import TransformationsSection from "@/components/TransformationsSection";

export const metadata = {
  title: "Transformations",
  description: "Approved transformation gallery and before-after slider for verified RKP BLACK GOLD GYM client stories."
};

export default function TransformationsPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Transformations" title="Real Stories Need Real Permission">
        <p>The gallery is ready for approved member content and avoids deceptive or unverified transformation claims.</p>
      </PageHero>
      <TransformationsSection />
    </main>
  );
}
