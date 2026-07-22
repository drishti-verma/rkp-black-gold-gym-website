import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import MagneticButton from "@/components/MagneticButton";
import { blogPosts, site } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article"
    }
  };
}

export default function BlogArticlePage({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${site.baseUrl}${post.image}`,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.baseUrl}/blog/${post.slug}`
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />
      <PageHero eyebrow={post.category} title={post.title} image={post.image}>
        <p>{post.excerpt}</p>
        <p className="mt-2 text-sm uppercase tracking-[0.16em] text-blackgold-gold">{post.readingTime}</p>
      </PageHero>
      <article className="section-pad bg-black">
        <div className="container-x grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
          <div className="prose prose-invert max-w-none prose-p:text-blackgold-bone/72 prose-headings:font-display prose-headings:text-blackgold-bone">
            <div className="relative mb-8 h-[420px] overflow-hidden rounded-sm border border-blackgold-gold/20">
              <Image src={post.image} alt={`${post.title} feature image`} fill sizes="(min-width: 1024px) 72vw, 100vw" className="object-cover" />
            </div>
            {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p>
              This article is general educational content for fitness awareness. It is not medical advice and should be adapted with qualified guidance when needed.
            </p>
          </div>
          <aside className="glass-panel h-max rounded-sm p-5">
            <p className="eyebrow">Share</p>
            <h2 className="mt-3 font-display text-3xl text-blackgold-bone">Bring This To Training</h2>
            <p className="mt-3 text-sm leading-7 text-blackgold-bone/62">Talk to a coach before turning any article into a personal plan.</p>
            <div className="mt-5 grid gap-3">
              <MagneticButton href="/inquiry" className="w-full">Start Your Journey</MagneticButton>
              <MagneticButton href="/blog" variant="dark" className="w-full">Back To Blog</MagneticButton>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
