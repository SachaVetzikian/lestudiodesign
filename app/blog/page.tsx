import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { BlogClient } from "./BlogClient";
import type { BlogPost } from "./_shared";

export const metadata: Metadata = {
  title: "Blog CRO & UX e-commerce | LeStudio",
  description:
    "Blog CRO & UX e-commerce : conseils actionnables pour augmenter votre taux de conversion (Shopify, UX, CRO, A/B testing).",
};

const SITE_URL = "https://lestudiodesign.fr";

const AUTHOR_NAME = "Sacha Vetzikian";

const featured: BlogPost = {
  slug: "audit-cro-ecommerce-guide-complet-2026",
  title: "Audit CRO E-commerce : le guide complet 2026",
  category: "CRO",
  dateISO: "2026-02-12",
  readingTimeMin: 9,
  excerpt:
    "Méthode, pages à analyser, priorisation et quick wins : tout ce qu’il faut pour identifier ce qui bloque vos ventes et augmenter la conversion.",
  author: AUTHOR_NAME,
};

const posts: BlogPost[] = [
  featured,
  {
    slug: "ameliorer-taux-conversion-shopify",
    title: "Comment améliorer son taux de conversion Shopify",
    category: "Shopify",
    dateISO: "2026-01-23",
    readingTimeMin: 7,
    excerpt:
      "Les leviers CRO les plus rentables sur Shopify : messages, preuve sociale, vitesse, CTA et pages clés du parcours d’achat.",
    author: AUTHOR_NAME,
  },
  {
    slug: "ux-ecommerce-10-erreurs",
    title: "UX e-commerce : les 10 erreurs qui tuent vos ventes",
    category: "UX Design",
    dateISO: "2026-01-08",
    readingTimeMin: 6,
    excerpt:
      "Navigation, PDP, confiance, checkout : les frictions UX qui font chuter la conversion — et les corrections prioritaires.",
    author: AUTHOR_NAME,
  },
  {
    slug: "ab-testing-shopify-par-ou-commencer",
    title: "A/B testing : par où commencer sur Shopify",
    category: "A/B Testing",
    dateISO: "2025-12-18",
    readingTimeMin: 5,
    excerpt:
      "Une méthode simple pour lancer vos premiers tests : hypothèses, priorisation, métriques et cadence d’itération.",
    author: AUTHOR_NAME,
  },
  {
    slug: "fiche-produit-best-practices-cro",
    title: "Fiche produit e-commerce : les best practices CRO",
    category: "CRO",
    dateISO: "2025-11-27",
    readingTimeMin: 8,
    excerpt:
      "Proposition de valeur, bénéfices, preuves, objections et CTA : structurez une PDP qui convertit mieux.",
    author: AUTHOR_NAME,
  },
  {
    slug: "tunnel-achat-shopify-reduire-abandon-panier",
    title: "Tunnel d'achat Shopify : réduire l'abandon panier",
    category: "Shopify",
    dateISO: "2025-10-09",
    readingTimeMin: 7,
    excerpt:
      "Frais, réassurance, paiement, frictions : les optimisations concrètes pour réduire l’abandon et augmenter la conversion.",
    author: AUTHOR_NAME,
  },
  {
    slug: "combien-coute-audit-cro-ecommerce",
    title: "Combien coûte un audit CRO e-commerce ?",
    category: "CRO",
    dateISO: "2025-09-03",
    readingTimeMin: 4,
    excerpt:
      "Les facteurs qui font varier le prix d’un audit CRO e-commerce et comment choisir le bon périmètre pour un ROI rapide.",
    author: AUTHOR_NAME,
  },
];

const blogPostingSchemas = posts.map((p) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: p.title,
  description: p.excerpt,
  datePublished: p.dateISO,
  dateModified: p.dateISO,
  author: {
    "@type": "Person",
    name: p.author,
  },
  publisher: {
    "@type": "Organization",
    name: "LeStudio",
    url: SITE_URL,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/blog/${p.slug}`,
  },
  url: `${SITE_URL}/blog/${p.slug}`,
  about: p.category,
}));

export default function BlogPage() {
  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />
      <BlogClient featured={featured} posts={posts} />

      {blogPostingSchemas.map((schema, idx) => (
        <script
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Footer />
    </main>
  );
}

