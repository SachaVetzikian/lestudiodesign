import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import {
  AUTHOR_NAME,
  AUTHOR_TITLE,
  SITE_URL,
  catColor,
  catTint,
  formatDate,
  type BlogCategory,
} from "../_shared";
import { ShareButtons } from "../[slug]/ShareButtons";

export const metadata: Metadata = {
  title: "Audit CRO E-commerce : le guide complet 2026 | LeStudio",
  description:
    "Guide complet 2026 pour réussir un audit CRO e-commerce : définition, pourquoi c’est essentiel, 5 étapes, outils (Hotjar, GA4, Microsoft Clarity), erreurs, choix du prestataire et tarifs.",
};

const article = {
  slug: "audit-cro-ecommerce-guide-complet",
  title: "Audit CRO E-commerce : le guide complet 2026",
  category: "CRO" as const satisfies BlogCategory,
  dateISO: "2026-02-12",
  readingTimeMin: 9,
  author: AUTHOR_NAME,
};

const toc = [
  { id: "definition", title: "Qu’est-ce qu’un audit CRO e-commerce ?" },
  { id: "pourquoi", title: "Pourquoi un audit CRO est essentiel en 2026" },
  { id: "etapes", title: "Les 5 étapes d’un bon audit CRO e-commerce" },
  { id: "outils", title: "Outils recommandés : Hotjar, GA4, Microsoft Clarity" },
  { id: "erreurs", title: "Erreurs courantes qui ruinent la conversion" },
  { id: "prestataire", title: "Comment choisir son prestataire" },
  { id: "tarifs", title: "Tarifs moyens du marché" },
  { id: "checklist", title: "Checklist & plan d’action" },
];

