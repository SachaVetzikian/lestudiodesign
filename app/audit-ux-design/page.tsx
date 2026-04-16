import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { IconArrowRight } from "@/app/components/Icons";

const SITE_URL = "https://www.lestudiodesign.fr";
const CANONICAL = `${SITE_URL}/audit-ux-design`;

export const metadata: Metadata = {
  title: "Audit UX Design | Analyse complète de l'expérience utilisateur",
  description:
    "Audit UX complet de votre site e-commerce. Identifiez les frictions utilisateur et optimisez la conversion. Audit gratuit.",
  alternates: { canonical: CANONICAL },
};

const faqItems = [
  {
    q: "Combien de temps dure un audit UX e-commerce ?",
    a: "La durée dépend du nombre de pages et du périmètre convenu. En général, un audit ciblé peut être livré en quelques jours ouvrés après réception des accès et du contexte ; un audit plus large nécessite davantage d’analyse et de documentation.",
  },
  {
    q: "Quelle est la différence entre audit UX et audit CRO ?",
    a: "L’audit UX se concentre sur la facilité d’usage, la clarté et la cohérence du parcours. Le CRO ajoute une lecture orientée conversion et tests (priorisation business, hypothèses mesurables). Les deux se complètent souvent.",
  },
  {
    q: "Avez-vous besoin d’accès à Google Analytics ?",
    a: "Ce n’est pas obligatoire pour un premier diagnostic heuristique, mais les données (GA4, heatmaps) permettent de prioriser les irritants réels et d’éviter les opinions non vérifiables.",
  },
  {
    q: "Le livrable est-il exploitable par mon équipe dev ?",
    a: "Oui : recommandations priorisées, captures annotées et formulation des changements attendus. L’implémentation reste de votre côté ou de votre intégrateur ; nous pouvons ensuite enchaîner sur une refonte Figma si besoin.",
  },
  {
    q: "Quel est le tarif d’un audit UX chez LeStudio ?",
    a: "Les projets sont chiffrés selon le périmètre. À titre indicatif, l’audit CRO démarre à partir de 500 € HT ; la refonte UX/UI par page à partir de 900 € HT et un site complet à partir de 4 500 € HT. Demandez un devis pour un audit UX sur mesure.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit UX Design e-commerce",
  provider: { "@type": "Organization", name: "LeStudio", url: SITE_URL },
  areaServed: "FR",
  serviceType: "Audit UX pour sites e-commerce",
  url: CANONICAL,
  description:
    "Analyse heuristique, tests utilisateurs, données et benchmarking pour identifier les frictions UX et prioriser les correctifs.",
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

export default function AuditUxDesignPage() {
  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      <article className="pt-28 pb-20 px-6 max-w-3xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
          Audit UX design
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Audit UX Design : Analysez et optimisez l&apos;expérience utilisateur
        </h1>

        <p className="text-lg md:text-xl text-black/60 mt-6 leading-relaxed">
          Parcours confus, page produit illisible, tunnel trop long : un audit UX e-commerce met
          en évidence ce qui fait hésiter vos visiteurs — avec des priorités claires pour votre
          équipe produit et développement.
        </p>

        <div className="mt-8">
          <Link href="/audit-cro" className="btn-primary inline-flex items-center gap-2">
            Obtenir mon audit gratuit
            <IconArrowRight />
          </Link>
        </div>

        <div className="mt-14 space-y-6 text-black/70 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Qu&apos;est-ce qu&apos;un audit UX ?
          </h2>
          <p>
            Un audit UX est une évaluation structurée de l&apos;expérience utilisateur : navigation,
            compréhension de l&apos;offre, lisibilité des interfaces, cohérence des patterns et charge
            cognitive sur mobile comme sur desktop. Sur un site e-commerce, l&apos;enjeu est double :
            faciliter la décision d&apos;achat et réduire les erreurs jusqu&apos;au paiement.
          </p>
          <p>
            Contrairement à une simple revue “graphique”, l&apos;audit UX s&apos;appuie sur des critères
            reconnus (dont les heuristiques de Nielsen), sur l&apos;observation du comportement
            lorsque les données sont disponibles, et sur une lecture critique du parcours
            complet — de l&apos;entrée sur le site à la validation du panier.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black pt-8">
            Les 5 étapes de notre audit UX
          </h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <strong className="text-black">Analyse heuristique (Nielsen)</strong> — Nous passons
              en revue votre interface selon des principes éprouvés : visibilité du statut du
              système, correspondance avec le monde réel, contrôle et liberté de l&apos;utilisateur,
              cohérence, prévention des erreurs, reconnaissance plutôt que mémorisation,
              flexibilité, esthétique minimaliste, aide à la résolution des problèmes.
            </li>
            <li>
              <strong className="text-black">Tests utilisateurs (selon périmètre)</strong> —
              Scénarios d&apos;achat réalistes pour observer où les utilisateurs hésitent, se trompent
              ou abandonnent. Les tests peuvent être légers (tests modérés) ou intégrés à un
              dispositif plus large selon vos ressources.
            </li>
            <li>
              <strong className="text-black">Analyse des données</strong> — Croisement avec GA4,
              entonnoirs, pages de sortie et, si disponible, heatmaps ou enregistrements de session
              pour relier ressenti et comportement réel.
            </li>
            <li>
              <strong className="text-black">Benchmarking</strong> — Comparaison avec des
              références pertinentes (secteur, modèle économique, taille de catalogue) pour
              identifier des patterns qui fonctionnent — sans copier aveuglément la concurrence.
            </li>
            <li>
              <strong className="text-black">Rapport et priorisation</strong> — Synthèse des
              constats, recommandations ordonnées par impact et effort, et pistes de tests pour
              valider les changements les plus sensibles.
            </li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-black pt-8">Ce qu&apos;on améliore</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Architecture de l&apos;information et menus (trouvabilité, filtres, facettes).</li>
            <li>Pages produit : hiérarchie visuelle, preuves, options, réassurance.</li>
            <li>Panier et tunnel : friction, erreurs, clarté des étapes et des coûts.</li>
            <li>Performance perçue et lisibilité sur mobile.</li>
            <li>Alignement des messages avec l&apos;attente créée par vos campagnes.</li>
          </ul>
          <p className="pt-2">
            Pour aller plus loin sur la conversion globale, découvrez notre{" "}
            <Link
              href="/e-commerce"
              className="font-semibold text-black underline underline-offset-4 hover:opacity-70"
            >
              design e-commerce
            </Link>{" "}
            et un{" "}
            <Link
              href="/audit-site-e-commerce"
              className="font-semibold text-black underline underline-offset-4 hover:opacity-70"
            >
              audit site e-commerce
            </Link>{" "}
            couvrant UX et leviers CRO.
          </p>
        </div>

        <section className="mt-16 border-t border-black/10 pt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">FAQ — Audit UX</h2>
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
          <h2 className="text-2xl md:text-4xl font-bold">Prêt à clarifier votre parcours ?</h2>
          <p className="text-white/60 mt-4 max-w-lg mx-auto text-sm md:text-base">
            Démarrez par un échange : nous vous orientons vers l&apos;audit le plus adapté (UX, site
            complet ou CRO).
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
