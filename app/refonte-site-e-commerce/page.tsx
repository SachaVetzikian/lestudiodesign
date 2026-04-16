import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { IconArrowRight } from "@/app/components/Icons";

const SITE_URL = "https://www.lestudiodesign.fr";
const CANONICAL = `${SITE_URL}/refonte-site-e-commerce`;

export const metadata: Metadata = {
  title: "Refonte site e-commerce | Design Figma sur mesure",
  description:
    "Refonte complète de votre site e-commerce. Design UX/UI sur mesure en Figma. Augmentez votre conversion. Devis gratuit.",
  alternates: { canonical: CANONICAL },
};

const faqItems = [
  {
    q: "Combien coûte une refonte e-commerce chez LeStudio ?",
    a: "La refonte UX/UI par page démarre à partir de 900 € HT ; un site complet à partir de 4 500 € HT. Le devis final dépend du nombre de templates, des intégrations et du niveau de documentation.",
  },
  {
    q: "Travaillez-vous sur Shopify, WooCommerce, Prestashop ?",
    a: "Oui : nous livrons des maquettes Figma et un hand-off dev agnostique CMS. L’intégration est assurée par votre équipe ou votre partenaire technique.",
  },
  {
    q: "Faut-il passer par un audit avant la refonte ?",
    a: "C’est fortement recommandé. Un audit site e-commerce ou un audit UX évite de refondre pour déplacer les problèmes. Nous pouvons enchaîner audit puis refonte dans une feuille de route unique.",
  },
  {
    q: "Que contient le livrable Figma ?",
    a: "Maquettes desktop et mobile, design system (composants, états), pages clés du tunnel et notes pour les développeurs.",
  },
  {
    q: "Proposez-vous du développement ?",
    a: "LeStudio est spécialisé design et CRO : nous ne développons pas le site en interne, mais nos livrables sont pensés pour faciliter l’implémentation.",
  },
  {
    q: "Comment lancer un projet ?",
    a: "Contactez-nous via la page audit CRO (gratuit) ou par email : nous clarifions le périmètre, le calendrier et le budget.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Refonte site e-commerce",
  provider: { "@type": "Organization", name: "LeStudio", url: SITE_URL },
  areaServed: "FR",
  serviceType: "Refonte UX/UI e-commerce en Figma",
  url: CANONICAL,
  description:
    "Redesign sur mesure : maquettes Figma, design system et documentation pour augmenter la conversion.",
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

const signes = [
  "Le taux de conversion stagne malgré l’augmentation du budget pub.",
  "Le mobile est difficile à utiliser (tunnel, filtres, fiches produit).",
  "Le catalogue a grossi sans refonte de l’architecture.",
  "Les pages produit ne mettent pas assez en avant preuves et différenciation.",
  "L’équipe interne passe son temps à “patcher” sans vision produit.",
  "La refonte technique est prévue : c’est le bon moment pour aligner le design.",
  "La marque a évolué mais le site ne reflète plus l’offre ni la cible.",
];

const phases = [
  "Découverte & cadrage : objectifs, personas, audit existant, périmètre des pages.",
  "Architecture & wireframes : parcours, templates, prioritisation des écrans.",
  "UI & design system : Figma, composants, responsive, états d’erreur.",
  "Hand-off & itérations : documentation pour le dev, ajustements post-retours.",
];

const ameliorations = [
  "Clarté de l’offre et hiérarchie visuelle sur les fiches produit.",
  "Navigation et recherche adaptées au volume de références.",
  "Tunnel d’achat simplifié et réassurance au bon endroit.",
  "Cohérence mobile-first et accessibilité de base.",
  "Design system pour accélérer les futures évolutions.",
  "Alignement des messages avec vos campagnes acquisition.",
  "Réduction de la charge cognitive (formulaires, options, erreurs).",
  "Base saine pour des tests CRO (à partir de 2 000 € HT / mois).",
];

const casUsage = [
  {
    titre: "Refonte ciblée tunnel + PDP",
    texte:
      "Priorité sur les pages qui touchent directement le revenu : fiches produit, panier, checkout — avant d’étendre au reste du site.",
  },
  {
    titre: "Relance de marque + UX",
    texte:
      "Nouvelle charte ou repositionnement : refonte UI pour aligner identité et parcours d’achat, avec un site complet dès 4 500 € HT selon scope.",
  },
  {
    titre: "Après audit",
    texte:
      "Les recommandations de l’audit site e-commerce sont traduites en maquettes prêtes à intégrer, avec priorisation par sprint.",
  },
];

export default function RefonteSiteEcommercePage() {
  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      <article className="pt-28 pb-20 px-6 max-w-3xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
          Refonte e-commerce
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Refonte site e-commerce : Redesignez votre site pour augmenter la conversion
        </h1>

        <p className="text-lg md:text-xl text-black/60 mt-6 leading-relaxed">
          Une refonte UX/UI bien cadrée transforme votre boutique en levier durable : parcours
          plus clair, pages produit plus convaincantes, tunnel plus fluide — le tout livré en
          Figma pour vos développeurs.
        </p>

        <div className="mt-8">
          <Link href="/audit-cro" className="btn-primary inline-flex items-center gap-2">
            Demander un devis gratuit
            <IconArrowRight />
          </Link>
        </div>

        <div className="mt-14 space-y-6 text-black/70 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Quand faire une refonte e-commerce ?
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {signes.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black pt-8">
            Notre processus en 4 phases
          </h2>
          <ol className="list-decimal pl-5 space-y-3">
            {phases.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-black pt-8">Ce qu&apos;on améliore</h2>
          <ul className="list-disc pl-5 space-y-2">
            {ameliorations.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>

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
            Explorez notre{" "}
            <Link
              href="/e-commerce"
              className="font-semibold text-black underline underline-offset-4 hover:opacity-70"
            >
              pôle design e-commerce
            </Link>
            , les{" "}
            <Link
              href="/cas-etudes"
              className="font-semibold text-black underline underline-offset-4 hover:opacity-70"
            >
              cas d&apos;études
            </Link>
            , et les audits{" "}
            <Link
              href="/audit-site-e-commerce"
              className="font-semibold text-black underline underline-offset-4 hover:opacity-70"
            >
              site e-commerce
            </Link>{" "}
            /{" "}
            <Link
              href="/audit-ux-design"
              className="font-semibold text-black underline underline-offset-4 hover:opacity-70"
            >
              UX design
            </Link>{" "}
            pour cadrer la refonte.
          </p>
        </div>

        <section className="mt-16 border-t border-black/10 pt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">FAQ — Refonte</h2>
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
          <h2 className="text-2xl md:text-4xl font-bold">Parlons de votre refonte</h2>
          <p className="text-white/60 mt-4 max-w-lg mx-auto text-sm md:text-base">
            Refonte par page dès 900 € HT, site complet dès 4 500 € HT — devis personnalisé selon
            votre périmètre.
          </p>
          <Link
            href="/audit-cro"
            className="mt-8 btn-primary inline-flex items-center gap-2 text-lg justify-center"
          >
            Demander un devis gratuit
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
