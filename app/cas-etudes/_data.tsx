import type { ReactNode } from "react";

export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  year: string;
  projectTitle: string;
  context: ReactNode;
  problem: ReactNode;
  solution: ReactNode;
  results: ReactNode;
  deliverables: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "cuure",
    client: "Cuure",
    category: "Compléments alimentaires personnalisés",
    year: "2026",
    projectTitle: "Refonte du parcours d’achat",
    context: (
      <>
        <p>
          Cuure vend des compléments alimentaires personnalisés. La croissance reposait sur
          l’acquisition, mais la conversion stagnait sur mobile : trop de friction entre la
          découverte, l’ajout au panier et la finalisation.
        </p>
        <p className="mt-4">
          Objectif : simplifier le parcours, clarifier les choix et améliorer la compréhension
          des bénéfices — sans dégrader la perception “premium”.
        </p>
      </>
    ),
    problem: (
      <>
        <p>
          Le tunnel d’achat était confus : étapes mal hiérarchisées, informations clés
          (livraison, réassurance, variantes) trop tardives, et un checkout perçu comme
          “long”.
        </p>
        <ul className="mt-4 list-disc pl-5 space-y-2">
          <li>Ajout au panier peu lisible sur mobile</li>
          <li>Manque de réassurance au bon moment</li>
          <li>Checkout chargé (trop d’inputs visibles d’un coup)</li>
        </ul>
      </>
    ),
    solution: (
      <>
        <p>
          Redesign complet du flow d’ajout au panier et du checkout : hiérarchie,
          micro-copies, réassurance, et réduction de la friction.
        </p>
        <ul className="mt-4 list-disc pl-5 space-y-2">
          <li>CTA et informations clés plus tôt (livraison/retours/garantie)</li>
          <li>Étapes du checkout clarifiées et simplifiées</li>
          <li>Design system cohérent pour accélérer l’implémentation</li>
        </ul>
      </>
    ),
    results: (
      <>
        <p>
          Amélioration UX mesurable (réduction des frictions et meilleure progression dans le
          funnel). Les métriques exactes dépendent du trafic et des segments, mais les quick
          wins ont été priorisés pour des gains rapides.
        </p>
      </>
    ),
    deliverables: ["Maquettes Figma", "Design system", "Hand-off dev"],
  },
  {
    slug: "caalme",
    client: "Caalme",
    category: "Patchs bien-être CBD",
    year: "2026",
    projectTitle: "Refonte UX/UI complète",
    context: (
      <>
        <p>
          Caalme vend des patchs bien-être au CBD. La marque avait besoin d’une refonte UX/UI
          e-commerce pour mieux expliquer l’offre, renforcer la confiance et améliorer la
          lisibilité mobile.
        </p>
      </>
    ),
    problem: (
      <>
        <p>
          Le site manquait de hiérarchie et de preuves au bon endroit : informations produit
          dispersées, objections peu traitées, et navigation perfectible.
        </p>
      </>
    ),
    solution: (
      <>
        <p>
          Refonte UX/UI complète : pages clés repensées, clarification de la proposition de
          valeur, et design system réutilisable.
        </p>
      </>
    ),
    results: (
      <>
        <p>
          Une expérience plus cohérente, plus lisible et plus “confiance” pour soutenir la
          conversion, notamment sur mobile.
        </p>
      </>
    ),
    deliverables: ["Maquettes Figma", "Design system", "Hand-off dev"],
  },
  {
    slug: "juliette-has-a-gun",
    client: "Juliette Has A Gun",
    category: "Parfumerie de niche luxe",
    year: "2025",
    projectTitle: "Refonte UX/UI e-commerce",
    context: (
      <>
        <p>
          Marque de parfumerie de niche avec un positionnement premium. L’enjeu : améliorer
          l’UX e-commerce tout en conservant l’identité de marque.
        </p>
      </>
    ),
    problem: (
      <>
        <p>
          Frictions sur la découverte produit et la conversion : manque de clarté sur les
          bénéfices, les notes, et la réassurance au moment d’ajouter au panier.
        </p>
      </>
    ),
    solution: (
      <>
        <p>
          Refonte des pages clés (PDP + pages d’atterrissage) avec une hiérarchie premium,
          meilleure scannabilité et éléments de confiance renforcés.
        </p>
      </>
    ),
    results: (
      <>
        <p>
          Parcours plus fluide et meilleure lisibilité, facilitant la décision d’achat sur
          des produits à forte implication.
        </p>
      </>
    ),
    deliverables: ["Maquettes Figma", "Design system", "Hand-off dev"],
  },
  {
    slug: "apoticaria",
    client: "Apoticaria",
    category: "Compléments alimentaires",
    year: "2025",
    projectTitle: "Refonte page produit",
    context: (
      <>
        <p>
          Apoticaria souhaitait améliorer la performance de la page produit, principale source
          de conversion, en clarifiant l’offre et en renforçant les preuves.
        </p>
      </>
    ),
    problem: (
      <>
        <p>
          Page produit trop dense et peu orientée décision : bénéfices peu structurés,
          objections non traitées, réassurance tardive.
        </p>
      </>
    ),
    solution: (
      <>
        <p>
          Refonte de la PDP : hiérarchie orientée conversion, blocs preuves/FAQ/objections, et
          CTA mieux placés.
        </p>
      </>
    ),
    results: (
      <>
        <p>
          Une PDP plus claire et plus persuasive, facilitant l’ajout au panier et la
          progression vers le checkout.
        </p>
      </>
    ),
    deliverables: ["Maquettes Figma", "Design system", "Hand-off dev"],
  },
  {
    slug: "riviera-club",
    client: "Riviera Club",
    category: "Accessoires luxe",
    year: "2025",
    projectTitle: "Création site e-commerce",
    context: (
      <>
        <p>
          Marque d’accessoires luxe : création d’un site e-commerce “brand-first” mais orienté
          conversion, avec une base UI scalable.
        </p>
      </>
    ),
    problem: (
      <>
        <p>
          Besoin de partir d’une base propre : architecture, UI premium, confiance, et parcours
          d’achat fluide dès la V1.
        </p>
      </>
    ),
    solution: (
      <>
        <p>
          Conception des pages clés, design system, et hand-off dev : un site cohérent, premium
          et prêt à itérer sur les performances.
        </p>
      </>
    ),
    results: (
      <>
        <p>
          Une base e-commerce solide pour lancer la marque : expérience premium,
          conversion-friendly, et composants réutilisables.
        </p>
      </>
    ),
    deliverables: ["Maquettes Figma", "Design system", "Hand-off dev"],
  },
  {
    slug: "yves-rocher",
    client: "Yves Rocher",
    category: "Cosmétiques",
    year: "2023",
    projectTitle: "Refonte UX multi-marchés",
    context: (
      <>
        <p>
          Contexte multi-marchés avec des contraintes de contenus, catégories et tunnels
          différents. L’objectif : une UX e-commerce plus cohérente et plus performante.
        </p>
      </>
    ),
    problem: (
      <>
        <p>
          Incohérences UX/UI entre marchés, friction dans la navigation et la compréhension de
          l’offre, et opportunités de conversion sous-exploitées.
        </p>
      </>
    ),
    solution: (
      <>
        <p>
          Refonte UX structurée : hiérarchie, composants partagés, et alignement des pages clés
          pour un meilleur pilotage multi-marchés.
        </p>
      </>
    ),
    results: (
      <>
        <p>
          Expérience plus cohérente et standardisée, facilitant l’optimisation conversion et les
          itérations à l’échelle.
        </p>
      </>
    ),
    deliverables: ["Maquettes Figma", "Design system", "Hand-off dev"],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug) ?? null;
}

