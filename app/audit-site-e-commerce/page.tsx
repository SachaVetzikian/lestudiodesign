import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { IconArrowRight } from "@/app/components/Icons";

const SITE_URL = "https://www.lestudiodesign.fr";
const CANONICAL = `${SITE_URL}/audit-site-e-commerce`;

export const metadata: Metadata = {
  title: "Audit site e-commerce | Optimisez votre conversion",
  description:
    "Audit complet de votre site e-commerce. Identifiez les blocages UX et CRO. Augmentez votre taux de conversion. Audit gratuit.",
  alternates: { canonical: CANONICAL },
};

const faqItems = [
  {
    q: "En quoi l’audit site e-commerce diffère-t-il d’un audit UX seul ?",
    a: "L’audit site e-commerce couvre aussi les leviers de conversion : offre perçue, réassurance, cohérence acquisition ↔ site, et priorisation business. L’audit UX se concentre davantage sur l’ergonomie et la clarté.",
  },
  {
    q: "Analysez-vous le checkout et le mobile ?",
    a: "Oui. Le tunnel d’achat et l’expérience mobile sont des piliers : une grande partie des abandons s’y joue.",
  },
  {
    q: "Puis-je utiliser le rapport avec mon agence technique ?",
    a: "Le livrable est conçu pour être partagé : synthèse, liste priorisée et recommandations actionnables. Votre agence peut s’en servir comme backlog UX/CRO.",
  },
  {
    q: "Proposez-vous des tests A/B après l’audit ?",
    a: "L’audit identifie les hypothèses à tester. L’optimisation CRO continue peut prendre le relais (à partir de 2 000 € HT / mois) pour itérer avec méthode.",
  },
  {
    q: "Quels sont vos tarifs ?",
    a: "L’audit CRO démarre à partir de 500 € HT. La refonte UX/UI par page à partir de 900 € HT, un site complet à partir de 4 500 € HT. L’audit site e-commerce est chiffré selon le périmètre — demandez un devis.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit site e-commerce",
  provider: { "@type": "Organization", name: "LeStudio", url: SITE_URL },
  areaServed: "FR",
  serviceType: "Audit UX et CRO pour boutiques en ligne",
  url: CANONICAL,
  description:
    "Diagnostic complet : acquisition, navigation, pages produit, tunnel d’achat et leviers de conversion.",
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

const categories = [
  "Acquisition & messages : cohérence des landings, promesses, offres.",
  "Navigation & catalogue : arborescence, recherche, filtres, lisibilité des catégories.",
  "Pages produit : preuves, options, prix, contenus, mobile.",
  "Panier & tunnel : étapes, frais, livraison, paiement, erreurs.",
  "Confiance & réassurance : avis, garanties, SAV, politique de retour.",
  "Performance perçue & contenus : vitesse ressentie, clarté, friction cognitive.",
];

const phases = [
  "Brief & accès : objectifs, URL, analytics, périmètre des pages.",
  "Analyse UX + parcours : friction points, heuristiques, lecture mobile.",
  "Analyse CRO & opportunités : leviers, quick wins, risques et dépendances.",
  "Données & contexte : complément GA4 / heatmaps si disponibles.",
  "Rapport : synthèse exécutive, priorisation impact / effort, feuille de route.",
];

const casUsage = [
  {
    titre: "Marque DTC en croissance",
    texte:
      "Trafic en hausse mais panier moyen fragile : l’audit met en évidence les ruptures entre campagnes et pages produit, puis priorise les correctifs checkout.",
  },
  {
    titre: "Catalogue qui s’épaissit",
    texte:
      "Filtres incomplets et recherche faible : le diagnostic porte sur la findabilité et la comparaison pour réduire les sorties prématurées.",
  },
  {
    titre: "Refonte envisagée",
    texte:
      "Avant d’investir dans une refonte complète (site dès 4 500 € HT), l’audit site permet de cadrer les templates et messages qui auront le plus d’impact.",
  },
];

export default function AuditSiteEcommercePage() {
  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      <article className="pt-28 pb-20 px-6 max-w-3xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
          Audit site e-commerce
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Audit site e-commerce : Optimisez votre taux de conversion
        </h1>

        <p className="text-lg md:text-xl text-black/60 mt-6 leading-relaxed">
          Un audit site e-commerce combine UX et CRO : vous obtenez une vision à 360° des
          blocages qui empêchent vos visiteurs de convertir — des pages d&apos;entrée au paiement.
        </p>

        <div className="mt-8">
          <Link href="/audit-cro" className="btn-primary inline-flex items-center gap-2">
            Obtenir mon audit gratuit
            <IconArrowRight />
          </Link>
        </div>

        <div className="mt-14 space-y-6 text-black/70 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Pourquoi auditer votre boutique ?
          </h2>
          <p>
            Une part importante du trafic e-commerce ne se convertit pas au premier passage — une
            partie est normale (recherche d&apos;information), mais une autre partie reflète des
            frictions évitables : page produit peu convaincante, tunnel opaque, mobile pénible.
            Auditer, c&apos;est arrêter de compenser uniquement par la pub et agir sur le rendement du
            site lui-même.
          </p>
          <p>
            Chez LeStudio, nous considérons que sans vision claire des priorités, les équipes
            itèrent au hasard. L&apos;audit site e-commerce donne un cadre : quoi corriger en premier,
            pourquoi, et comment mesurer l&apos;impact.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black pt-8">Ce qu&apos;on analyse</h2>
          <p className="text-black/60 text-sm">
            Six familles d&apos;analyse pour couvrir l&apos;essentiel du parcours d&apos;achat :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            {categories.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black pt-8">
            Notre processus en 5 phases
          </h2>
          <ol className="list-decimal pl-5 space-y-3">
            {phases.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-black pt-8">Cas d&apos;usage</h2>
          <div className="space-y-6 not-prose">
            {casUsage.map((c) => (
              <div
                key={c.titre}
                className="rounded-2xl border border-black/10 bg-black/[0.02] p-6"
              >
                <h3 className="font-bold text-black">{c.titre}</h3>
                <p className="text-sm md:text-base mt-2 leading-relaxed">{c.texte}</p>
              </div>
            ))}
          </div>

          <p className="pt-4">
            Retrouvez notre{" "}
            <Link
              href="/e-commerce"
              className="font-semibold text-black underline underline-offset-4 hover:opacity-70"
            >
              offre design e-commerce
            </Link>
            , l&apos;{" "}
            <Link
              href="/audit-ux-design"
              className="font-semibold text-black underline underline-offset-4 hover:opacity-70"
            >
              audit UX design
            </Link>{" "}
            pour un focus ergonomie, et la{" "}
            <Link
              href="/refonte-site-e-commerce"
              className="font-semibold text-black underline underline-offset-4 hover:opacity-70"
            >
              refonte site e-commerce
            </Link>{" "}
            pour passer aux maquettes Figma.
          </p>
        </div>

        <section className="mt-16 border-t border-black/10 pt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">FAQ</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.q} className="rounded-2xl border border-black/10 bg-black/[0.02] p-6">
                <h3 className="font-bold text-black">{item.q}</h3>
                <p className="text-black/60 text-sm md:text-base mt-3 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-2xl bg-black text-white p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold">Passer à l&apos;audit site</h2>
          <p className="text-white/60 mt-4 max-w-lg mx-auto text-sm md:text-base">
            Décrivez votre boutique et vos objectifs : nous vous répondons avec les prochaines
            étapes.
          </p>
          <Link
            href="/audit-cro"
            className="mt-8 btn-primary inline-flex items-center gap-2 text-lg justify-center"
          >
            Obtenir mon audit gratuit
            <IconArrowRight />
          </Link>
        </div>
      </article>

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
