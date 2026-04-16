import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { IconCheck, IconMinus, IconPlus } from "@/app/components/Icons";

export const metadata: Metadata = {
  title: "Optimisation CRO e-commerce — Abonnement mensuel | LeStudio",
  description:
    "Optimisation CRO e-commerce en abonnement mensuel : itérations continues, A/B testing, optimisation des fiches produit et du tunnel d'achat pour augmenter la conversion.",
};

const CONTACT_EMAIL = "contact@lestudiodesign.fr";

const faq = [
  {
    q: "Qu’est-ce que l’optimisation CRO e-commerce en abonnement ?",
    a: "C’est une collaboration mensuelle pour améliorer en continu votre taux de conversion : hypothèses, priorisation, tests (A/B testing), itérations design et recommandations actionnables.",
  },
  {
    q: "Que comprend l’abonnement ?",
    a: "L’optimisation CRO e-commerce inclut la priorisation des actions, l’optimisation des fiches produit, du tunnel d’achat, des landing pages clés et des recommandations basées sur les données et retours utilisateurs.",
  },
  {
    q: "Faites-vous de l’A/B testing ?",
    a: "Oui, lorsque votre stack le permet. Nous définissons les hypothèses, les variantes, et les métriques, puis nous analysons les résultats pour itérer.",
  },
  {
    q: "Quel est le tarif ?",
    a: "Le tarif est de 2000€/mois.",
  },
  {
    q: "Combien de temps faut-il pour voir des résultats ?",
    a: "Les résultats dépendent du trafic, du funnel et du volume de conversions, mais l’objectif est de générer des gains visibles au fil des itérations mensuelles.",
  },
  {
    q: "Comment démarrer ?",
    a: "Cliquez sur “Démarrer” et envoyez votre site + vos objectifs. Nous revenons vers vous avec les prochaines étapes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function OptimisationCroPage() {
  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
            Optimisation CRO e-commerce
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Optimisation CRO E-commerce — Abonnement mensuel
          </h1>

          <p className="text-lg md:text-xl text-black/60 mt-5 leading-relaxed">
            L’optimisation CRO e-commerce est un travail d’itération continue :
            on mesure, on teste, on améliore. Objectif : augmenter la conversion
            sur vos pages à fort impact (fiches produit, tunnel d’achat, pages
            d’atterrissage), sans improviser.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <a
              href="#cta"
              className="btn-primary text-center"
            >
              Démarrer
            </a>
            <a
              href="#faq"
              className="btn-secondary text-center"
            >
              Voir la FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border border-black/10 bg-white p-7">
            <h2 className="text-2xl md:text-3xl font-bold">Ce qui est inclus</h2>
            <p className="text-black/60 text-sm md:text-base mt-3 leading-relaxed">
              Un abonnement mensuel orienté performance. On travaille en cycles
              courts pour améliorer les pages qui génèrent le plus de revenus.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "A/B testing",
                "Fiches produit",
                "Tunnel d'achat",
                "Priorisation & itérations",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-black/10 px-4 py-3 text-sm font-semibold text-black/80"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-black text-white p-7">
            <h2 className="text-2xl md:text-3xl font-bold">Cadence mensuelle</h2>
            <ul className="mt-4 space-y-3 text-white/70 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="mt-0.5">
                  <IconCheck />
                </span>
                Hypothèses et priorisation (impact x effort)
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5">
                  <IconCheck />
                </span>
                Conception des variantes (UX/UI)
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5">
                  <IconCheck />
                </span>
                Mise en place / suivi des tests (selon stack)
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5">
                  <IconCheck />
                </span>
                Analyse et itérations pour le prochain cycle
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">
            Tarif
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            2000€/mois
          </h2>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Optimisation CRO e-commerce</h3>
              <p className="text-black/60 text-sm mt-2 leading-relaxed max-w-2xl">
                Abonnement mensuel pour optimiser la conversion avec des cycles
                de tests, d’itérations UX/UI et d’améliorations ciblées sur vos
                pages à fort impact.
              </p>
            </div>
            <div className="shrink-0">
              <div className="text-3xl font-bold">2000€</div>
              <div className="text-black/50 text-sm">/ mois</div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Questions fréquentes sur l’optimisation CRO e-commerce
          </h2>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-7">
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-black/10 bg-white px-5 py-4"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <h3 className="font-bold text-base md:text-lg">{item.q}</h3>
                  <span className="shrink-0 text-black/60">
                    <IconPlus className="group-open:hidden" />
                    <IconMinus className="hidden group-open:block" />
                  </span>
                </summary>
                <p className="text-black/60 text-sm md:text-base mt-3 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      <section id="cta" className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="rounded-2xl bg-black text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Démarrer</h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Lancez votre optimisation CRO e-commerce. Envoyez votre site et vos
            objectifs : on revient avec un plan d’action et la cadence du premier mois.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                "Optimisation CRO e-commerce — démarrage"
              )}&body=${encodeURIComponent(
                "Bonjour,\n\nJe souhaite démarrer une optimisation CRO e-commerce (abonnement mensuel).\n\nLien de mon site : \nObjectif principal : \nStack / outils (si applicable) : \n\nMerci."
              )}`}
              className="btn-primary inline-block text-lg"
            >
              Démarrer
            </a>
            <a
              href="/"
              className="btn-secondary inline-block text-lg"
            >
              Voir LeStudio
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

