import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { IconArrowRight } from "@/app/components/Icons";

const SITE_URL = "https://www.lestudiodesign.fr";
const CANONICAL = `${SITE_URL}/e-commerce`;

export const metadata: Metadata = {
  title: "Design e-commerce sur mesure | Le Studio Design",
  description:
    "Agence spécialisée en design e-commerce. Audit UX, refonte Figma, optimisation CRO pour marques DTC. Augmentez votre conversion.",
  alternates: { canonical: CANONICAL },
};

const faqItems = [
  {
    q: "Que couvre le design e-commerce chez LeStudio ?",
    a: "UX/UI orientée conversion, parcours d’achat, pages produit, tunnel, design system Figma et recommandations CRO — pour les marques DTC qui veulent scaler sans alourdir l’acquisition.",
  },
  {
    q: "Quels sont vos tarifs indicatifs ?",
    a: "Audit CRO à partir de 500 € HT, refonte UX/UI par page à partir de 900 € HT, site complet à partir de 4 500 € HT, optimisation CRO à 2 000 € HT / mois. Devis selon le périmètre.",
  },
  {
    q: "Travaillez-vous avec Shopify et WooCommerce ?",
    a: "Oui : nous livrons du design agnostic CMS ; l’intégration est réalisée par votre équipe ou votre partenaire.",
  },
  {
    q: "Proposez-vous du développement ?",
    a: "Non en interne : nous sommes spécialisés design et CRO. Nos livrables sont documentés pour faciliter le développement.",
  },
  {
    q: "Comment démarrer un projet ?",
    a: "Par un échange via l’audit CRO gratuit ou un brief : nous vous orientons vers l’offre la plus pertinente (audit UX, audit site, refonte).",
  },
  {
    q: "Pourquoi se concentrer sur la conversion ?",
    a: "Parce qu’améliorer le taux de conversion augmente le revenu sans multiplier mécaniquement le budget publicitaire — surtout pour les marques entre 500 k€ et 5 M€ de CA.",
  },
];

const services = [
  {
    href: "/audit-ux-design",
    titre: "Audit UX design",
    desc: "Friction, heuristiques Nielsen, données et rapport priorisé.",
  },
  {
    href: "/audit-site-e-commerce",
    titre: "Audit site e-commerce",
    desc: "Diagnostic UX + CRO sur tout le parcours d’achat.",
  },
  {
    href: "/refonte-site-e-commerce",
    titre: "Refonte site e-commerce",
    desc: "Maquettes Figma, design system et hand-off dev.",
  },
  {
    href: "/audit-cro",
    titre: "Audit CRO",
    desc: "À partir de 500 € HT — identification des leviers de conversion.",
  },
  {
    href: "/services/optimisation-cro",
    titre: "Optimisation CRO",
    desc: "2 000 € HT / mois — itérations et tests sur la durée.",
  },
];

const etapes = [
  "Diagnostic : objectifs, données, irritants (audit UX, audit site ou CRO).",
  "Priorisation : impact business, effort technique, quick wins.",
  "Design : Figma, composants réutilisables, tunnel et fiches produit.",
  "Mesure & itérations : hypothèses, suivi, optimisation continue possible.",
];

const casClients = [
  {
    titre: "Parcours mobile & tunnel",
    texte:
      "Réduction des frictions checkout et clarification des étapes pour un panier plus fluide sur smartphone.",
  },
  {
    titre: "Pages produit & preuve",
    texte:
      "Meilleure hiérarchie des informations, réassurance et différenciation pour soutenir le panier moyen.",
  },
  {
    titre: "CRO & vélocité",
    texte:
      "Passage du diagnostic aux maquettes puis tests : une boucle courte entre data et design.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness-ecom`,
  name: "LeStudio",
  url: SITE_URL,
  description:
    "Agence spécialisée en design e-commerce, audit UX, refonte Figma et optimisation CRO pour marques DTC.",
  areaServed: { "@type": "Country", name: "FR" },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Services design e-commerce — LeStudio",
  url: CANONICAL,
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Audit UX design e-commerce",
        url: `${SITE_URL}/audit-ux-design`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Audit site e-commerce",
        url: `${SITE_URL}/audit-site-e-commerce`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Refonte site e-commerce",
        url: `${SITE_URL}/refonte-site-e-commerce`,
      },
    },
  ],
};

