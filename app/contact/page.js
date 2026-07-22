import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact",
  description: "Contact RKP BLACK GOLD GYM near Nagar Palika, Betul Bazar. Call, WhatsApp, get directions and view timings."
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Contact" title="Find RKP BLACK GOLD GYM">
        <p>GUD MANDI, Near Nagar Palika, Betul Bazar, Madhya Pradesh - 460004. Call +91 94250 03533.</p>
      </PageHero>
      <ContactSection />
      <FAQ />
    </main>
  );
}
