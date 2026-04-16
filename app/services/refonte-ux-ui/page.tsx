import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { IconCheck, IconMinus, IconPlus } from "@/app/components/Icons";

export const metadata: Metadata = {
  title: "Refonte UX/UI e-commerce — Design Figma livré en 7 jours | LeStudio",
  description:
    "Refonte UX/UI e-commerce : maquettes Figma livrées en 7 jours, design system, et hand-off dev. Conçu pour améliorer la conversion dès l’expérience utilisateur.",
};

const CONTACT_EMAIL = "contact@lestudiodesign.fr";

const faq = [
  {
    q: "Qu’est-ce qui est inclus dans la refonte UX/UI e-commerce ?",
    a: "Une refonte orientée conversion : analyse des pages clés, cadrage des objectifs, création des maquettes Figma, mise en place d’un design system, puis préparation du hand-off pour accélérer l’implémentation côté dev.",
  },
  {
    q: "Livrez-vous un design system ?",
    a: "Oui. Vous recevez une base réutilisable : composants, styles, et guidelines d’utilisation pour assurer une intégration cohérente et scalable.",
  },
  {
    q: "Fournissez-vous le hand-off dev ?",
    a: "Oui. Les livrables incluent les annotations, les specs et un hand-off dev clair pour réduire les allers-retours et préserver l’intention design.",
  },
  {
    q: "Quel est le délai annoncé ?",
    a: "Notre promesse : design Figma livré en 7 jours (pour le périmètre défini). Le délai dépend ensuite du scope exact validé au démarrage.",
  },
  {
    q: "A partir de quel prix ?",
    a: "Les tarifs commencent à partir de 900€.",
  },
  {
    q: "Comment démarrer ?",
    a: "Cliquez sur le CTA “Démarrer mon projet”. Vous recevrez les prochaines étapes par email (ou directement via votre messagerie).",
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

export default function RefonteUxUiPage() {
  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
            Refonte UX/UI e-commerce
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Refonte UX/UI E-commerce — Design Figma livré en 7 jours
          </h1>

          <p className="text-lg md:text-xl text-black/60 mt-5 leading-relaxed">
            La refonte UX/UI e-commerce qui clarifie l’offre, améliore le parcours
            d’achat et prépare une implémentation sans friction. Un design
            Figma propre, orienté conversion, avec design system et hand-off
            dev pour accélérer votre équipe.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border border-black/10 bg-white p-7">
            <h2 className="text-2xl md:text-3xl font-bold">Objectif</h2>
            <p className="text-black/60 text-sm md:text-base mt-3 leading-relaxed">
              Transformer votre boutique en une expérience cohérente et persuasive :
              hiérarchie claire, messages alignés, parcours fluide vers le panier,
              et design system réutilisable.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "Clarté de l’offre",
                "Meilleure conversion",
                "Composants réutilisables",
                "Hand-off dev rapide",
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
            <h2 className="text-2xl md:text-3xl font-bold">Livrables</h2>
            <ul className="mt-4 space-y-3 text-white/70 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="mt-0.5">
                  <IconCheck />
                </span>
                Maquettes Figma (pages clés & parcours d’achat)
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5">
                  <IconCheck />
                </span>
                Design system (styles + composants)
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5">
                  <IconCheck />
                </span>
                Spécifications pour l’équipe dev
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5">
                  <IconCheck />
                </span>
                Hand-off dev annoté et prêt à implémenter
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">
            Méthode
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            4 étapes pour une refonte UX/UI e-commerce solide
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "01",
              title: "Cadrage & audit UX/UI",
              desc: "On identifie ce qui bloque la conversion et on fixe un périmètre réaliste.",
            },
            {
              number: "02",
              title: "Design system & UX",
              desc: "Structuration des composants, hiérarchie des pages, et parcours d’achat optimisé.",
            },
            {
              number: "03",
              title: "Maquettes Figma",
              desc: "Design détaillé, cohérent, et prêt à être intégré dans votre stack.",
            },
            {
              number: "04",
              title: "Hand-off dev",
              desc: "Annotations, specs et hand-off clair pour réduire les interprétations.",
            },
          ].map((s) => (
            <div key={s.number} className="rounded-2xl border border-black/10 bg-white">
              <div className="p-8 border-t-2 border-black">
                <span className="text-4xl font-bold text-black/10">{s.number}</span>
                <h3 className="font-bold mt-4 mb-2">{s.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">
            Tarifs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Refonte UX/UI e-commerce — à partir de 900€
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-black/10">
            <div className="text-black/30 text-sm font-mono">01</div>
            <h3 className="text-xl font-bold mt-4 mb-3">Refonte UX/UI (scope essentiel)</h3>
            <p className="text-black/60 text-sm leading-relaxed">
              Maquettes Figma et préparation hand-off pour pages clés e-commerce.
            </p>
            <p className="font-bold text-black mt-6">À partir de 900€</p>
          </div>

          <div className="bg-black text-white rounded-2xl p-8 border border-black/10">
            <div className="text-white/30 text-sm font-mono">02</div>
            <h3 className="text-xl font-bold mt-4 mb-3">Refonte + design system</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Design system complet et composants pour accélérer la cohérence UI.
            </p>
            <p className="font-bold text-white mt-6">À partir de 1 600€</p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-black/10">
            <div className="text-black/30 text-sm font-mono">03</div>
            <h3 className="text-xl font-bold mt-4 mb-3">Scope complet + hand-off étendu</h3>
            <p className="text-black/60 text-sm leading-relaxed">
              Pour des parcours plus larges : pages, tunnel, et specs détaillées.
            </p>
            <p className="font-bold text-black mt-6">Sur devis</p>
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Questions fréquentes sur la refonte UX/UI e-commerce
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
          <h2 className="text-3xl md:text-5xl font-bold">
            Démarrer mon projet
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Recevez les prochaines étapes pour votre refonte UX/UI e-commerce.
            Design Figma livré en 7 jours, avec hand-off dev prêt à intégrer.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                "Refonte UX/UI e-commerce — démarrage"
              )}&body=${encodeURIComponent(
                "Bonjour,\n\nJe souhaite démarrer une refonte UX/UI e-commerce.\n\nLien de mon site : \nObjectif principal : \nPages à refondre : \n\nMerci."
              )}`}
              className="btn-primary inline-block text-lg"
            >
              Démarrer mon projet
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

