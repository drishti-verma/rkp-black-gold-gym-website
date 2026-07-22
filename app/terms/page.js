import PageHero from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for using the RKP BLACK GOLD GYM website."
};

export default function TermsPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Terms" title="Terms And Conditions">
        <p>Website terms for membership inquiries, fitness information and external links.</p>
      </PageHero>
      <section className="section-pad bg-black">
        <div className="container-x max-w-4xl">
          <Term title="Website Content">
            Content is provided for general information and gym inquiry purposes. Final membership pricing, availability and offers must be confirmed directly with {site.name}.
          </Term>
          <Term title="Fitness Guidance">
            Calculators, articles, nutrition guidance and supplement information are educational only and do not replace professional medical, dietetic or fitness advice.
          </Term>
          <Term title="External Links">
            WhatsApp, Instagram and Google Maps links open external services. Their own terms and privacy policies apply.
          </Term>
          <Term title="Use Of Media">
            Transformation photos, testimonials and trainer details should be published only after approval and verification.
          </Term>
        </div>
      </section>
    </main>
  );
}

function Term({ title, children }) {
  return (
    <section className="mb-6 glass-panel rounded-sm p-6">
      <h2 className="font-display text-4xl text-blackgold-bone">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-blackgold-bone/66">{children}</p>
    </section>
  );
}
