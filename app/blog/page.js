import BlogPreview from "@/components/BlogPreview";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Fitness Tips and Blog",
  description: "Original demo fitness tips for strength training, beginner guidance, recovery and discipline."
};

export default function BlogPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Fitness tips" title="Read Before You Rush">
        <p>Original editable article content for strength, recovery, nutrition, beginner guidance and old-school discipline.</p>
      </PageHero>
      <BlogPreview />
    </main>
  );
}
