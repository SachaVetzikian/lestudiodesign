import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog CRO & UX e-commerce | LeStudio",
  description:
    "Blog CRO & UX e-commerce : guides, méthodes et best practices pour améliorer la conversion Shopify et l’expérience utilisateur.",
};

const SITE_URL = "https://lestudiodesign.fr";

const posts = [
  {
    title: "Comment améliorer son taux de conversion Shopify en 2025",
    category: "Shopify",
    date: "2025-01-18",
    excerpt:
      "Les leviers CRO concrets pour augmenter la conversion : hiérarchie, preuve sociale, vitesse, pages clés et tunnel d’achat.",
    href: "#conversion-shopify-2025",
  },
  {
    title: "Audit CRO e-commerce : le guide complet",
    category: "Audit CRO",
    date: "2025-02-06",
    excerpt:
      "Comment structurer un audit CRO e-commerce : pages à analyser, priorisation, quick wins et plan d’action orienté revenus.",
    href: "#audit-cro-guide-complet",
  },
  {
    title: "UX e-commerce : les 10 erreurs qui tuent vos ventes",
    category: "UX",
    date: "2025-03-12",
    excerpt:
      "Les erreurs UX qui bloquent la conversion (et comment les corriger) : navigation, PDP, confiance, checkout et friction.",
    href: "#ux-erreurs-ventes",
  },
  {
    title: "A/B testing Shopify : par où commencer",
    category: "A/B testing",
    date: "2025-04-03",
    excerpt:
      "Une méthode simple pour lancer vos premiers tests A/B sur Shopify : hypothèses, priorisation, métriques, et cadence.",
    href: "#ab-testing-shopify-commencer",
  },
  {
    title: "Fiche produit e-commerce : les best practices CRO",
    category: "CRO",
    date: "2025-05-21",
    excerpt:
      "Les best practices CRO pour vos fiches produit : proposition de valeur, bénéfices, preuves, objections et CTA.",
    href: "#fiche-produit-best-practices",
  },
  {
    title: "Tunnel d'achat Shopify : comment réduire l'abandon panier",
    category: "Checkout",
    date: "2025-06-10",
    excerpt:
      "Réduire l’abandon panier : clarté des frais, réassurance, moyens de paiement, frictions et micro-copies du tunnel d’achat.",
    href: "#tunnel-achat-abandon-panier",
  },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog CRO & UX e-commerce — LeStudio",
  url: `${SITE_URL}/blog`,
  inLanguage: "fr-FR",
  publisher: {
    "@type": "Organization",
    name: "LeStudio",
    url: SITE_URL,
  },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    datePublished: p.date,
    dateModified: p.date,
    about: p.category,
    url: `${SITE_URL}/blog${p.href}`,
    isPartOf: {
      "@type": "Blog",
      name: "Blog CRO & UX e-commerce — LeStudio",
      url: `${SITE_URL}/blog`,
    },
    publisher: {
      "@type": "Organization",
      name: "LeStudio",
      url: SITE_URL,
    },
  })),
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export default function BlogPage() {
  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight" aria-label="LeStudio">
            LeStudio
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="/realisations" className="hover:opacity-60 transition-opacity">
              Réalisations
            </a>
            <a href="/#services" className="hover:opacity-60 transition-opacity">
              Services
            </a>
            <a href="/#tarifs" className="hover:opacity-60 transition-opacity">
              Tarifs
            </a>
            <a href="/blog" className="hover:opacity-60 transition-opacity">
              Blog
            </a>
          </div>

          <a
            href="/audit-cro"
            className="hidden md:inline-flex bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-black/80 transition-colors"
          >
            Audit CRO offert
          </a>
        </div>
      </nav>

      <section className="pt-28 pb-10 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
            CRO & UX e-commerce
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Blog CRO & UX E-commerce
          </h1>
          <p className="text-lg md:text-xl text-black/60 mt-5 leading-relaxed">
            Guides pratiques et best practices pour améliorer la conversion : audit CRO
            e-commerce, UX, A/B testing Shopify, pages produit et tunnel d’achat.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article
              key={p.title}
              id={p.href.replace("#", "")}
              className="bg-white rounded-2xl p-8 border border-black/10 hover:border-black/20 transition-colors group"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-black/40">
                  {p.category}
                </span>
                <time className="text-xs text-black/30" dateTime={p.date}>
                  {formatDate(p.date)}
                </time>
              </div>

              <h2 className="text-xl font-bold leading-snug">{p.title}</h2>
              <p className="text-black/60 text-sm mt-3 leading-relaxed">{p.excerpt}</p>

              <a
                href={p.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black hover:opacity-70 transition-opacity"
              >
                Lire l'article <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-black text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Besoin d’un audit CRO ?</h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Si vous voulez des recommandations prioritaires et actionnables, démarrez par un audit CRO e-commerce.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/audit-cro"
              className="bg-white text-black font-bold px-10 py-5 rounded-full hover:bg-white/90 transition-colors inline-block text-lg"
            >
              Obtenir mon audit gratuit
            </a>
            <a
              href="/services/audit-cro"
              className="border border-white/20 text-white font-semibold px-10 py-5 rounded-full hover:bg-white/5 transition-colors inline-block text-lg"
            >
              Voir l’offre Audit CRO
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
    </main>
  );
}

