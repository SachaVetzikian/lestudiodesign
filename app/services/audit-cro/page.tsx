import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Audit CRO e-commerce — Identifiez ce qui bloque | LeStudio",
  description:
    "Audit CRO e-commerce page par page pour identifier ce qui bloque la conversion. Diagnostic clair, priorisation et recommandations actionnables.",
};

const CONTACT_EMAIL = "contact@lestudiodesign.fr";

export default function AuditCroPage() {
  const faq = [
    {
      q: "Qu’est-ce qu’un audit CRO e-commerce ?",
      a: "C’est une analyse structurée de votre parcours (navigation, pages produit, tunnel d’achat) pour identifier précisément ce qui empêche vos visiteurs de convertir. On priorise ensuite les actions à fort impact.",
    },
    {
      q: "Que vais-je recevoir à la fin de l’audit ?",
      a: "Un diagnostic clair page par page, une liste de frictions et opportunités, une priorisation (quick wins et chantiers), ainsi que des recommandations concrètes pour améliorer le taux de conversion.",
    },
    {
      q: "Combien de temps faut-il pour réaliser l’audit ?",
      a: "En général, l’audit CRO e-commerce est livré rapidement après la collecte des éléments (site, objectifs, contexte). Le délai exact dépend du périmètre de pages inclus.",
    },
    {
      q: "Quel est le prix de l’audit ?",
      a: "Les tarifs commencent à partir de 500€. Le coût final dépend du nombre de pages analysées et du niveau de détail attendu dans les recommandations.",
    },
    {
      q: "Est-ce adapté aux marques DTC ?",
      a: "Oui. L’audit CRO e-commerce est conçu pour les marques DTC qui veulent convertir plus sans augmenter mécaniquement leur budget pub.",
    },
    {
      q: "Comment obtenir mon audit offert ?",
      a: "Cliquez sur le CTA “Obtenir mon audit offert”. Vous recevrez les prochaines étapes par email (contact@lestudiodesign.fr).",
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

  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
            Audit CRO e-commerce
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Audit CRO E-commerce — Identifiez ce qui bloque vos ventes
          </h1>

          <p className="text-lg md:text-xl text-black/60 mt-5 leading-relaxed">
            Quand vos visiteurs n’avancent plus, ce n’est presque jamais “juste du
            design”. L’audit CRO e-commerce LeStudio met en lumière les frictions
            et opportunités qui bloquent la conversion : pages produit, tunnel
            d’achat, messages clés et parcours complet.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <a
              href="#cta"
              className="bg-black text-white font-semibold px-7 py-4 rounded-full hover:bg-black/80 transition-colors text-center"
            >
              Obtenir mon audit offert
            </a>
            <a
              href="#faq"
              className="border border-black/20 font-semibold px-7 py-4 rounded-full hover:bg-black/5 transition-colors text-center"
            >
              Voir la FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border border-black/10 bg-white p-7">
            <h2 className="text-2xl md:text-3xl font-bold">Ce que nous analysons</h2>
            <p className="text-black/60 text-sm md:text-base mt-3 leading-relaxed">
              Nous passons au crible les points de rupture entre intérêt et achat :
              compréhension de l’offre, clarté des pages clés, signaux de confiance,
              friction du tunnel, et formulation des appels à l’action.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "Pages produit",
                "Cart / checkout",
                "Messages & proposition de valeur",
                "Cohérence design ↔ objectifs",
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
            <h2 className="text-2xl md:text-3xl font-bold">Livrables de l’audit</h2>
            <ul className="mt-4 space-y-3 text-white/70 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="font-bold text-white">✓</span>
                Diagnostic clair page par page
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white">✓</span>
                Liste des frictions et opportunités
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white">✓</span>
                Priorisation quick wins / chantiers
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white">✓</span>
                Recommandations actionnables pour la conversion
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
          <h2 className="text-3xl md:text-4xl font-bold">4 étapes pour débloquer vos ventes</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "01",
              title: "Audit & Diagnostic",
              desc: "Analyse de l’offre, des pages clés et des ruptures dans le parcours d’achat.",
            },
            {
              number: "02",
              title: "Priorisation",
              desc: "On identifie ce qui a le plus grand impact sur la conversion : quick wins et chantiers.",
            },
            {
              number: "03",
              title: "Recommandations",
              desc: "Des recommandations concrètes, orientées conversion, prêtes à être appliquées.",
            },
            {
              number: "04",
              title: "Plan d’actions",
              desc: "Un plan clair pour améliorer ce qui bloque vos ventes, sans dispersion.",
            },
          ].map((s) => (
            <div key={s.number} className="border-t-2 border-black pt-6">
              <span className="text-4xl font-bold text-black/10">{s.number}</span>
              <h3 className="font-bold mt-4 mb-2">{s.title}</h3>
              <p className="text-black/60 text-sm leading-relaxed">{s.desc}</p>
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
            Un audit CRO e-commerce, à partir de 500€
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-black/10">
            <div className="text-black/30 text-sm font-mono">01</div>
            <h3 className="text-xl font-bold mt-4 mb-3">Audit CRO e-commerce</h3>
            <p className="text-black/60 text-sm leading-relaxed">
              Diagnostic précis des pages clés et priorisation immédiate des actions à fort impact.
            </p>
            <p className="font-bold text-black mt-6">À partir de 500€</p>
          </div>

          <div className="bg-black text-white rounded-2xl p-8 border border-black/10">
            <div className="text-white/30 text-sm font-mono">02</div>
            <h3 className="text-xl font-bold mt-4 mb-3">
              Audit CRO e-commerce + recommandations détaillées
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Recommandations plus détaillées pour accélérer l’exécution côté design/dev.
            </p>
            <p className="font-bold text-white mt-6">À partir de 900€</p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-black/10">
            <div className="text-black/30 text-sm font-mono">03</div>
            <h3 className="text-xl font-bold mt-4 mb-3">
              Audit CRO e-commerce — scope complet
            </h3>
            <p className="text-black/60 text-sm leading-relaxed">
              Périmètre élargi pour couvrir davantage de parcours, tunnels et pages à conversion.
            </p>
            <p className="font-bold text-black mt-6">Sur devis</p>
          </div>
        </div>

        <div className="mt-7 text-black/60 text-sm">
          Prix indicatifs : le tarif final dépend du nombre de pages analysées et du niveau de détail attendu.
        </div>
      </section>

      <section id="faq" className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Questions fréquentes sur l’audit CRO e-commerce
          </h2>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-7">
          <div className="space-y-6">
            {faq.map((item) => (
              <div key={item.q} className="pt-2">
                <h3 className="font-bold text-lg">{item.q}</h3>
                <p className="text-black/60 text-sm md:text-base mt-2 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          // JSON-LD pour la FAQ (SEO).
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      <section id="cta" className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="rounded-2xl bg-black text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Obtenir mon audit offert
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Répondez à 3 questions et recevez les prochaines étapes. Un audit CRO
            e-commerce pour identifier ce qui bloque la conversion, sans détour.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                "Audit CRO e-commerce — demande"
              )}&body=${encodeURIComponent(
                "Bonjour,\n\nJe souhaite obtenir mon audit CRO e-commerce offert.\n\nLien de mon site : \nObjectif principal : \nPages à analyser : \n\nMerci."
              )}`}
              className="bg-white text-black font-bold px-10 py-5 rounded-full hover:bg-white/90 transition-colors inline-block text-lg"
            >
              Obtenir mon audit offert
            </a>
            <a
              href="/#realisations"
              className="border border-white/20 text-white font-semibold px-10 py-5 rounded-full hover:bg-white/5 transition-colors inline-block text-lg"
            >
              Voir des réalisations
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

