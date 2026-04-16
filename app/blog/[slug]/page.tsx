import { notFound } from "next/navigation";
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
  type BlogPost,
} from "../_shared";
import { ShareButtons } from "./ShareButtons";

type TocItem = { id: string; title: string };

type Article = BlogPost & {
  content: {
    toc: TocItem[];
    body: React.ReactNode;
  };
};

function getArticle(slug: string): Article | null {
  // Gabarit : on montre un contenu “demo” si l’article n’est pas encore écrit.
  const demo: Article = {
    slug,
    title: "Article CRO & UX (gabarit)",
    category: "E-commerce",
    dateISO: "2026-04-16",
    readingTimeMin: 6,
    excerpt:
      "Un exemple de page article avec sidebar sticky, table des matières, partage et contenu riche (H2/H3, listes, tableaux).",
    author: AUTHOR_NAME,
    content: {
      toc: [
        { id: "definition", title: "Définition" },
        { id: "framework", title: "Framework simple" },
        { id: "checklist", title: "Checklist rapide" },
      ],
      body: (
        <div className="prose-like">
          <p className="text-black/70 leading-relaxed">
            Ce gabarit sert de base pour vos articles. Il est pensé “mobile first”,
            avec un layout en deux colonnes sur desktop : sidebar sticky + contenu.
          </p>

          <h2 id="definition" className="scroll-mt-28 text-2xl md:text-3xl font-bold mt-10">
            Définition
          </h2>
          <p className="text-black/70 leading-relaxed mt-3">
            Un article CRO/UX e-commerce doit être structuré, orienté action, et
            optimisé pour la lisibilité : sections courtes, exemples, checklists.
          </p>

          <h3 className="text-xl font-bold mt-6">Un exemple de liste</h3>
          <ul className="mt-3 list-disc pl-5 text-black/70 space-y-2">
            <li>Identifier les pages à fort impact (PDP, checkout, landing).</li>
            <li>Formuler une hypothèse testable.</li>
            <li>Mesurer un KPI clair (taux de conversion, add-to-cart, etc.).</li>
          </ul>

          <h2 id="framework" className="scroll-mt-28 text-2xl md:text-3xl font-bold mt-10">
            Framework simple
          </h2>
          <p className="text-black/70 leading-relaxed mt-3">
            Exemple : Impact x Effort → priorisation. Ensuite, itérations rapides et
            apprentissage continu.
          </p>

          <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6">
            <p className="font-semibold">Tip</p>
            <p className="text-black/60 text-sm mt-2">
              Ajoutez des blocs encadrés pour les points clés, afin d’améliorer la
              scannabilité.
            </p>
          </div>

          <h2 id="checklist" className="scroll-mt-28 text-2xl md:text-3xl font-bold mt-10">
            Checklist rapide
          </h2>

          <div className="mt-5 overflow-x-auto rounded-2xl border border-black/10">
            <table className="w-full text-sm">
              <thead className="bg-black/[0.03]">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Zone</th>
                  <th className="text-left px-4 py-3 font-semibold">Objectif</th>
                  <th className="text-left px-4 py-3 font-semibold">À vérifier</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Hero", "Compréhension", "Proposition de valeur + CTA"],
                  ["PDP", "Confiance", "Preuves, bénéfices, objections"],
                  ["Checkout", "Friction", "Paiement, frais, réassurance"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-black/10">
                    <td className="px-4 py-3 font-semibold">{row[0]}</td>
                    <td className="px-4 py-3 text-black/70">{row[1]}</td>
                    <td className="px-4 py-3 text-black/70">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
  };

  if (!slug) return null;
  return demo;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: `${a.title} | LeStudio`,
    description: a.excerpt,
  };
}

export default async function BlogArticleTemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const canonicalUrl = `${SITE_URL}/blog/${article.slug}`;

  const similar: BlogPost[] = [
    {
      slug: "ameliorer-taux-conversion-shopify",
      title: "Comment améliorer son taux de conversion Shopify",
      category: "Shopify",
      dateISO: "2026-01-23",
      readingTimeMin: 7,
      excerpt:
        "Messages, preuve sociale, vitesse, CTA et pages clés : les leviers CRO Shopify à fort ROI.",
      author: AUTHOR_NAME,
    },
    {
      slug: "ux-ecommerce-10-erreurs",
      title: "UX e-commerce : les 10 erreurs qui tuent vos ventes",
      category: "UX Design",
      dateISO: "2026-01-08",
      readingTimeMin: 6,
      excerpt:
        "Navigation, PDP, checkout : les frictions UX qui font chuter la conversion (et comment les corriger).",
      author: AUTHOR_NAME,
    },
    {
      slug: "fiche-produit-best-practices-cro",
      title: "Fiche produit e-commerce : les best practices CRO",
      category: "CRO",
      dateISO: "2025-11-27",
      readingTimeMin: 8,
      excerpt:
        "Proposition de valeur, preuves, objections : structurez une PDP e-commerce qui convertit mieux.",
      author: AUTHOR_NAME,
    },
  ];

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
                  {article.content.toc.map((t) => (
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
                  article.category as BlogCategory
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

            <div className="mt-8">{article.content.body}</div>

            <div className="mt-10 rounded-2xl border border-black/10 bg-black/[0.02] p-7">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">Besoin d&apos;un audit CRO ?</h2>
                  <p className="text-black/60 mt-2 leading-relaxed">
                    Obtenez un diagnostic clair et des recommandations prioritaires pour
                    augmenter votre taux de conversion.
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
          {similar.map((p) => (
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
            Un audit CRO e-commerce pour identifier ce qui bloque vos ventes et prioriser les
            actions à fort impact.
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
    </main>
  );
}

