"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { BlogCategory, BlogPost } from "./_shared";
import { catColor, catTint, formatDate } from "./_shared";

const FILTERS: Array<"Tous" | BlogCategory> = [
  "Tous",
  "CRO",
  "UX Design",
  "Shopify",
  "A/B Testing",
  "E-commerce",
];

export function BlogClient({
  featured,
  posts,
}: {
  featured: BlogPost;
  posts: BlogPost[];
}) {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("Tous");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const showFeatured = active === "Tous" || active === featured.category;

  const filtered = useMemo(() => {
    const pool = posts.filter((p) => p.slug !== featured.slug);
    if (active === "Tous") return pool;
    return pool.filter((p) => p.category === active);
  }, [active, posts, featured.slug]);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-10 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
            CRO & UX e-commerce
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Blog CRO & UX E-commerce
          </h1>
          <p className="text-lg md:text-xl text-black/60 mt-5 leading-relaxed">
            Conseils actionnables pour augmenter votre taux de conversion
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="px-6 pb-6 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const isActive = f === active;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                  isActive
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black/10 hover:border-black/20 hover:bg-black/[0.03]"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </section>

      {/* Article vedette */}
      {showFeatured && (
        <section className="px-6 pb-12 max-w-6xl mx-auto">
          <article className="rounded-2xl border border-black/10 bg-white overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-black/40">
                    {featured.category}
                  </span>
                  <span className="text-black/20">•</span>
                  <time className="text-xs text-black/40" dateTime={featured.dateISO}>
                    {formatDate(featured.dateISO)}
                  </time>
                  <span className="text-black/20">•</span>
                  <span className="text-xs text-black/40">
                    {featured.readingTimeMin} min
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  {featured.title}
                </h2>
                <p className="text-black/60 mt-4 leading-relaxed">
                  {featured.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-3 text-sm text-black/50">
                  <span className="font-semibold text-black/70">{featured.author}</span>
                </div>

                <div className="mt-8">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 bg-black text-white font-semibold px-7 py-4 rounded-full hover:bg-black/80 transition-colors"
                  >
                    Lire l&apos;article <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div
                  className={`rounded-2xl ${catColor(
                    featured.category
                  )} aspect-[16/10] flex items-end p-6`}
                >
                  <div className="rounded-full bg-white/10 border border-white/15 px-4 py-2 text-white/80 text-xs font-semibold uppercase tracking-widest">
                    Image placeholder
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* Grille */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Derniers articles</h2>
            <p className="text-black/60 mt-2">
              CRO, UX design, Shopify et e-commerce — orienté exécution.
            </p>
          </div>
          <div className="text-sm text-black/40 hidden md:block">
            Filtre : <span className="font-semibold text-black/60">{active}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.slug}
              className="bg-white rounded-2xl border border-black/10 hover:border-black/20 transition-colors overflow-hidden group"
            >
              <div className={`h-36 ${catTint(p.category)} border-b border-black/10`}>
                <div className="h-full p-5 flex items-end">
                  <div
                    className={`rounded-full ${catColor(
                      p.category
                    )} px-3 py-1 text-white text-xs font-semibold uppercase tracking-widest`}
                  >
                    {p.category}
                  </div>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-lg font-bold leading-snug">{p.title}</h3>

                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-black/40">
                  <span className="font-semibold text-black/60">{p.author}</span>
                  <span className="text-black/20">•</span>
                  <time dateTime={p.dateISO}>{formatDate(p.dateISO)}</time>
                  <span className="text-black/20">•</span>
                  <span>{p.readingTimeMin} min</span>
                </div>

                <p className="text-black/60 text-sm mt-4 leading-relaxed">
                  {p.excerpt}
                </p>

                <Link
                  href={`/blog/${p.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black hover:opacity-70 transition-opacity"
                >
                  Lire l&apos;article <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 rounded-2xl bg-black text-white p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Recevez nos conseils CRO chaque semaine
              </h2>
              <p className="text-white/60 text-lg mt-3 leading-relaxed">
                Une sélection courte : quick wins, UX, CRO et Shopify — 100% actionnable.
              </p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                // Placeholder : connectez un outil d’emailing plus tard.
              }}
            >
              <input
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                type="email"
                placeholder="Votre email"
                className="w-full rounded-full px-5 py-4 text-sm font-semibold text-black outline-none"
              />
              <button
                type="submit"
                className="rounded-full px-7 py-4 bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15 transition-colors"
              >
                S&apos;inscrire
              </button>
            </form>
            <p className="md:col-span-2 text-white/40 text-xs">
              Pas de spam. Désinscription en 1 clic.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

