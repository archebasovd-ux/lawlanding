import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/lib/data";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans-var",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-display-var",
});

const SITE_URL = "https://garantia-zashchity.ru"; // мок-домен, заменить после покупки

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Адвокат в ${site.city}е — ${site.lawyer} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: `Адвокат ${site.lawyer} (${site.city}): уголовные дела, гражданские и семейные споры, защита репутации, имущественные споры. ${site.experience}. Реестр № ${site.registryNumber}.`,
  keywords: [
    "адвокат санкт-петербург",
    "уголовный адвокат",
    "семейный адвокат",
    "защита репутации",
    "имущественные споры",
    site.lawyer,
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: site.name,
    title: `Адвокат ${site.lawyer} — ${site.name}`,
    description: `Защита по уголовным, гражданским и семейным делам в ${site.city}е. ${site.experience}.`,
    images: ["/images/marina-hero.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: site.name,
  url: SITE_URL,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: "RU",
  },
  founder: {
    "@type": "Person",
    name: site.lawyer,
    jobTitle: "Адвокат",
    identifier: site.registryNote,
  },
  areaServed: site.city,
  image: `${SITE_URL}/images/marina-hero.png`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
