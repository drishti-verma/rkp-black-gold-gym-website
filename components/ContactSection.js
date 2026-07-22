"use client";

import { Copy, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/data";
import { mapsEmbedSrc, mapsHref, phoneHref, whatsappHref } from "@/lib/utils";
import MagneticButton from "./MagneticButton";
import OpenStatus from "./OpenStatus";
import SectionHeader from "./SectionHeader";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ fullName: "", mobile: "", message: "", consent: false });
  const [status, setStatus] = useState("");

  async function copyAddress() {
    await navigator.clipboard.writeText(site.address);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  async function submit(event) {
    event.preventDefault();
    setStatus("Sending...");
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        email: "",
        ageGroup: "Contact form",
        goal: "General inquiry",
        membership: "monthly",
        personalTraining: "Maybe",
        preferredTime: "Morning 5:00 AM - 11:00 AM",
        experience: "Beginner"
      })
    });
    const result = await response.json();
    setStatus(response.ok ? "Message received. WhatsApp is fastest for follow-up." : result.message || "Please check the form.");
  }

  return (
    <section id="contact" className="section-pad bg-black">
      <div className="container-x">
        <SectionHeader eyebrow="Contact" title="Step Into The Arena">
          <p>Call, WhatsApp, get directions, copy the address or send a quick contact message.</p>
        </SectionHeader>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="grid gap-4">
            <div className="glass-panel rounded-sm p-5">
              <p className="eyebrow mb-3">Address</p>
              <p className="text-lg leading-8 text-blackgold-bone/78">{site.address}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <MagneticButton href={mapsHref()} target="_blank" rel="noreferrer" variant="dark"><MapPin className="h-4 w-4" /> Directions</MagneticButton>
                <button onClick={copyAddress} className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-sm border border-white/10 px-5 text-sm font-bold uppercase tracking-[0.12em] text-blackgold-bone/70 hover:text-blackgold-gold">
                  <Copy className="h-4 w-4" /> {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
            <div className="glass-panel rounded-sm p-5">
              <p className="eyebrow mb-3">Business hours</p>
              <div className="grid gap-2 text-blackgold-bone/72">
                {site.hours.map((item) => <p key={item.label}>{item.label}: {item.opens} - {item.closes}</p>)}
                <OpenStatus />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <MagneticButton href={phoneHref()}><Phone className="h-4 w-4" /> Call Now</MagneticButton>
              <MagneticButton href={whatsappHref()} target="_blank" rel="noreferrer" variant="dark"><MessageCircle className="h-4 w-4" /> WhatsApp</MagneticButton>
              <MagneticButton href={site.instagram} target="_blank" rel="noreferrer" variant="dark"><Instagram className="h-4 w-4" /> Instagram</MagneticButton>
              <MagneticButton href="/inquiry" variant="dark">Membership Inquiry</MagneticButton>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="gold-border overflow-hidden rounded-sm bg-black">
              <iframe
                title="Google Maps preview for RKP BLACK GOLD GYM near Nagar Palika, Betul Bazar"
                src={mapsEmbedSrc()}
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <form onSubmit={submit} className="glass-panel grid gap-4 rounded-sm p-5">
              <p className="eyebrow">Quick contact form</p>
              <label className="grid gap-2 text-sm text-blackgold-bone/64">
                Full name
                <input required value={form.fullName} onChange={(event) => setForm({ ...form, fullName: event.target.value })} className="min-h-12 rounded-sm border border-white/10 bg-black/40 px-3 text-blackgold-bone outline-none focus:border-blackgold-gold" />
              </label>
              <label className="grid gap-2 text-sm text-blackgold-bone/64">
                Mobile number
                <input required value={form.mobile} onChange={(event) => setForm({ ...form, mobile: event.target.value })} className="min-h-12 rounded-sm border border-white/10 bg-black/40 px-3 text-blackgold-bone outline-none focus:border-blackgold-gold" />
              </label>
              <label className="grid gap-2 text-sm text-blackgold-bone/64">
                Message
                <textarea required rows="4" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="rounded-sm border border-white/10 bg-black/40 px-3 py-3 text-blackgold-bone outline-none focus:border-blackgold-gold" />
              </label>
              <label className="flex items-start gap-3 text-sm text-blackgold-bone/64">
                <input required type="checkbox" checked={form.consent} onChange={(event) => setForm({ ...form, consent: event.target.checked })} className="mt-1 accent-blackgold-gold" />
                I consent to be contacted about this message.
              </label>
              <MagneticButton type="submit">Send Message</MagneticButton>
              {status && <p className="text-sm text-blackgold-bone/64">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
