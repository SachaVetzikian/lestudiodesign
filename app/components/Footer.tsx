'use client';

import Link from "next/link";
import { InstagramLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";

const CONTACT_EMAIL = "contact@lestudiodesign.fr";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Colonne 1 */}
          <div className="md:col-span-2">
            <div className="text-xl font-bold tracking-tight">LeStudio</div>
            <p className="text-white/60 text-sm md:text-base mt-3 max-w-xl leading-relaxed">
              Studio UX/UI & CRO spécialisé e-commerce DTC. On transforme vos visiteurs en clients.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-white/70 hover:text-white transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              <div className="text-white/50">Téléphone : (à renseigner)</div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/audit-cro"
                className="btn-primary"
              >
                Parler avec Sacha
              </Link>
              <Link
                href="/services/audit-cro"
                className="btn-secondary"
              >
                Voir l’offre Audit CRO
              </Link>
            </div>
          </div>

          {/* Colonne 2 */}
          <div>
            <div className="text-sm font-semibold mb-4">LeStudio</div>
            <div className="flex flex-col gap-2 text-white/60 text-sm">
              <Link href="/services/audit-cro" className="hover:text-white transition-colors">
                Audit CRO
              </Link>
              <Link href="/services/refonte-ux-ui" className="hover:text-white transition-colors">
                Refonte UX/UI
              </Link>
              <Link
                href="/services/optimisation-cro"
                className="hover:text-white transition-colors"
              >
                Optimisation CRO
              </Link>
              <Link href="/cas-etudes" className="hover:text-white transition-colors">
                Cas d&apos;études
              </Link>
              <Link href="/agence" className="hover:text-white transition-colors">
                L&apos;agence
              </Link>
            </div>
          </div>

          {/* Colonne 3 */}
          <div>
            <div className="text-sm font-semibold mb-4">Ressources CRO</div>
            <div className="flex flex-col gap-2 text-white/60 text-sm">
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/audit-cro" className="hover:text-white transition-colors">
                Audit CRO offert
              </Link>
              <Link
                href="/blog/audit-cro-ecommerce-guide-complet"
                className="hover:text-white transition-colors"
              >
                Guide CRO e-commerce
              </Link>
            </div>
          </div>

          {/* Colonne 4 */}
          <div>
            <div className="text-sm font-semibold mb-4">Tout sur le CRO</div>
            <div className="flex flex-col gap-2 text-white/60 text-sm">
              <Link
                href="/blog/qu-est-ce-que-le-cro"
                className="hover:text-white transition-colors"
              >
                Qu&apos;est-ce que le CRO
              </Link>
              <Link
                href="/blog/ameliorer-taux-conversion-shopify"
                className="hover:text-white transition-colors"
              >
                Comment améliorer son taux de conversion
              </Link>
              <Link
                href="/blog/ux-ecommerce-erreurs"
                className="hover:text-white transition-colors"
              >
                UX e-commerce
              </Link>
            </div>
          </div>
        </div>

        {/* Bas */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="text-white/40 text-xs">
            © {new Date().getFullYear()} LeStudio — Tous droits réservés
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-white/50 text-xs">
            <Link href="/cgv" className="hover:text-white transition-colors">
              CGV
            </Link>
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/sacha-vetzikian/"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogo size={20} weight="fill" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/sachavetzikian/"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramLogo size={20} weight="fill" aria-hidden="true" />
            </a>
            <a
              href="https://x.com/Sacha_Vetzikian"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Twitter/X"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterLogo size={20} weight="fill" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

