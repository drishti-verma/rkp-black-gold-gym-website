import "./globals.css";
import ClientShell from "@/components/ClientShell";
import { site } from "@/lib/data";
import { createJsonLd } from "@/lib/utils";

export const metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "RKP BLACK GOLD GYM | The Old Skool Arena in Betul Bazar",
    template: "%s | RKP BLACK GOLD GYM"
  },
  description:
    "Train with power, discipline, and purpose at RKP BLACK GOLD GYM, The Old Skool Arena near Nagar Palika, Betul Bazar. Explore strength training, cardio, functional fitness, personal training, and premium membership options.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "RKP BLACK GOLD GYM | The Old Skool Arena",
    description:
      "Premium strength training, cardio, functional fitness and personal training in Betul Bazar.",
    url: site.baseUrl,
    siteName: site.name,
    images: [{ url: site.images.hero, width: 1536, height: 864, alt: "Cinematic black and gold gym arena" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RKP BLACK GOLD GYM | The Old Skool Arena",
    description: "Power. Discipline. Brotherhood. Transformation.",
    images: [site.images.hero]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <a href="#main" className="sr-only-focusable fixed left-4 top-4 z-[10000] rounded bg-black px-4 py-2 text-sm text-blackgold-gold">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(createJsonLd()) }}
        />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
