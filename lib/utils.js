import { site } from "./data";

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function phoneHref() {
  return `tel:+${site.phoneRaw}`;
}

export function whatsappHref(message = "Namaste RKP BLACK GOLD GYM, I want to know about membership.") {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function mapsHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;
}

export function mapsEmbedSrc() {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED || `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
}

export function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toTitle(value) {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function getIstParts(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    weekday: "long"
  });
  const parts = Object.fromEntries(formatter.formatToParts(date).map((part) => [part.type, part.value]));
  return {
    weekday: parts.weekday,
    minutes: Number(parts.hour) * 60 + Number(parts.minute)
  };
}

export function getOpenStatus(date = new Date()) {
  const { minutes } = getIstParts(date);
  const activeWindow = site.hours.find((window) => minutes >= timeToMinutes(window.opens) && minutes < timeToMinutes(window.closes));
  if (activeWindow) {
    return { open: true, label: `Open now - closes at ${formatTime(activeWindow.closes)}` };
  }

  const nextWindow = site.hours.find((window) => minutes < timeToMinutes(window.opens)) || site.hours[0];
  return { open: false, label: `Closed now - opens at ${formatTime(nextWindow.opens)}` };
}

export function formatTime(time) {
  const [hours, minutes] = time.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;
  return `${hour12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

export function createJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthClub"],
    name: site.name,
    description: `${site.name} is ${site.tagline}, a premium strength, cardio, functional fitness and personal training gym in Betul Bazar.`,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "GUD MANDI, Near Nagar Palika",
      addressLocality: "Betul Bazar",
      addressRegion: "Madhya Pradesh",
      postalCode: "460004",
      addressCountry: "IN"
    },
    openingHoursSpecification: site.hours.map((window) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: window.opens,
      closes: window.closes
    })),
    sameAs: [site.instagram],
    url: site.baseUrl,
    image: `${site.baseUrl}${site.images.hero}`
  };
}