export default function AuditCroGuideCompletPage() {
  const canonicalUrl = `${SITE_URL}/blog/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description:
      "Guide complet 2026 pour réussir un audit CRO e-commerce : définition, 5 étapes, outils, erreurs, choix du prestataire et tarifs.",
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      jobTitle: AUTHOR_TITLE,
      url: `${SITE_URL}/agence`,
    },
    publisher: {
      "@type": "Organization",
      name: "LeStudio",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    url: canonicalUrl,
    articleSection: article.category,
    keywords: [
      "audit CRO e-commerce",
      "taux de conversion",
      "optimisation conversion",
      "UX e-commerce",
      "Shopify",
    ],
  };

  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center">
                    <span className="text-black/30 font-bold">SV</span>
                  </div>
                  <div>
                    <div className="font-bold">{AUTHOR_NAME}</div>
                    <div className="text-xs text-black/50">{AUTHOR_TITLE}</div>
                  </div>
                </div>

                <div className="mt-5 text-sm text-black/60 space-y-1">
                  <div>
                    <span className="font-semibold text-black/70">Lecture</span> :{" "}
                    {article.readingTimeMin} min
                  </div>
                  <div>
                    <span className="font-semibold text-black/70">Date</span> :{" "}
                    {formatDate(article.dateISO)}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-black/10 bg-white p-6">
                <div className="text-sm font-bold mb-3">Table des matières</div>
                <nav className="flex flex-col gap-2">
                  {toc.map((t) => (
                    <a
                      key={t.id}
                      href={`#${t.id}`}
                      className="text-sm text-black/60 hover:text-black transition-colors"
                    >
                      {t.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="mt-4 rounded-2xl border border-black/10 bg-white p-6">
                <div className="text-sm font-bold mb-3">Partager</div>
                <ShareButtons url={canonicalUrl} title={article.title} />
              </div>
            </div>
          </aside>

          {/* Main */}
          <article>
            <div className="text-sm text-black/40">
              <Link href="/" className="hover:text-black transition-colors">
                Accueil
              </Link>{" "}
              <span className="text-black/20">›</span>{" "}
              <Link href="/blog" className="hover:text-black transition-colors">
                Blog
              </Link>{" "}
              <span className="text-black/20">›</span>{" "}
              <span className="text-black/60">{article.title}</span>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full ${catColor(
                  article.category
                )} px-3 py-1 text-white text-xs font-semibold uppercase tracking-widest`}
              >
                {article.category}
              </span>
              <span className="text-xs text-black/40">{formatDate(article.dateISO)}</span>
              <span className="text-black/20">•</span>
              <span className="text-xs text-black/40">{article.readingTimeMin} min</span>
            </div>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              {article.title}
            </h1>

            <div className="mt-7 rounded-2xl overflow-hidden border border-black/10">
              <div
                className={`aspect-video ${catTint(article.category)} flex items-end p-6`}
              >
                <div className="rounded-full bg-white/70 border border-black/10 px-4 py-2 text-black/70 text-xs font-semibold uppercase tracking-widest">
                  Image hero placeholder
                </div>
              </div>
            </div>

            <div className="mt-8 text-black/70 leading-relaxed">
              <p>
                Un <strong>audit CRO e-commerce</strong> (Conversion Rate Optimization) est la
                méthode la plus rapide pour comprendre pourquoi votre boutique ne
                transforme pas ses visiteurs en acheteurs. Quand les coûts d’acquisition
                augmentent, l’<strong>optimisation conversion</strong> devient un levier
                structurel : vous améliorez votre <strong>taux de conversion</strong> sans
                dépendre uniquement du volume de trafic.
              </p>
              <p className="mt-4">
                Dans ce guide 2026, on va au-delà des checklists génériques. Vous
                trouverez une méthode complète, des exemples concrets, les outils à
                utiliser (Hotjar, GA4, Microsoft Clarity), les erreurs fréquentes, et
                comment choisir le bon prestataire. Le tout en gardant une priorité :
                réduire la friction et augmenter la confiance sur votre <strong>UX e-commerce</strong>.
              </p>

              <h2
                id="definition"
                className="scroll-mt-28 text-2xl md:text-3xl font-bold mt-10 text-black"
              >
                Qu’est-ce qu’un audit CRO e-commerce ?
              </h2>
              <p className="mt-4">
                Un audit CRO e-commerce est une analyse structurée des pages et du
                parcours d’achat pour identifier les causes racines d’un faible taux de
                conversion. Il combine généralement :
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2">
                <li>
                  une lecture stratégique de l’offre (proposition de valeur, prix, bénéfices,
                  objections),
                </li>
                <li>
                  une analyse UX e-commerce (navigation, hiérarchie, micro-copies, cohérence),
                </li>
                <li>
                  une analyse data (GA4, funnels, segments, device, sources),
                </li>
                <li>
                  une analyse comportementale (heatmaps, sessions, scroll, rage clicks),
                </li>
                <li>
                  une priorisation des actions (impact x effort) pour débloquer rapidement des gains.
                </li>
              </ul>
              <p className="mt-4">
                Un bon audit ne se limite pas à dire “c’est moche” ou “mettez un CTA plus gros”.
                Il répond à une question précise : <em>qu’est-ce qui empêche la décision d’achat</em>,
                et <em>où perdez-vous des ventes</em> dans le tunnel ?
              </p>

              <h2
                id="pourquoi"
                className="scroll-mt-28 text-2xl md:text-3xl font-bold mt-10 text-black"
              >
                Pourquoi un audit CRO est essentiel en 2026
              </h2>
              <p className="mt-4">
                En 2026, la performance e-commerce est plus difficile qu’il y a quelques années :
                CPM en hausse, concurrence forte, et consommateurs plus exigeants. Résultat :
                améliorer le taux de conversion est souvent plus rentable que “pousser plus de budget”.
              </p>
              <p className="mt-4">
                Voici les raisons principales pour lesquelles l’audit CRO e-commerce est devenu
                indispensable :
              </p>
              <ol className="mt-4 list-decimal pl-5 space-y-2">
                <li>
                  <strong>Le trafic coûte plus cher</strong> : une hausse de conversion amortit vos
                  coûts d’acquisition.
                </li>
                <li>
                  <strong>Les attentes UX</strong> augmentent : vitesse, lisibilité, confiance,
                  clarté, transparence.
                </li>
                <li>
                  <strong>Les quick wins existent</strong> : de petites frictions peuvent coûter
                  des points de conversion.
                </li>
                <li>
                  <strong>Le funnel est multi-device</strong> : l’expérience mobile n’est plus
                  un “bonus”, c’est la base.
                </li>
              </ol>
              <p className="mt-4">
                L’objectif d’une optimisation conversion n’est pas de “faire joli” mais de rendre
                la décision d’achat évidente : bonne information, au bon moment, avec les bons signaux.
              </p>

              <h2
                id="etapes"
                className="scroll-mt-28 text-2xl md:text-3xl font-bold mt-10 text-black"
              >
                Les 5 étapes d’un bon audit CRO e-commerce
              </h2>
              <p className="mt-4">
                Une méthode solide évite les recommandations au hasard. Voici un process en 5 étapes
                applicable à la plupart des boutiques (Shopify, headless, etc.).
              </p>

              <h3 className="text-xl font-bold mt-6 text-black">1) Cadrage : objectifs, offres, segments</h3>
              <p className="mt-3">
                Avant d’ouvrir GA4, il faut cadrer : quel produit est stratégique, quel panier moyen,
                quels segments (nouveaux vs récurrents), quelles sources (paid, SEO, email) ?
              </p>
              <p className="mt-3">
                Un audit CRO e-commerce pertinent s’aligne sur un objectif (conversion, AOV, LTV)
                et sur la réalité business (marges, contraintes logistiques, délais).
              </p>

              <h3 className="text-xl font-bold mt-6 text-black">2) Analyse data : où se situe la chute</h3>
              <p className="mt-3">
                Ici, on cherche les points de rupture du parcours. Funnel d’achat, pages d’entrée,
                performance par device, et comparaison par canal. Ce n’est pas une “lecture de dashboards” :
                c’est une enquête pour identifier la zone qui bloque.
              </p>
              <div className="mt-6 overflow-x-auto rounded-2xl border border-black/10">
                <table className="w-full text-sm">
                  <thead className="bg-black/[0.03]">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">Étape</th>
                      <th className="text-left px-4 py-3 font-semibold">KPI</th>
                      <th className="text-left px-4 py-3 font-semibold">Lecture CRO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["PDP", "Add-to-cart", "Clarté offre + preuves + objections"],
                      ["Cart", "Checkout start", "Frais, livraison, réassurance"],
                      ["Checkout", "Purchase", "Paiement, friction, erreurs formulaire"],
                    ].map((row) => (
                      <tr key={row[0]} className="border-t border-black/10">
                        <td className="px-4 py-3 font-semibold text-black">{row[0]}</td>
                        <td className="px-4 py-3">{row[1]}</td>
                        <td className="px-4 py-3">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mt-6 text-black">3) Analyse UX e-commerce : friction & confiance</h3>
              <p className="mt-3">
                La conversion est une question de compréhension et de confiance. L’UX e-commerce
                doit répondre aux questions implicites : “Est-ce pour moi ?”, “Est-ce fiable ?”,
                “Est-ce simple ?”, “Combien ça coûte au total ?”.
              </p>
              <p className="mt-3">
                On inspecte la hiérarchie (titres, bénéfices, CTA), les micro-copies (livraison,
                retours, garantie), les preuves (avis, UGC, presse), et les signaux de sécurité.
              </p>

              <h3 className="text-xl font-bold mt-6 text-black">4) Analyse comportementale : voir ce que les gens font</h3>
              <p className="mt-3">
                Les heatmaps, scroll maps et replays montrent là où l’intention se casse. Par exemple :
                les gens scrollent pour chercher “livraison”, ils hésitent sur les tailles, ils cliquent
                sur des éléments non cliquables (frustration), ou ils quittent après un pop-up.
              </p>
              <p className="mt-3">
                L’objectif : relier ce comportement à une hypothèse d’optimisation conversion (ex :
                “les frais apparaissent trop tard → abandon panier”).
              </p>

              <h3 className="text-xl font-bold mt-6 text-black">5) Priorisation : impact x effort + plan d’action</h3>
              <p className="mt-3">
                C’est la partie la plus importante : un audit CRO e-commerce doit produire une
                roadmap réaliste. Priorisez les quick wins (fort impact, faible effort) avant les
                refontes lourdes. Sinon, votre équipe n’exécute rien.
              </p>
              <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6">
                <p className="font-semibold text-black">Exemple de quick wins</p>
                <ul className="mt-3 list-disc pl-5 space-y-2">
                  <li>Clarifier les frais et délais de livraison dès la PDP.</li>
                  <li>Ajouter une preuve sociale au-dessus de la ligne de flottaison.</li>
                  <li>Réduire la longueur du checkout sur mobile.</li>
                </ul>
              </div>

              <h2
                id="outils"
                className="scroll-mt-28 text-2xl md:text-3xl font-bold mt-10 text-black"
              >
                Outils recommandés : Hotjar, GA4, Microsoft Clarity
              </h2>
              <p className="mt-4">
                Les outils ne remplacent pas la réflexion, mais ils accélèrent la collecte de preuves.
                Voici un trio simple et efficace :
              </p>

              <h3 className="text-xl font-bold mt-6 text-black">Hotjar</h3>
              <p className="mt-3">
                Heatmaps, recordings, et feedback widgets. Parfait pour repérer où les utilisateurs
                hésitent, ce qu’ils cherchent, et ce qui les frustre.
              </p>

              <h3 className="text-xl font-bold mt-6 text-black">GA4</h3>
              <p className="mt-3">
                Indispensable pour comprendre les volumes, les segments et les sources. Travaillez
                votre funnel, vos événements clés et vos audiences pour une lecture CRO fiable.
              </p>

              <h3 className="text-xl font-bold mt-6 text-black">Microsoft Clarity</h3>
              <p className="mt-3">
                Une alternative/fonction complémentaire aux recordings, avec des signaux utiles
                comme les rage clicks et dead clicks. Très pratique en audit CRO e-commerce.
              </p>

              <h2
                id="erreurs"
                className="scroll-mt-28 text-2xl md:text-3xl font-bold mt-10 text-black"
              >
                Erreurs courantes qui ruinent la conversion
              </h2>
              <p className="mt-4">
                Les mêmes erreurs reviennent sur la majorité des sites. Les corriger augmente
                souvent rapidement le taux de conversion.
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2">
                <li>
                  <strong>Proposition de valeur floue</strong> : on ne comprend pas “pourquoi vous”.
                </li>
                <li>
                  <strong>Preuves insuffisantes</strong> : peu d’avis, pas de réassurance, pas de retours clairs.
                </li>
                <li>
                  <strong>Frais cachés</strong> : livraison/retours affichés trop tard → abandon panier.
                </li>
                <li>
                  <strong>Mobile négligé</strong> : éléments trop petits, scroll trop long, CTA pas visible.
                </li>
                <li>
                  <strong>Optimisation “au feeling”</strong> : on change des détails sans mesure.
                </li>
              </ul>

              <h2
                id="prestataire"
                className="scroll-mt-28 text-2xl md:text-3xl font-bold mt-10 text-black"
              >
                Comment choisir son prestataire
              </h2>
              <p className="mt-4">
                Un bon prestataire CRO/UX ne vend pas une “recette”. Il propose un cadre, pose les
                bonnes questions, et vous aide à exécuter. Voici des critères simples :
              </p>
              <ol className="mt-4 list-decimal pl-5 space-y-2">
                <li>
                  <strong>Process clair</strong> : collecte, analyse, priorisation, restitution.
                </li>
                <li>
                  <strong>Orientation exécution</strong> : livrables actionnables, pas un PDF “inspirant”.
                </li>
                <li>
                  <strong>Compréhension e-commerce DTC</strong> : objection handling, PDP, tunnel, réassurance.
                </li>
                <li>
                  <strong>Capacité à mesurer</strong> : GA4, dashboards, hypothèses testables.
                </li>
              </ol>

              <h2
                id="tarifs"
                className="scroll-mt-28 text-2xl md:text-3xl font-bold mt-10 text-black"
              >
                Tarifs moyens du marché
              </h2>
              <p className="mt-4">
                Le prix d’un audit CRO e-commerce dépend du périmètre (nombre de pages, profondeur,
                données disponibles). En moyenne :
              </p>
              <div className="mt-6 overflow-x-auto rounded-2xl border border-black/10">
                <table className="w-full text-sm">
                  <thead className="bg-black/[0.03]">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">Type d’audit</th>
                      <th className="text-left px-4 py-3 font-semibold">Prix</th>
                      <th className="text-left px-4 py-3 font-semibold">Pour qui</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Audit “essentiel”", "500€ – 1 500€", "Pages clés + quick wins"],
                      ["Audit complet", "1 500€ – 5 000€", "Parcours complet + recommandations détaillées"],
                      ["Accompagnement mensuel", "2 000€+ / mois", "Optimisation conversion continue"],
                    ].map((row) => (
                      <tr key={row[0]} className="border-t border-black/10">
                        <td className="px-4 py-3 font-semibold text-black">{row[0]}</td>
                        <td className="px-4 py-3">{row[1]}</td>
                        <td className="px-4 py-3">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Le bon prix est celui qui produit une roadmap exécutée. Un audit trop “cheap” finit
                souvent par un document inutilisé. Un audit trop lourd ralentit l’action. Cherchez
                l’équilibre : impact, clarté, priorisation.
              </p>

              <h2
                id="checklist"
                className="scroll-mt-28 text-2xl md:text-3xl font-bold mt-10 text-black"
              >
                Checklist & plan d’action
              </h2>
              <p className="mt-4">
                Pour terminer, voici une checklist simple pour lancer votre audit CRO e-commerce :
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2">
                <li>Définir un objectif (conversion, AOV, rétention) et une période d’analyse.</li>
                <li>Identifier 3 pages à fort impact (PDP, cart, checkout / landing).</li>
                <li>Collecter 10 sessions (mobile + desktop) et 2 heatmaps.</li>
                <li>Analyser GA4 : funnels, device, sources, pages d’entrée.</li>
                <li>Rédiger 10 hypothèses et prioriser (impact x effort).</li>
              </ul>
              <p className="mt-4">
                Ensuite, exécutez : un quick win par semaine vaut mieux qu’une “grande refonte”
                jamais livrée. L’optimisation conversion est un système, pas un événement.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-black/10 bg-black/[0.02] p-7">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">Besoin d&apos;un audit CRO ?</h2>
                  <p className="text-black/60 mt-2 leading-relaxed">
                    Obtenez un diagnostic clair et des recommandations prioritaires pour augmenter
                    votre taux de conversion.
                  </p>
                </div>
                <Link
                  href="/audit-cro"
                  className="inline-flex bg-black text-white font-semibold px-7 py-4 rounded-full hover:bg-black/80 transition-colors justify-center"
                >
                  Obtenir mon audit gratuit
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Bas de page */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ces articles pourraient vous intéresser
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              slug: "ameliorer-taux-conversion-shopify",
              title: "Comment améliorer son taux de conversion Shopify",
              category: "Shopify" as const satisfies BlogCategory,
              dateISO: "2026-01-23",
              readingTimeMin: 7,
              excerpt:
                "Messages, preuve sociale, vitesse, CTA et pages clés : les leviers CRO Shopify à fort ROI.",
            },
            {
              slug: "ux-ecommerce-10-erreurs",
              title: "UX e-commerce : les 10 erreurs qui tuent vos ventes",
              category: "UX Design" as const satisfies BlogCategory,
              dateISO: "2026-01-08",
              readingTimeMin: 6,
              excerpt:
                "Navigation, PDP, checkout : les frictions UX qui font chuter la conversion (et comment les corriger).",
            },
            {
              slug: "fiche-produit-best-practices-cro",
              title: "Fiche produit e-commerce : les best practices CRO",
              category: "CRO" as const satisfies BlogCategory,
              dateISO: "2025-11-27",
              readingTimeMin: 8,
              excerpt:
                "Proposition de valeur, preuves, objections : structurez une PDP e-commerce qui convertit mieux.",
            },
          ].map((p) => (
            <article
              key={p.slug}
              className="bg-white rounded-2xl border border-black/10 hover:border-black/20 transition-colors overflow-hidden"
            >
              <div className={`h-28 ${catTint(p.category)} border-b border-black/10`} />
              <div className="p-7">
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`rounded-full ${catColor(
                      p.category
                    )} px-3 py-1 text-white text-xs font-semibold uppercase tracking-widest`}
                  >
                    {p.category}
                  </span>
                  <span className="text-xs text-black/40">{p.readingTimeMin} min</span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug">{p.title}</h3>
                <p className="text-black/60 text-sm mt-3 leading-relaxed">{p.excerpt}</p>
                <Link
                  href={`/blog/${p.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black hover:opacity-70 transition-opacity"
                >
                  Lire l&apos;article <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-black text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Prêt à booster votre conversion ?
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Un audit CRO e-commerce pour identifier ce qui bloque vos ventes et prioriser les actions
            à fort impact.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/audit-cro"
              className="bg-white text-black font-bold px-10 py-5 rounded-full hover:bg-white/90 transition-colors inline-block text-lg"
            >
              Obtenir mon audit gratuit
            </Link>
            <Link
              href="/services/audit-cro"
              className="border border-white/20 text-white font-semibold px-10 py-5 rounded-full hover:bg-white/5 transition-colors inline-block text-lg"
            >
              Voir l&apos;offre Audit CRO
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}

