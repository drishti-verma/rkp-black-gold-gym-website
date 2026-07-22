import ArenaStory from "@/components/ArenaStory";
import ArenaPathFinder from "@/components/ArenaPathFinder";
import BajrangbaliSection from "@/components/BajrangbaliSection";
import BlogPreview from "@/components/BlogPreview";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import MembershipPlans from "@/components/MembershipPlans";
import NutritionSupplement from "@/components/NutritionSupplement";
import Testimonials from "@/components/Testimonials";
import TrainersSection from "@/components/TrainersSection";
import TrainingZones from "@/components/TrainingZones";
import TransformationsSection from "@/components/TransformationsSection";
import WhyChoose from "@/components/WhyChoose";
import MagneticButton from "@/components/MagneticButton";
import SectionHeader from "@/components/SectionHeader";
import { site } from "@/lib/data";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <ArenaPathFinder />
      <section id="about-preview" className="section-pad bg-[#080706]">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader eyebrow="About RKP BLACK GOLD" title="A Clean, Hard, Disciplined Arena">
            <p>
              {site.name} blends old-school bodybuilding principles, Indian strength heritage, premium equipment standards and a disciplined brotherhood culture.
            </p>
            <p className="mt-4">
              The mission is simple: create an environment where members train clean, think clearly and build ultimate strength with purpose.
            </p>
          </SectionHeader>
          <div className="grid items-stretch gap-4 sm:grid-cols-2">
            {site.values.map((value) => (
              <div key={value} className="glass-panel flex h-full flex-col justify-between rounded-sm p-5">
                <span className="block h-px w-12 bg-blackgold-gold" />
                <p className="mt-4 font-display text-3xl text-blackgold-bone">{value}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-start-2">
            <MagneticButton href="/about" variant="dark">Read The Story</MagneticButton>
          </div>
        </div>
      </section>
      <BajrangbaliSection />
      <ArenaStory />
      <WhyChoose />
      <TrainingZones compact />
      <MembershipPlans compact />
      <TrainersSection compact />
      <TransformationsSection compact />
      <GallerySection compact />
      <NutritionSupplement />
      <Testimonials />
      <BlogPreview compact />
      <FAQ />
      <ContactSection />
    </main>
  );
}
