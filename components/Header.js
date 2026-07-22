"use client";

import { Menu, Phone, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { megaMenu, navItems } from "@/lib/data";
import { phoneHref } from "@/lib/utils";
import Logo from "./Logo";
import MagneticButton from "./MagneticButton";

export default function Header({ onOpenSearch }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    function update() {
      setScrolled(window.scrollY > 20);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-[900] transition duration-300 ${scrolled ? "border-b border-blackgold-gold/15 bg-black/76 shadow-2xl backdrop-blur-xl" : "bg-gradient-to-b from-black/78 to-transparent"}`}>
      <div className="flex min-h-[82px] w-full min-w-0 items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <div className="hidden sm:block">
          <Logo />
        </div>
        <div className="sm:hidden">
          <Logo compact />
        </div>
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0 min-[1280px]:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring group relative rounded-sm px-2 py-2 text-[0.68rem] font-bold uppercase tracking-[0.1em] transition ${active ? "text-blackgold-gold" : "text-blackgold-bone/78 hover:text-blackgold-gold"}`}
              >
                {item.label}
                <span className={`absolute inset-x-2 -bottom-0.5 h-px origin-left bg-blackgold-gold transition ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </Link>
            );
          })}
          <div className="relative hidden min-[1536px]:block" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
            <button
              onFocus={() => setMegaOpen(true)}
              onClick={() => setMegaOpen((value) => !value)}
              className="focus-ring rounded-sm px-2.5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-blackgold-bone/78 hover:text-blackgold-gold"
              aria-expanded={megaOpen}
            >
              Arena Menu
            </button>
            {megaOpen && (
              <div className="absolute right-0 top-full grid w-[620px] grid-cols-3 gap-4 border border-blackgold-gold/18 bg-black/92 p-5 shadow-glow backdrop-blur-xl">
                {megaMenu.map((group) => (
                  <div key={group.title}>
                    <p className="eyebrow mb-3 text-[0.62rem]">{group.title}</p>
                    <div className="grid gap-2">
                      {group.links.map((link) => (
                        <Link key={link.href} href={link.href} className="rounded-sm border border-white/8 bg-white/[0.03] px-3 py-2 text-sm text-blackgold-bone/74 hover:border-blackgold-gold/35 hover:text-blackgold-gold">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <button onClick={onOpenSearch} className="focus-ring grid h-11 w-11 place-items-center rounded-sm border border-white/10 bg-white/[0.04] text-blackgold-bone hover:border-blackgold-gold/40 hover:text-blackgold-gold" aria-label="Open search">
            <Search className="h-4 w-4" />
          </button>
          <a href={phoneHref()} className="focus-ring hidden h-11 items-center gap-2 rounded-sm border border-blackgold-gold/25 px-3 text-sm font-bold text-blackgold-bone hover:text-blackgold-gold lg:inline-flex">
            <Phone className="h-4 w-4" />
            Call
          </a>
          <MagneticButton href="/inquiry" className="hidden xl:inline-flex">Join Now</MagneticButton>
          <button onClick={() => setMobileOpen((value) => !value)} className="focus-ring grid h-11 w-11 place-items-center rounded-sm border border-white/10 bg-white/[0.04] text-blackgold-bone min-[1280px]:hidden" aria-label="Toggle menu" aria-expanded={mobileOpen}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="min-[1280px]:hidden">
          <div className="mx-4 mb-4 max-h-[calc(100vh-98px)] overflow-y-auto border border-blackgold-gold/18 bg-black/96 p-4 shadow-glow backdrop-blur-xl">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="focus-ring rounded-sm border border-white/8 px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-blackgold-bone/82 hover:border-blackgold-gold/40 hover:text-blackgold-gold">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <MagneticButton href={phoneHref()} variant="dark">Call Now</MagneticButton>
              <MagneticButton href="/inquiry">Join the Arena</MagneticButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
