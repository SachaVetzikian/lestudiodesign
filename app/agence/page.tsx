import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "LeStudio — Studio UX/UI & CRO E-commerce",
  description:
    "LeStudio, studio UX/UI & CRO e-commerce spécialisé DTC. Découvrez l’approche design-only, data-driven, sans engagement, et le parcours de Sacha Vetzikian.",
};

const SITE_URL = "https://lestudiodesign.fr";

export default function AgencePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/agence#sacha-vetzikian`,
    name: "Sacha Vetzikian",
    url: `${SITE_URL}/agence`,
    jobTitle: "Consultant UX/UI & CRO e-commerce",
    worksFor: {
      "@type": "Organization",
      name: "LeStudio",
      url: SITE_URL,
    },
    knowsAbout: [
      "UX/UI design",
      "CRO",
      "E-commerce",
      "Shopify",
      "Parcours d’achat",
      "A/B testing",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Bootcamp UX (2020)",
    },
  };

  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-10 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
            Studio UX/UI & CRO e-commerce
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            LeStudio — Studio UX/UI & CRO E-commerce
          </h1>
          <p className="text-lg md:text-xl text-black/60 mt-5 leading-relaxed">
            On aide les marques e-commerce DTC à convertir plus, sans augmenter
            mécaniquement leur budget pub. Design orienté conversion, livré
            rapidement, et prêt à intégrer.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border border-black/10 bg-white p-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">
              Fondateur
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">Sacha Vetzikian</h2>
            <p className="text-black/60 text-sm md:text-base mt-3 leading-relaxed">
              11 ans d’expérience, formé via un bootcamp UX en 2020 et spécialisé
              e-commerce DTC. Mon rôle : rendre votre parcours d’achat plus clair,
              plus fluide et plus convaincant — pour augmenter la conversion.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {[
                { k: "11 ans", v: "d’expérience" },
                { k: "2020", v: "bootcamp UX" },
                { k: "DTC", v: "spécialisation" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-black/10 p-4">
                  <div className="text-2xl font-bold">{s.k}</div>
                  <div className="text-xs text-black/50 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-black text-white p-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-3">
              Photo
            </p>
            <div className="rounded-2xl bg-white/10 border border-white/10 aspect-[4/3] flex items-center justify-center">
              <div className="text-white/50 text-sm">
                Placeholder photo (à remplacer)
              </div>
            </div>
            <p className="text-white/60 text-sm mt-4 leading-relaxed">
              Ajoutez une photo de profil ou une photo “studio” pour renforcer la
              confiance sur la page agence.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">
            Valeurs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Une approche simple : design-only, data-driven, sans engagement
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Design-only",
              desc: "On se concentre sur l’UX/UI. Résultat : une exécution plus rapide, plus propre, plus cohérente.",
            },
            {
              title: "Data-driven",
              desc: "Chaque recommandation vise une amélioration mesurable du taux de conversion, pas une préférence esthétique.",
            },
            {
              title: "Sans engagement",
              desc: "Vous testez, vous mesurez, vous décidez. On avance par itérations, sans complexité.",
            },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-8 border border-black/10">
              <h3 className="text-xl font-bold">{v.title}</h3>
              <p className="text-black/60 text-sm md:text-base mt-3 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">
            Chiffres clés
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Des résultats, sur un grand volume de projets
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { k: "100+", v: "clients" },
            { k: "4.9/5", v: "note moyenne" },
            { k: "50+", v: "refontes" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl bg-black text-white p-8 text-center">
              <p className="text-4xl md:text-6xl font-bold mb-2">{s.k}</p>
              <p className="text-white/60">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="rounded-2xl bg-black text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Travailler avec nous</h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Dites-nous où vous perdez des ventes : page produit, tunnel d’achat, offre,
            ou UX globale. On revient avec la meilleure prochaine étape.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/audit-cro"
              className="btn-primary inline-block text-lg"
            >
              Travailler avec nous
            </a>
            <a
              href="/cas-etudes"
              className="btn-secondary inline-block text-lg"
            >
              Voir des cas d’études
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Footer />
    </main>
  );
}

