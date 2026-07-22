import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Membership Inquiry",
  description: "Submit a premium multi-step membership inquiry form for RKP BLACK GOLD GYM."
};

export default function InquiryPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Membership inquiry" title="Start Your Journey">
        <p>Tell us your goal, preferred membership, personal training interest and training time.</p>
      </PageHero>
      <section className="section-pad bg-black">
        <div className="container-x grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeader eyebrow="Form" title="Membership Inquiry">
            <p>Client-side and server-side validation, consent, spam protection, loading state, success state and WhatsApp follow-up are included.</p>
          </SectionHeader>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
