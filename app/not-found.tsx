'use client';

import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export default function NotFound() {
  return (
    <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-4">
            Erreur 404
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Cette page n&apos;existe pas
          </h1>
          <p className="text-lg md:text-xl text-black/60 mt-5 leading-relaxed">
            Le lien est peut-être incorrect, ou la page a été déplacée. Vous pouvez
            revenir à l&apos;accueil ou démarrer un audit CRO.
          </p>

          <div className="mt-10 rounded-2xl border border-black/10 bg-black/[0.02] p-10">
            <div className="aspect-[16/6] rounded-2xl bg-white border border-black/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-black/[0.06]" />
                <div className="absolute left-1/2 -top-24 h-64 w-64 rounded-full bg-black/[0.04]" />
                <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-black/[0.05]" />
              </div>
              <div className="relative text-center">
                <div className="text-5xl font-bold text-black/20">404</div>
                <div className="text-sm font-semibold text-black/40 mt-2">
                  Page introuvable
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="btn-primary text-center"
              >
                Retour accueil
              </Link>
              <Link
                href="/audit-cro"
                className="btn-secondary text-center"
              >
                Obtenir mon audit CRO offert
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

