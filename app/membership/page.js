import InquiryForm from "@/components/InquiryForm";
import MembershipPlans from "@/components/MembershipPlans";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Membership Plans",
  description: "Explore configurable monthly, quarterly, half-yearly, annual and personal training membership plans."
};

export default function MembershipPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Membership" title="Commit To The Arena">
        <p>Choose a membership duration and contact the gym for approved current pricing. No fake urgency, no invented rates.</p>
      </PageHero>
      <MembershipPlans />
      <section className="section-pad bg-black">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Inquiry" title="Start Your Membership Conversation">
            <p>Send your goal, preferred timing and plan interest. WhatsApp follow-up is available after submission.</p>
          </SectionHeader>
          <InquiryForm compact />
        </div>
      </section>
    </main>
  );
}