export default function EcommercePillarPage() {
  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      <article className="pt-28 pb-20 px-6 max-w-3xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
          Le Studio Design — E-commerce
        </p>

        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Design e-commerce sur mesure : Augmentez votre conversion
        </h1>

        <p className="text-lg md:text-xl text-black/60 mt-6 leading-relaxed">
          LeStudio accompagne les marques DTC qui veulent convertir plus : UX/UI, audits et
          refontes Figma pensées pour le chiffre — pas seulement pour la déco.
        </p>

        <div className="mt-8">
          <Link href="/audit-cro" className="btn-primary inline-flex items-center gap-2">
            Obtenir mon audit gratuit
            <IconArrowRight />
          </Link>
        </div>

        <div className="mt-16 prose prose-neutral max-w-none text-black/70 leading-relaxed space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-black not-prose mt-12 mb-4">
            Pourquoi le design e-commerce est critique
          </h2>
          <p>
            Sur une boutique, chaque seconde d&apos;hésitation se traduit en sortie, panier abandonné
            ou besoin de remarketing coûteux. Le design e-commerce ne se résume pas à une charte
            : il structure la décision d&apos;achat — offre lisible, confiance au bon moment, tunnel
            sans surprise — surtout sur mobile.
          </p>
          <p>
            Sans cette discipline, les équipes compensent souvent par plus de trafic ou plus de
            promotions, alors que la conversion du site reste le levier le plus rentable à
            moyen terme. C&apos;est pourquoi nous alignons design, données et priorités business.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-black not-prose mt-12 mb-4">
            Nos 5 services
          </h2>
          <div className="not-prose grid gap-4 mt-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-2xl border border-black/10 bg-white p-6 hover:border-black/20 transition-colors group"
              >
                <h3 className="font-bold text-lg text-black">{s.titre}</h3>
                <p className="text-black/60 text-sm mt-2">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-black/70 mt-4 group-hover:text-black">
                  En savoir plus <IconArrowRight />
                </span>
              </Link>
            ))}
          </div>
          <p className="text-sm not-prose">
            Tarifs indicatifs : audit CRO dès 500 € HT, refonte par page dès 900 € HT, site
            complet dès 4 500 € HT, optimisation CRO à 2 000 € HT / mois.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-black not-prose mt-12 mb-4">
            Notre approche en 4 étapes
          </h2>
          <ol className="list-decimal pl-5 space-y-3 not-prose text-black/70">
            {etapes.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ol>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-black not-prose mt-12 mb-4">
            Cas clients (exemples de problématiques)
          </h2>
          <div className="not-prose space-y-4">
            {casClients.map((c) => (
              <div
                key={c.titre}
                className="rounded-2xl border border-black/10 bg-black/[0.02] p-6"
              >
                <h3 className="font-bold text-black">{c.titre}</h3>
                <p className="text-sm md:text-base mt-2 text-black/70">{c.texte}</p>
              </div>
            ))}
          </div>
          <p className="not-prose">
            <Link
              href="/cas-etudes"
              className="font-semibold text-black underline underline-offset-4"
            >
              Voir les cas d&apos;études
            </Link>
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-black not-prose mt-12 mb-4">
            Maillage utile
          </h2>
          <p className="not-prose">
            <Link
              href="/audit-ux-design"
              className="font-semibold text-black underline underline-offset-4"
            >
              Audit UX design
            </Link>
            {" · "}
            <Link
              href="/audit-site-e-commerce"
              className="font-semibold text-black underline underline-offset-4"
            >
              Audit site e-commerce
            </Link>
            {" · "}
            <Link
              href="/refonte-site-e-commerce"
              className="font-semibold text-black underline underline-offset-4"
            >
              Refonte site e-commerce
            </Link>
          </p>
        </div>

        <section className="mt-16 border-t border-black/10 pt-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-black mb-6">FAQ</h2>
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
          <h2 className="font-display text-2xl md:text-4xl font-bold">
            Donnez un coup de pouce à votre conversion
          </h2>
          <p className="text-white/60 mt-4 max-w-lg mx-auto text-sm md:text-base">
            Commencez par un audit gratuit : nous vous proposons la prochaine étape adaptée à
            votre site.
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
            "@graph": [localBusinessSchema, offerCatalogSchema],
          }),
        }}
      />

      <Footer />
    </main>
  );
}
