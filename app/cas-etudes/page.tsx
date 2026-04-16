import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";
import { IconArrowRight } from "@/app/components/Icons";

export const metadata: Metadata = {
  title: "Cas d'études E-commerce — Refontes UX/UI & CRO | LeStudio",
  description:
    "Cas d'études e-commerce : refonte UX UI e-commerce, design Figma et CRO. Découvrez nos cas clients DTC et les projets réalisés.",
};

const SITE_URL = "https://lestudiodesign.fr";

const cases = [
  {
    name: "Cuure",
    category: "Compléments alimentaires",
    year: "2026",
    description: "Refonte du parcours d’achat",
    href: "/cas-etudes/cuure",
  },
  {
    name: "Caalme",
    category: "Patchs bien-être",
    year: "2026",
    description: "Refonte UX/UI e-commerce",
    href: "/cas-etudes/caalme",
  },
  {
    name: "Juliette Has A Gun",
    category: "Parfumerie",
    year: "2025",
    description: "Refonte UX/UI e-commerce",
    href: "/cas-etudes/juliette-has-a-gun",
  },
  {
    name: "Apoticaria",
    category: "Compléments",
    year: "2025",
    description: "Refonte de la page produit",
    href: "/cas-etudes/apoticaria",
  },
  {
    name: "Riviera Club",
    category: "Accessoires luxe",
    year: "2025",
    description: "Création du site e-commerce",
    href: "/cas-etudes/riviera-club",
  },
  {
    name: "Yves Rocher",
    category: "Cosmétiques",
    year: "2023",
    description: "Refonte UX/UI e-commerce",
    href: "/cas-etudes/yves-rocher",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: cases.map((c, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: c.name,
    url: `${SITE_URL}${c.href}`,
  })),
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-10 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
            Refonte UX UI e-commerce
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Cas d&apos;études E-commerce — Refontes UX/UI & CRO
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

              <Link
                href={p.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black hover:opacity-70 transition-opacity"
              >
                Voir le projet <IconArrowRight />
              </Link>
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
              className="btn-primary inline-block text-lg"
            >
              Obtenir mon audit offert
            </a>
            <a
              href="/services/refonte-ux-ui#cta"
              className="btn-secondary inline-block text-lg"
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
      <Footer />
    </main>
  );
}

