import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import type { CaseStudy } from "./_data";
import { IconCheck } from "@/app/components/Icons";

const SITE_URL = "https://lestudiodesign.fr";

export function CaseStudyPage({ cs }: { cs: CaseStudy }) {
  const canonicalUrl = `${SITE_URL}/cas-etudes/${cs.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: `${cs.client} — ${cs.projectTitle}`,
    about: [cs.category, "UX/UI", "CRO", "E-commerce"],
    datePublished: `${cs.year}-01-01`,
    url: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: "LeStudio",
      url: SITE_URL,
    },
  };

  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
              Cas d&apos;études e-commerce
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              {cs.client}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-black text-white px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                {cs.year}
              </span>
              <span className="text-black/40">—</span>
              <span className="text-black/60 font-semibold">{cs.category}</span>
            </div>
            <p className="text-lg md:text-xl text-black/60 mt-5 leading-relaxed">
              {cs.projectTitle}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href="/audit-cro"
                className="btn-primary text-center"
              >
                Démarrer mon projet
              </Link>
              <Link
                href="/cas-etudes"
                className="btn-secondary text-center"
              >
                Voir tous les cas
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 overflow-hidden">
            <div className="aspect-video bg-black/[0.04] flex items-end p-6">
              <div className="rounded-full bg-white/70 border border-black/10 px-4 py-2 text-black/70 text-xs font-semibold uppercase tracking-widest">
                Image placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-black/10 bg-white p-7">
              <h2 className="text-2xl md:text-3xl font-bold">Contexte</h2>
              <div className="text-black/70 leading-relaxed mt-4">{cs.context}</div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7">
              <h2 className="text-2xl md:text-3xl font-bold">Problématique</h2>
              <div className="text-black/70 leading-relaxed mt-4">{cs.problem}</div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7">
              <h2 className="text-2xl md:text-3xl font-bold">Solution</h2>
              <div className="text-black/70 leading-relaxed mt-4">{cs.solution}</div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-black text-white p-7">
              <h2 className="text-2xl md:text-3xl font-bold">Résultats</h2>
              <div className="text-white/70 leading-relaxed mt-4">{cs.results}</div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-black/10 bg-white p-7">
              <h3 className="text-lg font-bold">Livrables</h3>
              <ul className="mt-4 space-y-2 text-black/60 text-sm">
                {cs.deliverables.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-0.5">
                      <IconCheck />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-black text-white p-7">
              <h3 className="text-lg font-bold">Démarrer</h3>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                Un projet similaire ? On vous aide à prioriser et livrer un design Figma prêt
                à intégrer.
              </p>
              <Link
                href="/audit-cro"
                className="mt-5 btn-primary w-full"
              >
                Démarrer mon projet
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="rounded-2xl bg-black text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Démarrer mon projet</h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Audit CRO offert ou refonte UX/UI : on identifie ce qui bloque vos ventes, puis on
            optimise le parcours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/audit-cro"
              className="btn-primary inline-block text-lg"
            >
              Démarrer mon projet
            </Link>
            <Link
              href="/services/refonte-ux-ui"
              className="btn-secondary inline-block text-lg"
            >
              Voir la refonte UX/UI
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Footer />
    </main>
  );
}

