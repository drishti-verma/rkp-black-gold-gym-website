import Image from "next/image";
import { site } from "@/lib/data";

export default function PageHero({ eyebrow, title, children, image = site.images.hero }) {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-42" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.96),rgba(5,5,5,0.72),rgba(5,5,5,0.95))]" />
      </div>
      <div className="container-x relative min-h-[430px] py-20">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="display-title max-w-4xl text-balance">{title}</h1>
        {children && <div className="mt-6 max-w-3xl text-lg leading-8 text-blackgold-bone/72">{children}</div>}
      </div>
    </section>
  );
}
