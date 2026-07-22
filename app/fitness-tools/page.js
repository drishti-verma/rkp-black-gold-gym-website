import FitnessTools from "@/components/FitnessTools";
import NutritionSupplement from "@/components/NutritionSupplement";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Fitness Calculators",
  description: "BMI, workout, one-rep max and water intake calculators with general healthy-use disclaimers."
};

export default function FitnessToolsPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Fitness tools" title="Calculate, Then Train With Sense">
        <p>General tools for estimates and structure. Use them as education, not medical prescriptions.</p>
      </PageHero>
      <FitnessTools />
      <NutritionSupplement />
    </main>
  );
}
