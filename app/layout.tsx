import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://lestudiodesign.fr";
const title = "Consultant UX/UI & CRO E-commerce — LeStudio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description:
    "Agence UX/UI & CRO spécialisée e-commerce DTC. Audit CRO offert, design Figma livré en 7 jours, et optimisation basée sur la donnée pour augmenter la conversion.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title,
    description:
      "Agence UX/UI & CRO spécialisée e-commerce DTC. Audit CRO offert, design Figma livré en 7 jours, et optimisation basée sur la donnée pour augmenter la conversion.",
    locale: "fr_FR",
    siteName: "LeStudio",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Agence UX/UI & CRO spécialisée e-commerce DTC. Audit CRO offert, design Figma livré en 7 jours, et optimisation basée sur la donnée pour augmenter la conversion.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "LeStudio",
        url: SITE_URL,
        email: "contact@lestudiodesign.fr",
        description:
          "Agence UX/UI & CRO e-commerce DTC spécialisée dans l’optimisation de la conversion.",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "France",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "FR",
        },
        slogan: "Agence UX/UI & CRO e-commerce DTC",
        makesOffer: {
          "@id": `${SITE_URL}/#service`,
        },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        serviceType: "Audit CRO & UX/UI design pour e-commerce DTC",
        provider: {
          "@id": `${SITE_URL}/#localbusiness`,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "France",
        },
      },
    ],
  };

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        <script
          type="application/ld+json"
          // Next.js ne fournit pas de DSL pour JSON-LD : on injecte directement le script.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
