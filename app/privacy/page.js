import PageHero from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for RKP BLACK GOLD GYM website forms and contact information."
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Privacy" title="Privacy Policy">
        <p>How this website handles inquiry, newsletter and contact form information.</p>
      </PageHero>
      <section className="section-pad bg-black">
        <div className="container-x max-w-4xl">
          <Policy title="Information We Collect">
            We collect only the details submitted through forms, such as name, mobile number, email address, fitness goal, preferred membership and message content.
          </Policy>
          <Policy title="How It Is Used">
            Information is used to respond to membership inquiries, contact requests and newsletter subscriptions. It is not sold to third parties.
          </Policy>
          <Policy title="Form Security">
            The website includes client-side and server-side validation, spam protection and basic rate limiting. Do not submit sensitive medical or payment information through forms.
          </Policy>
          <Policy title="Contact">
            For privacy questions, contact {site.name} at {site.phone} or visit the gym at {site.address}.
          </Policy>
        </div>
      </section>
    </main>
  );
}

function Policy({ title, children }) {
  return (
    <section className="mb-6 glass-panel rounded-sm p-6">
      <h2 className="font-display text-4xl text-blackgold-bone">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-blackgold-bone/66">{children}</p>
    </section>
  );
}
