import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations E-commerce — Refontes UX/UI & CRO | LeStudio",
  description:
    "Réalisations e-commerce : refonte UX UI e-commerce, design Figma et CRO. Découvrez nos cas clients DTC et les projets réalisés.",
};

const SITE_URL = "https://lestudiodesign.fr";

const cases = [
  {
    name: "Cuure",
    category: "Compléments alimentaires",
    year: "2026",
    description: "Refonte du parcours d’achat",
    href: "#cuure",
  },
  {
    name: "Caalme",
    category: "Patchs bien-être",
    year: "2026",
    description: "Refonte UX/UI e-commerce",
    href: "#caalme",
  },
  {
    name: "Juliette Has A Gun",
    category: "Parfumerie",
    year: "2025",
    description: "Refonte UX/UI e-commerce",
    href: "#juliette-has-a-gun",
  },
  {
    name: "Apoticaria",
    category: "Compléments",
    year: "2025",
    description: "Refonte de la page produit",
    href: "#apoticaria",
  },
  {
    name: "Riviera Club",
    category: "Accessoires luxe",
    year: "2025",
    description: "Création du site e-commerce",
    href: "#riviera-club",
  },
  {
    name: "Yves Rocher",
    category: "Cosmétiques",
    year: "2023",
    description: "Refonte UX/UI e-commerce",
    href: "#yves-rocher",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: cases.map((c, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: c.name,
    url: `${SITE_URL}/realisations${c.href}`,
  })),
};

export default function RealisationsPage() {
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
            <a href="/#blog" className="hover:opacity-60 transition-opacity">
              Blog
            </a>
          </div>

          <a
            href="/#audit"
            className="hidden md:inline-flex bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-black/80 transition-colors"
          >
            Audit CRO offert
          </a>
        </div>
      </nav>

      <section className="pt-28 pb-10 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
            Refonte UX UI e-commerce
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Réalisations E-commerce — Refontes UX/UI & CRO
          </h1>
          <p className="text-lg md:text-xl text-black/60 mt-5 leading-relaxed">
            Une sélection de projets réalisés pour des marques DTC : refonte UX UI
            e-commerce, design Figma et optimisations CRO orientées conversion.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((p) => (
            <article
              key={p.name}
              id={p.href.replace("#", "")}
              className="bg-white rounded-2xl p-8 border border-black/10 hover:border-black/20 transition-colors group"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-black/40">
                  {p.category}
                </span>
                <span className="text-xs text-black/30">{p.year}</span>
              </div>

              <div className="aspect-video bg-black/5 rounded-xl mb-6 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="text-black/20 text-3xl font-bold">
                  {p.name[0]}
                </span>
              </div>

              <h2 className="text-xl font-bold">{p.name}</h2>
              <p className="text-black/60 text-sm mt-2 leading-relaxed">
                {p.description}
              </p>

              <a
                href={p.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black hover:opacity-70 transition-opacity"
              >
                Voir le projet <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-black text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Démarrer un projet</h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Vous voulez une refonte UX UI e-commerce orientée conversion ? Parlons de votre
            boutique et des pages à plus fort impact.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/services/audit-cro#cta"
              className="bg-white text-black font-bold px-10 py-5 rounded-full hover:bg-white/90 transition-colors inline-block text-lg"
            >
              Obtenir mon audit offert
            </a>
            <a
              href="/services/refonte-ux-ui#cta"
              className="border border-white/20 text-white font-semibold px-10 py-5 rounded-full hover:bg-white/5 transition-colors inline-block text-lg"
            >
              Voir la refonte UX/UI
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </main>
  );
}

