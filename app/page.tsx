"use client";

import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/app/components/Navbar";

const clientLogos = [
  "Yves Rocher",
  "Cuure",
  "Caalme",
  "Juliette Has A Gun",
  "Riviera Club",
  "Apoticaria",
];

const problems = [
  {
    icon: "↗",
    title: "Vous payez du trafic qui ne convertit pas",
    desc: "Votre site n'est pas optimisé pour convertir. Vos visiteurs repartent les mains vides.",
  },
  {
    icon: "◻",
    title: "Votre design fait fuir avant le panier",
    desc: "Un design daté envoie le mauvais signal. Vos clients doutent avant même d'ajouter au panier.",
  },
  {
    icon: "?",
    title: "Vous modifiez au hasard sans savoir ce qui bloque",
    desc: "Sans audit UX/UI, vous changez des détails au hasard depuis des mois.",
  },
];

const services = [
  {
    number: "01",
    title: "Audit CRO",
    description:
      "On analyse votre e-commerce page par page. Diagnostic clair + plan d'action priorisé.",
    price: "À partir de 500€",
  },
  {
    number: "02",
    title: "Refonte UX/UI Design",
    description:
      "Refonte complète ou partielle de votre boutique. Maquettes Figma optimisées et hand-off dev.",
    price: "À partir de 900€",
  },
  {
    number: "03",
    title: "Optimisation CRO",
    description:
      "Optimisations ciblées sur vos pages à fort impact : homepage, fiches produit, tunnel d'achat.",
    price: "Abonnement 2000€/mois",
  },
];

const steps = [
  {
    number: "01",
    title: "Audit & Diagnostic",
    desc: "On décortique votre site : parcours d'achat, points de friction, comportement utilisateurs.",
  },
  {
    number: "02",
    title: "Stratégie",
    desc: "Quick wins et chantiers à fort impact. Roadmap claire, pensée pour augmenter la conversion.",
  },
  {
    number: "03",
    title: "Design UX/UI",
    desc: "Maquettes Figma, prototypage, design system. Tout prêt pour votre équipe dev.",
  },
  {
    number: "04",
    title: "Mesure & Optimisation",
    desc: "Fichiers clean, composants organisés, documentation incluse. On itère ce qui bloque vraiment.",
  },
];

const testimonials = [
  {
    quote:
      "Sacha a rapidement saisi les enjeux du E-commerce de la marque. Avec son expertise et sa capacité d'analyse, il a su concevoir des parcours optimaux pour nos clients.",
    name: "Fatima",
    role: "Yves Rocher",
  },
  {
    quote:
      "Sacha est un véritable professionnel qui intègre parfaitement les besoins de ses clients et s'adapte à leur rythme. C'est toujours un plaisir de travailler avec LeStudio.",
    name: "Romain",
    role: "Triumvirat",
  },
  {
    quote:
      "Une très bonne expérience sur toute la durée du projet. Sacha et ses équipes ont été à l'écoute, force de proposition et efficaces à chaque étape.",
    name: "Matthieu",
    role: "Cargo School",
  },
  {
    quote:
      "Si vous cherchez un professionnel réactif et compétent, c'est par ici. Sacha prend le temps d'écouter et de comprendre les demandes de sa clientèle.",
    name: "Teddy",
    role: "Arrago",
  },
];

const arguments_ = [
  {
    title: "Design en 7 jours",
    desc: "Une maquette Figma prête à intégrer en une semaine.",
  },
  {
    title: "Pensé pour convertir",
    desc: "Chaque choix de design est justifié par un impact sur le taux de conversion.",
  },
  {
    title: "Hand-off Figma",
    desc: "Maquettes annotées, design system et hand-off dev inclus.",
  },
  {
    title: "Focus design-only",
    desc: "On se concentre sur le design qui fait vendre, sans dispersion.",
  },
  {
    title: "Révisions illimitées",
    desc: "On itère jusqu'à ce que ce soit parfait. Aucun compromis sur la qualité.",
  },
  {
    title: "Sans engagement",
    desc: "Un projet à la fois. Vous testez, mesurez, décidez de la suite.",
  },
];

