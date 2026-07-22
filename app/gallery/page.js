import GallerySection from "@/components/GallerySection";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import MagneticButton from "@/components/MagneticButton";
import { site } from "@/lib/data";

export const metadata = {
  title: "Gallery",
  description: "Explore the cinematic RKP BLACK GOLD GYM gallery and Instagram profile preview."
};

export default function GalleryPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Gallery" title="Black Gold Atmosphere" image={site.images.floor}>
        <p>Media categories for gym interiors, equipment, workout moments, events, member achievements, reels and old-school culture.</p>
      </PageHero>
      <GallerySection />
      <section className="section-pad bg-[#080706]">
        <div className="container-x">
          <SectionHeader eyebrow="Instagram" title="@rkp_blackgold_" align="center">
            <p>Use the official API or approved embeds for a live feed. Until then, this site uses a configurable gallery linked to Instagram.</p>
          </SectionHeader>
          <div className="mt-8 text-center">
            <MagneticButton href={site.instagram} target="_blank" rel="noreferrer">Follow On Instagram</MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}
