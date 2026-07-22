import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import MagneticButton from "./MagneticButton";

export default function BlogPreview({ compact = false }) {
  const posts = compact ? blogPosts.slice(0, 3) : blogPosts;

  return (
    <section id="blog" className="section-pad bg-[#080706]">
      <div className="container-x">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Latest fitness tips" title="Insights From The Arena">
            <p>Editable original demo content for strength, fat loss, recovery, nutrition, discipline and beginner guidance.</p>
          </SectionHeader>
          {compact && <MagneticButton href="/blog" variant="dark">Read All</MagneticButton>}
        </div>
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="glass-panel h-full overflow-hidden rounded-sm">
              <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
                <div className="relative h-64 overflow-hidden">
                  <Image src={post.image} alt={`${post.title} article image`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="eyebrow text-[0.62rem]">{post.category}</p>
                  <h3 className="mt-2 font-display text-3xl text-blackgold-bone group-hover:text-blackgold-gold">{post.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-blackgold-bone/62">{post.excerpt}</p>
                  <span className="mt-auto block pt-4 text-xs uppercase tracking-[0.14em] text-blackgold-gold">{post.readingTime}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
