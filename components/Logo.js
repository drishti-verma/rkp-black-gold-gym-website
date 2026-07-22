import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/data";

export default function Logo({ compact = false }) {
  return (
    <Link
      href="/"
      className="group inline-flex min-w-0 items-center gap-2.5 focus-ring sm:gap-3"
      aria-label="RKP BLACK GOLD GYM home"
    >
      <span
        className={`${compact ? "h-11 w-11" : "h-[52px] w-[52px] sm:h-14 sm:w-14"} relative grid shrink-0 place-items-center overflow-hidden rounded-sm border border-blackgold-gold/45 bg-black shadow-glow`}
      >
        <Image
          src={site.images.logo}
          alt=""
          fill
          sizes={compact ? "44px" : "56px"}
          className="object-contain"
          priority={compact}
        />
      </span>
      <span className={`${compact ? "max-w-[132px]" : "max-w-[210px]"} min-w-0 leading-none`}>
        <span className={`${compact ? "text-[1.05rem]" : "text-[1.45rem] sm:text-2xl"} block truncate font-display tracking-normal text-blackgold-bone`}>
          {compact ? "RKP BLACK GOLD" : "RKP BLACK GOLD GYM"}
        </span>
        <span className={`${compact ? "text-[0.52rem] tracking-[0.18em]" : "text-[0.62rem] tracking-[0.26em]"} block truncate font-accent uppercase text-blackgold-gold`}>
          The Old Skool Arena
        </span>
      </span>
    </Link>
  );
}
