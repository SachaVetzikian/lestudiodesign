import type { Metadata } from "next";
import Link from "next/link";
import { AuditCroLeadForm } from "./AuditCroLeadForm";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { IconCheck } from "@/app/components/Icons";

const SITE_URL = "https://www.lestudiodesign.fr";
const CANONICAL = `${SITE_URL}/audit-cro`;

export const metadata: Metadata = {
  title: "Audit CRO e-commerce | Optimisez votre taux de conversion",
  description:
    "Audit CRO complet pour augmenter votre taux de conversion. Tests A/B, copywriting, psychology. Audit gratuit.",
  alternates: { canonical: CANONICAL },
};

const faqItems = [
  {
    q: "Qu’est-ce qu’un audit CRO e-commerce ?",
    a: "C’est une analyse structurée de votre tunnel et de vos pages clés pour identifier ce qui empêche vos visiteurs de convertir, puis prioriser des actions mesurables (quick wins et chantiers).",
  },
  {
    q: "Combien coûte un audit CRO chez LeStudio ?",
    a: "L’audit CRO démarre à partir de 500 € HT. La refonte UX/UI par page démarre à partir de 900 € HT, un site complet à partir de 4 500 € HT, et l’optimisation CRO continue à 2 000 € HT / mois.",
  },
  {
    q: "Proposez-vous des tests A/B ?",
    a: "Oui dans le cadre de l’optimisation CRO mensuelle : nous formulons des hypothèses, mettons en place des tests lorsque votre stack le permet, et analysons les résultats.",
  },
  {
    q: "Le premier audit est-il vraiment gratuit ?",
    a: "Le formulaire sur cette page permet de demander un premier échange et un audit offert selon les créneaux disponibles — les modalités vous sont confirmées par email.",
  },
  {
    q: "Travaillez-vous uniquement sur le design ?",
    a: "Nous couvrons UX/UI, copy orientée conversion et priorisation des leviers. Le développement est en général assuré par votre équipe ou votre partenaire.",
  },
  {
    q: "Comment ça s’articule avec un audit UX ?",
    a: "Le CRO se concentre sur la performance commerciale ; l’audit UX sur l’ergonomie. Les deux sont complémentaires — voir nos pages audit UX et audit site e-commerce.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit CRO e-commerce",
  provider: { "@type": "Organization", name: "LeStudio", url: SITE_URL },
  areaServed: "FR",
  serviceType: "Optimisation du taux de conversion pour boutiques en ligne",
  url: CANONICAL,
  description:
    "Diagnostic CRO, priorisation des leviers, copy et UX orientées conversion. Tarifs à partir de 500 € HT.",
  offers: {
    "@type": "Offer",
    price: "500",
    priceCurrency: "EUR",
    priceValidUntil: "2027-12-31",
    availability: "https://schema.org/InStock",
    url: CANONICAL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const phasesCro = [
  "Collecte : objectifs, données (GA4), contexte marché et stack technique.",
  "Analyse du parcours : pages d’entrée, fiches produit, panier, checkout.",
  "Identification des fuites : friction, réassurance, copy, preuve sociale.",
  "Priorisation : impact estimé, effort, dépendances dev.",
  "Plan d’action : quick wins, roadmap tests, suivi des métriques clés.",
];

const leviersCro = [
  "Proposition de valeur et clarté de l’offre au-dessus de la ligne de flottaison.",
  "Pages produit : preuves, objections, comparaison, mobile.",
  "Panier : transparence des coûts, livraison, codes promo.",
  "Checkout : étapes, erreurs, moyens de paiement, réassurance.",
  "Réassurance : retours, garanties, SAV, politique de confidentialité.",
  "Preuve sociale : avis, UGC, logos presse (utilisés avec discernement).",
  "Copywriting : titres, micro-copy, emails panier abandonné (périmètre selon brief).",
  "Urgence et rareté : sans tromper — éthique et cohérence avec la marque.",
  "Performance perçue et lisibilité (sans remplacer l’optimisation technique serveur).",
  "Tests A/B et itérations dans le cadre de l’offre optimisation à 2 000 € HT / mois.",
];

export default function AuditCroLeadPage() {
  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-12 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
              Audit CRO e-commerce
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Audit CRO e-commerce : Optimisez votre taux de conversion
            </h1>

            <p className="text-lg md:text-xl text-black/60 mt-5 leading-relaxed">
              Le CRO (Conversion Rate Optimization) vise à convertir davantage de visiteurs
              qualifiés sans augmenter mécaniquement votre budget acquisition. Notre audit CRO
              identifie les leviers à fort impact sur votre boutique — avec des recommandations
              priorisées. Tarifs : audit CRO à partir de 500 € HT.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <h2 className="text-lg font-bold">Ce qui est inclus</h2>
                <ul className="mt-4 space-y-3 text-black/60 text-sm md:text-base">
                  <li className="flex gap-3">
                    <span className="mt-0.5">
                      <IconCheck />
                    </span>
                    Analyse du parcours conversion (landings → produit → panier → paiement)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5">
                      <IconCheck />
                    </span>
                    Lecture des leviers CRO (copy, réassurance, friction, preuve)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5">
                      <IconCheck />
                    </span>
                    Recommandations priorisées et pistes de tests
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-black text-white p-6">
                <div className="text-white/60 text-sm font-semibold uppercase tracking-widest">
                  Tarifs LeStudio
                </div>
                <p className="mt-2 text-white/80 text-sm md:text-base leading-relaxed">
                  Audit CRO à partir de 500 € HT · Refonte UX/UI par page dès 900 € HT · Site
                  complet dès 4 500 € HT · Optimisation CRO 2 000 € HT / mois.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#form" className="btn-primary text-center">
                Obtenir mon audit gratuit
              </a>
              <a href="/cas-etudes" className="btn-secondary text-center">
                Voir des réalisations
              </a>
            </div>
          </div>

          <div id="form" className="w-full">
            <AuditCroLeadForm />
          </div>
        </div>
      </section>

      <section className="px-6 pb-12 max-w-6xl mx-auto space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Qu&apos;est-ce que le CRO ?</h2>
          <p className="text-black/70 mt-4 max-w-3xl leading-relaxed">
            Le CRO consiste à améliorer le rendement de votre site : même trafic, plus de ventes
            (ou paniers plus qualifiés). Il combine analyse comportementale, ergonomie, messages
            et tests — là où le marketing seul pousse le volume, le CRO travaille le rendement.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-black/10">
            <table className="w-full text-sm md:text-base text-left">
              <thead>
                <tr className="border-b border-black/10 bg-black/[0.03]">
                  <th className="p-4 font-bold text-black">Critère</th>
                  <th className="p-4 font-bold text-black">Marketing (acquisition)</th>
                  <th className="p-4 font-bold text-black">CRO (conversion)</th>
                </tr>
              </thead>
              <tbody className="text-black/70">
                <tr className="border-b border-black/10">
                  <td className="p-4 font-medium text-black">Objectif principal</td>
                  <td className="p-4">Attirer du trafic qualifié</td>
                  <td className="p-4">Convertir ce trafic en revenu</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="p-4 font-medium text-black">Leviers typiques</td>
                  <td className="p-4">Pub, SEO, contenus, influence</td>
                  <td className="p-4">UX, copy, tunnel, tests A/B, réassurance</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="p-4 font-medium text-black">Mesure</td>
                  <td className="p-4">CPA, impressions, clics</td>
                  <td className="p-4">Taux de conversion, AOV, revenu par visiteur</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-black">Complémentarité</td>
                  <td className="p-4" colSpan={2}>
                    Sans CRO, le marketing alimente un entonnoir qui fuit ; sans trafic, le CRO
                    manque de signal. Les deux sont nécessaires.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Pourquoi faire un audit CRO ?</h2>
          <p className="text-black/70 mt-4 max-w-3xl leading-relaxed">
            Une petite amélioration du taux de conversion peut représenter un gain de revenu
            significatif à trafic constant — avant d&apos;ajouter une ligne de budget pub. Beaucoup de
            boutiques perdent des ventes sur des détails de tunnel, de page produit ou de
            message — un audit permet d&apos;arrêter les hypothèses et de prioriser.
          </p>
          <ul className="mt-6 space-y-2 text-black/70 max-w-3xl list-disc pl-5">
            <li>
              Même +0,2 pt de conversion peut peser lourd sur un volume de commandes élevé.
            </li>
            <li>
              Le coût d&apos;acquisition augmente souvent : le CRO protège votre marge.
            </li>
            <li>
              Les données (GA4, heatmaps) révèlent où investir en premier — pas au hasard.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Notre processus en 5 phases</h2>
          <ol className="mt-6 space-y-3 text-black/70 max-w-3xl list-decimal pl-5">
            {phasesCro.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Les 10 leviers CRO</h2>
          <ul className="mt-6 space-y-2 text-black/70 max-w-3xl list-disc pl-5">
            {leviersCro.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">
            Design &amp; audits
          </p>
          <p className="text-black/70 text-sm md:text-base leading-relaxed max-w-3xl">
            Découvrez notre{" "}
            <Link
              href="/e-commerce"
              className="font-semibold text-black underline underline-offset-4 hover:opacity-70"
            >
              design e-commerce
            </Link>
            , l&apos;{" "}
            <Link
              href="/audit-ux-design"
              className="font-semibold text-black underline underline-offset-4 hover:opacity-70"
            >
              audit UX design
            </Link>{" "}
            et l&apos;{" "}
            <Link
              href="/audit-site-e-commerce"
              className="font-semibold text-black underline underline-offset-4 hover:opacity-70"
            >
              audit site e-commerce
            </Link>{" "}
            pour un diagnostic plus large que le seul CRO.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold">FAQ — Audit CRO</h2>
          <div className="mt-6 space-y-4 max-w-3xl">
            {faqItems.map((item) => (
              <div key={item.q} className="rounded-2xl border border-black/10 bg-black/[0.02] p-6">
                <h3 className="font-bold text-black">{item.q}</h3>
                <p className="text-black/60 text-sm md:text-base mt-3 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-black/10 bg-black text-white p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-4xl font-bold">Passer à l&apos;action</h2>
              <p className="text-white/60 text-sm md:text-base mt-4 leading-relaxed">
                Remplissez le formulaire pour un premier échange. Idéal si votre boutique est en
                croissance et que chaque point de conversion compte.
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [serviceSchema, faqSchema],
          }),
        }}
      />
      <Footer />
    </main>
  );
}