export default function Home() {
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const singleWidthRef = useRef(0);
  const offsetRef = useRef(0);

  useEffect(() => {
    const measure = () => {
      const el = marqueeInnerRef.current;
      if (!el) return;
      // On rend 2 fois les logos : scrollWidth = 2 x largeur d'une série.
      singleWidthRef.current = el.scrollWidth / 2;
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const speedPxPerMs = 0.03; // ~ 30px/s

    const tick = (t: number) => {
      const dt = t - last;
      last = t;

      const w = singleWidthRef.current;
      if (w > 0) {
        offsetRef.current -= dt * speedPxPerMs;
        if (offsetRef.current <= -w) offsetRef.current += w;
      }

      const el = marqueeInnerRef.current;
      if (el) el.style.transform = `translateX(${offsetRef.current}px)`;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-8 max-w-3xl">
          <div className="flex items-center gap-3 bg-black/5 rounded-full px-4 py-2 text-sm font-medium">
            <span className="font-semibold">4.9/5</span>
            <span className="text-black/40">-</span>
            <span className="text-black/60">+100 clients</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Consultant UX/UI & CRO E-commerce <span className="text-black/30">— LeStudio</span>
          </h1>

          <p className="text-lg md:text-xl text-black/60 max-w-xl leading-relaxed">
            On transforme vos visiteurs en clients. Design Figma livré en 7 jours, optimisé pour convertir, prêt à intégrer.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#audit"
              className="bg-black text-white font-semibold px-7 py-4 rounded-full hover:bg-black/80 transition-colors text-center"
            >
              Obtenir mon audit CRO offert
            </a>
            <a
              href="#realisations"
              className="border border-black/20 font-semibold px-7 py-4 rounded-full hover:bg-black/5 transition-colors text-center"
            >
              Voir les réalisations
            </a>
          </div>
        </div>
      </section>

      {/* Logos clients */}
      <section id="realisations" className="py-10 px-6 border-y border-black/10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              ref={marqueeInnerRef}
              className="flex gap-16 whitespace-nowrap will-change-transform"
              aria-label="Ils nous font confiance"
            >
              {[...clientLogos, ...clientLogos].map((client, i) => (
                <span
                  key={`${client}-${i}`}
                  className="text-sm font-semibold text-black/40 uppercase tracking-widest shrink-0"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">Problèmes</p>
          <h2 className="text-3xl md:text-4xl font-bold max-w-xl">
            Trois freins qui réduisent vos ventes dès le premier mois.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="bg-black/[0.03] rounded-2xl p-8 border border-black/5">
              <div className="text-2xl mb-4">{p.icon}</div>
              <h3 className="font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-black/60 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">Nos services</p>
            <h2 className="text-3xl md:text-4xl font-bold">Ce qu’on fait pour vous.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.number}
                className="bg-white rounded-2xl p-8 border border-black/10 hover:border-black/20 transition-colors"
              >
                <span className="text-black/30 text-sm font-mono">{s.number}</span>
                <h3 className="text-xl font-bold mt-4 mb-3">{s.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6">{s.description}</p>
                <p className="font-bold text-black">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">Méthode</p>
          <h2 className="text-3xl md:text-4xl font-bold">4 étapes pour booster vos ventes.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
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

      {/* Témoignages */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">Témoignages</p>
          <h2 className="text-3xl md:text-4xl font-bold">Ce qu’en disent nos clients.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={`${t.name}-${t.role}`} className="border border-black/10 rounded-2xl p-8 bg-white">
              <p className="text-black/70 leading-relaxed mb-6 text-sm">"{t.quote}"</p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-black/40 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">Pourquoi nous ?</p>
          <h2 className="text-3xl md:text-4xl font-bold max-w-xl">
            Design et CRO : la combinaison qui fait monter la conversion.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {arguments_.map((a) => (
            <div key={a.title} className="bg-white rounded-2xl p-6 border border-black/10">
              <h3 className="font-bold mb-2">{a.title}</h3>
              <p className="text-black/60 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-black text-white rounded-2xl p-8 text-center">
          <p className="text-4xl md:text-6xl font-bold mb-2">+30%</p>
          <p className="text-white/60">conversion moyenne</p>
        </div>
      </section>

      {/* CTA final */}
      <section id="audit" className="py-24 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Réservez votre audit CRO offert</h2>
          <p className="text-white/60 text-lg mb-4">Augmentez votre CA sans augmenter votre budget publicitaire.</p>

          <ul className="text-white/60 text-sm mb-10 space-y-2">
            <li>✓ Résultats visibles avant la fin du premier mois</li>
            <li>✓ Design livré en 7 jours</li>
            <li>✓ Sans engagement</li>
          </ul>

          <a
            href="mailto:contact@lestudiodesign.fr"
            className="bg-white text-black font-bold px-10 py-5 rounded-full hover:bg-white/90 transition-colors inline-block text-lg"
          >
            Obtenir mon audit CRO offert
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <p className="text-xl font-bold mb-3">LeStudio</p>
            <p className="text-white/40 text-sm mb-4">Agence UX/UI & CRO spécialisée e-commerce DTC</p>
            <a
              href="mailto:contact@lestudiodesign.fr"
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              contact@lestudiodesign.fr
            </a>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.linkedin.com/in/sacha-vetzikian/"
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/sachavetzikian/"
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://x.com/Sacha_Vetzikian"
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                X
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-4 text-sm">Liens</p>
            <div className="flex flex-col gap-2 text-white/40 text-sm">
              <a href="#realisations" className="hover:text-white transition-colors">Réalisations</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#audit" className="hover:text-white transition-colors">Audit CRO offert</a>
              <a href="#blog" className="hover:text-white transition-colors">Blog</a>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-4 text-sm">Légal</p>
            <div className="flex flex-col gap-2 text-white/40 text-sm">
              <a href="/cgv" className="hover:text-white transition-colors">CGV</a>
              <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>

        <div id="blog" className="h-px" aria-hidden="true" />

        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-white/30 text-xs">
          © 2026 LeStudio — Tous droits réservés
        </div>
      </footer>
    </main>
  );
}
