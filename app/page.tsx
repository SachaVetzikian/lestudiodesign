"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import {
  ArrowRight,
  ChartLine,
  Check,
  FigmaLogo,
  MagnifyingGlass,
  Question,
  ShoppingCart,
  Strategy,
  TrendUp,
} from "@phosphor-icons/react";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

const STAGGER_CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 0.9,
      ease: EASE_OUT,
      onUpdate: (latest) => {
        const factor = Math.pow(10, decimals);
        setDisplay(Math.round(latest * factor) / factor);
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setVisible(true);
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a,button");
      setHovering(Boolean(interactive));
    };

    const onLeave = () => {
      setVisible(false);
      setHovering(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, true);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver, true);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        opacity: visible ? 1 : 0,
        transition: "opacity 150ms ease",
      }}
    >
      <div
        className="rounded-full"
        style={{
          width: hovering ? 40 : 12,
          height: hovering ? 40 : 12,
          background: "#FE5B04",
          opacity: hovering ? 0.3 : 1,
          transform: "translate(-50%, -50%)",
          transition: "width 180ms ease, height 180ms ease, opacity 180ms ease",
        }}
      />
    </div>
  );
}

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
    icon: <TrendUp size={32} weight="light" color="#FE5B04" aria-hidden="true" />,
    title: "Vous payez du trafic qui ne convertit pas",
    desc: "Votre site n'est pas optimisé pour convertir. Vos visiteurs repartent les mains vides.",
  },
  {
    icon: <ShoppingCart size={32} weight="light" color="#FE5B04" aria-hidden="true" />,
    title: "Votre design fait fuir avant le panier",
    desc: "Un design daté envoie le mauvais signal. Vos clients doutent avant même d'ajouter au panier.",
  },
  {
    icon: <Question size={32} weight="light" color="#FE5B04" aria-hidden="true" />,
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
    icon: <MagnifyingGlass size={28} weight="thin" color="#FE5B04" aria-hidden="true" />,
    title: "Audit & Diagnostic",
    desc: "On décortique votre site : parcours d'achat, points de friction, comportement utilisateurs.",
  },
  {
    number: "02",
    icon: <Strategy size={28} weight="thin" color="#FE5B04" aria-hidden="true" />,
    title: "Stratégie",
    desc: "Quick wins et chantiers à fort impact. Roadmap claire, pensée pour augmenter la conversion.",
  },
  {
    number: "03",
    icon: <FigmaLogo size={28} weight="thin" color="#FE5B04" aria-hidden="true" />,
    title: "Design UX/UI",
    desc: "Maquettes Figma, prototypage, design system. Tout prêt pour votre équipe dev.",
  },
  {
    number: "04",
    icon: <ChartLine size={28} weight="thin" color="#FE5B04" aria-hidden="true" />,
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

  const caseStudies = useMemo(
    () => [
      {
        slug: "cuure",
        client: "Cuure",
        category: "Compléments personnalisés",
        year: "2026",
        title: "Refonte du parcours d’achat (PDP → checkout)",
      },
      {
        slug: "yves-rocher",
        client: "Yves Rocher",
        category: "Cosmétiques",
        year: "2023",
        title: "Refonte UX multi-marchés (pages clés + tunnel)",
      },
      {
        slug: "juliette-has-a-gun",
        client: "Juliette Has A Gun",
        category: "Parfumerie de niche",
        year: "2025",
        title: "Modernisation UI + optimisation conversion PDP",
      },
    ],
    []
  );

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
      <CustomCursor />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 bg-black/5 rounded-2xl px-4 py-3 text-sm font-medium">
            <span className="inline-flex items-center gap-2">
              <span className="text-black/40">Note</span>
              <CountUp value={4.9} decimals={1} className="font-semibold" />
              <span className="text-black/40">/5</span>
            </span>
            <span className="text-black/30">•</span>
            <span className="inline-flex items-center gap-2">
              <CountUp value={100} prefix="+" className="font-semibold" />
              <span className="text-black/60">clients</span>
            </span>
            <span className="text-black/30">•</span>
            <span className="inline-flex items-center gap-2">
              <CountUp value={50} prefix="+" className="font-semibold" />
              <span className="text-black/60">refontes</span>
            </span>
          </div>

          <FadeUp>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Consultant UX/UI & CRO E-commerce <span className="text-black/30">— LeStudio</span>
            </h1>
          </FadeUp>

          <p className="text-lg md:text-xl text-black/60 max-w-xl leading-relaxed">
            On transforme vos visiteurs en clients. Design Figma livré en 7 jours, optimisé pour convertir, prêt à intégrer.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#audit"
              className="btn-primary text-center"
            >
              Obtenir mon audit CRO offert
            </a>
            <a
              href="#realisations"
              className="btn-secondary text-center"
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

      {/* Cas d’études */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">
            Cas d&apos;études
          </p>
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl font-bold max-w-2xl">
              Des projets e-commerce livrés vite, pensés pour convertir.
            </h2>
          </FadeUp>
        </div>

        <div className="space-y-4">
          {caseStudies.map((cs) => (
            <a
              key={cs.slug}
              href={`/cas-etudes/${cs.slug}`}
              className="group block rounded-2xl border border-black/10 bg-white p-7 md:p-9 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                    <span className="font-bold">{cs.client}</span>
                    <span className="text-black/20">•</span>
                    <span className="text-black/60">{cs.category}</span>
                    <span className="text-black/20">•</span>
                    <span className="text-black/50">{cs.year}</span>
                  </div>
                  <div className="mt-3 text-lg md:text-xl font-semibold text-black/80">
                    {cs.title}
                  </div>
                </div>
                <div className="text-sm font-semibold text-black/50 group-hover:text-black transition-colors">
                  <span className="inline-flex items-center gap-2">
                    Voir le projet
                    <ArrowRight size={16} weight="regular" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Problèmes */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">Problèmes</p>
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl font-bold max-w-xl">
              Trois freins qui réduisent vos ventes dès le premier mois.
            </h2>
          </FadeUp>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={STAGGER_ITEM}
              className="bg-black/[0.03] rounded-2xl p-8 border border-black/5"
            >
              <div className="mb-4">{p.icon}</div>
              <h3 className="font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-black/60 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">Nos services</p>
            <FadeUp>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Ce qu’on fait pour vous.</h2>
            </FadeUp>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((s) => (
              <motion.div
                key={s.number}
                variants={STAGGER_ITEM}
                className="bg-white rounded-2xl p-8 border border-black/10 hover:border-black/20 transition-colors"
              >
                <span className="text-black/30 text-sm font-mono">{s.number}</span>
                <h3 className="text-xl font-bold mt-4 mb-3">{s.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6">{s.description}</p>
                <div className="flex items-center justify-between gap-4">
                  <p className="font-bold text-black">{s.price}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-black/60">
                    <Check size={14} weight="bold" color="#FE5B04" aria-hidden="true" />
                    Inclus
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Méthode */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">Méthode</p>
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl font-bold">4 étapes pour booster vos ventes.</h2>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.number} className="rounded-2xl border border-black/10 bg-white">
              <div className="p-8 border-t-2 border-black">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-4xl font-bold text-black/10">{s.number}</span>
                  <div className="shrink-0">{s.icon}</div>
                </div>
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
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Ce qu’en disent nos clients.</h2>
          </FadeUp>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={`${t.name}-${t.role}`}
              variants={STAGGER_ITEM}
              className="border border-black/10 rounded-2xl p-8 bg-white"
            >
              <p className="text-black/70 leading-relaxed mb-6 text-sm">"{t.quote}"</p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-black/40 text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-3">Pourquoi nous ?</p>
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl font-bold max-w-xl">
              Design et CRO : la combinaison qui fait monter la conversion.
            </h2>
          </FadeUp>
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
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Réservez votre audit CRO offert
            </h2>
          </FadeUp>
          <p className="text-white/60 text-lg mb-4">Augmentez votre CA sans augmenter votre budget publicitaire.</p>

          <ul className="text-white/60 text-sm mb-10 space-y-2">
            <li className="flex items-center justify-center gap-2">
              <Check size={14} weight="bold" color="#FE5B04" aria-hidden="true" />
              Résultats visibles avant la fin du premier mois
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check size={14} weight="bold" color="#FE5B04" aria-hidden="true" />
              Design livré en 7 jours
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check size={14} weight="bold" color="#FE5B04" aria-hidden="true" />
              Sans engagement
            </li>
          </ul>

          <a
            href="mailto:contact@lestudiodesign.fr"
            className="btn-primary inline-block text-lg"
          >
            Obtenir mon audit CRO offert
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
