import type { Metadata } from "next";
import { AuditCroLeadForm } from "./AuditCroLeadForm";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { IconCheck } from "@/app/components/Icons";

export const metadata: Metadata = {
  title: "Audit CRO e-commerce offert — LeStudio",
  description:
    "Audit CRO e-commerce offert : identifiez ce qui bloque vos ventes. Analyse du parcours, benchmark concurrents, et 3 recommandations prioritaires.",
};

const SITE_URL = "https://lestudiodesign.fr";

export default function AuditCroLeadPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
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
  };

  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-12 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
              Audit CRO e-commerce offert
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Audit CRO E-commerce Offert — Identifiez ce qui bloque vos ventes
            </h1>

            <p className="text-lg md:text-xl text-black/60 mt-5 leading-relaxed">
              Vous payez du trafic, mais la conversion stagne ? On vous aide à
              comprendre pourquoi. Cet audit CRO e-commerce gratuit vous donne
              une vision claire des blocages et des prochaines actions à fort
              impact.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <h2 className="text-lg font-bold">Ce qui est inclus</h2>
                <ul className="mt-4 space-y-3 text-black/60 text-sm md:text-base">
                  <li className="flex gap-3">
                    <span className="mt-0.5">
                      <IconCheck />
                    </span>
                    Analyse du parcours (pages clés → panier → checkout)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5">
                      <IconCheck />
                    </span>
                    Benchmark concurrents (signaux de confiance, offre, UX)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5">
                      <IconCheck />
                    </span>
                    3 recommandations prioritaires (quick wins)
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-black text-white p-6">
                <div className="text-white/60 text-sm font-semibold uppercase tracking-widest">
                  Bonus
                </div>
                <p className="mt-2 text-white/80 text-sm md:text-base leading-relaxed">
                  Un plan d’action simple pour débloquer vos ventes sans
                  “changer au hasard”.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#form"
                className="btn-primary text-center"
              >
                Obtenir mon audit gratuit
              </a>
              <a
                href="/cas-etudes"
                className="btn-secondary text-center"
              >
                Voir des réalisations
              </a>
            </div>
          </div>

          <div id="form" className="w-full">
            <AuditCroLeadForm />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-black/10 bg-black text-white p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-4xl font-bold">
                Prêt à débloquer votre conversion ?
              </h2>
              <p className="text-white/60 text-sm md:text-base mt-4 leading-relaxed">
                Si votre boutique est entre 500k€ et 5M€ de CA annuel, l’audit
                est particulièrement pertinent : on identifie rapidement les
                frictions qui coûtent des ventes.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="#form"
                className="btn-primary inline-flex items-center justify-center w-full md:w-auto"
              >
                Obtenir mon audit gratuit
              </a>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Footer />
    </main>
  );
}

