"use client";

import { ArrowUp, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { membershipPlans, navItems, programs, site } from "@/lib/data";
import { mapsHref, phoneHref, whatsappHref } from "@/lib/utils";
import Logo from "./Logo";
import MagneticButton from "./MagneticButton";
import OpenStatus from "./OpenStatus";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState({ status: "idle", message: "" });
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    function update() {
      setShowFloat(window.innerWidth >= 640 || window.scrollY > 420);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  async function submit(event) {
    event.preventDefault();
    setState({ status: "loading", message: "" });
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Could not subscribe.");
      setEmail("");
      setState({ status: "success", message: "You are on the list for future fitness updates." });
    } catch (error) {
      setState({ status: "error", message: error.message });
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-blackgold-gold/15 bg-black">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blackgold-gold to-transparent" />
      <div className="container-x section-pad">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-7 text-blackgold-bone/66">
              {site.name} is a premium old-school strength arena in Betul Bazar built around clean training, discipline, brotherhood and transformation.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-blackgold-bone/72">
              <a href={phoneHref()} className="inline-flex items-center gap-2 hover:text-blackgold-gold"><Phone className="h-4 w-4" /> {site.phone}</a>
              <a href={mapsHref()} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 hover:text-blackgold-gold"><MapPin className="mt-1 h-4 w-4 shrink-0" /> {site.address}</a>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-blackgold-gold"><Instagram className="h-4 w-4" /> @rkp_blackgold_</a>
              <OpenStatus />
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn title="Quick Links" items={[...navItems, { label: "Inquiry", href: "/inquiry" }]} />
            <FooterColumn title="Programs" items={programs.map((item) => ({ label: item.title, href: `/programs#${item.slug}` }))} />
            <FooterColumn title="Membership" items={membershipPlans.map((item) => ({ label: item.title, href: `/membership#${item.slug}` }))} />
            <div>
              <p className="eyebrow mb-4">Newsletter</p>
              <form onSubmit={submit} className="grid gap-3">
                <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="Email address"
                  className="min-h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-sm text-blackgold-bone outline-none placeholder:text-blackgold-bone/38 focus:border-blackgold-gold"
                />
                <MagneticButton type="submit" className="w-full" ariaLabel="Subscribe to newsletter">
                  {state.status === "loading" ? "Joining..." : "Subscribe"}
                </MagneticButton>
                {state.message && <p className={`text-xs ${state.status === "error" ? "text-red-300" : "text-emerald-300"}`}>{state.message}</p>}
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-blackgold-bone/54 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-blackgold-gold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blackgold-gold">Terms and Conditions</Link>
            <a href="#main" className="hover:text-blackgold-gold">Accessibility</a>
          </div>
        </div>
      </div>
      <div className={`fixed bottom-4 right-4 z-[850] flex flex-row-reverse items-center gap-2 transition duration-300 sm:bottom-5 sm:right-5 sm:flex-col sm:items-stretch ${showFloat ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-10 opacity-0"}`}>
        <MagneticButton href={whatsappHref()} target="_blank" rel="noreferrer" className="h-11 w-11 px-0 sm:w-auto sm:px-4" ariaLabel="WhatsApp RKP BLACK GOLD GYM">
          <MessageCircle className="h-4 w-4 sm:hidden" />
          <span className="hidden sm:inline">WhatsApp</span>
        </MagneticButton>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-blackgold-gold/30 bg-black/80 text-blackgold-gold shadow-glow sm:self-end" aria-label="Back to top">
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <div className="grid gap-2">
        {items.map((item) => (
          <Link key={`${title}-${item.href}-${item.label}`} href={item.href} className="text-sm text-blackgold-bone/62 transition hover:text-blackgold-gold">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
