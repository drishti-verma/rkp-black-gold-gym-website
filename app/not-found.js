import PageHero from "@/components/PageHero";
import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <main id="main">
      <PageHero eyebrow="404" title="This Path Is Outside The Arena">
        <p>The page you are looking for does not exist or has moved.</p>
      </PageHero>
      <section className="section-pad bg-black">
        <div className="container-x text-center">
          <MagneticButton href="/">Return Home</MagneticButton>
        </div>
      </section>
    </main>
  );
}
