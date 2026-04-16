'use client';

import Link from "next/link";
import { ArrowRight, CaretDown, List, X } from "@phosphor-icons/react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

type NavItem = { label: string; href: string };

const servicesItems: NavItem[] = [
  { label: "Audit CRO", href: "/services/audit-cro" },
  { label: "Refonte UX/UI", href: "/services/refonte-ux-ui" },
  { label: "Optimisation CRO", href: "/services/optimisation-cro" },
];

export function Navbar() {
  const servicesButtonId = useId();
  const servicesMenuId = useId();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);

  const servicesWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
        setServicesMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!servicesWrapRef.current) return;
      if (!servicesWrapRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, []);

  const desktopItems = useMemo<NavItem[]>(
    () => [
      { label: "L'agence", href: "/agence" },
      { label: "Cas d'études", href: "/cas-etudes" },
      { label: "Blog", href: "/blog" },
    ],
    []
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight" aria-label="LeStudio">
          LeStudio
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <div ref={servicesWrapRef} className="relative">
            <button
              id={servicesButtonId}
              type="button"
              className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              aria-controls={servicesMenuId}
              onClick={() => setServicesOpen((v) => !v)}
              onMouseEnter={() => setServicesOpen(true)}
              onFocus={() => setServicesOpen(true)}
            >
              Services
              <CaretDown
                size={16}
                weight="regular"
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                id={servicesMenuId}
                role="menu"
                aria-labelledby={servicesButtonId}
                className="absolute left-0 top-[calc(100%+12px)] min-w-64 rounded-2xl border border-black/10 bg-white shadow-sm p-2"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm hover:bg-black/[0.03] transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="font-semibold text-black/80">{item.label}</span>
                    <ArrowRight size={16} weight="regular" className="text-black/30" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {desktopItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-60 transition-opacity">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/audit-cro"
            className="btn-primary text-sm"
          >
            Audit CRO offert
          </Link>
        </div>

        {/* Mobile */}
        <button
          type="button"
          className="md:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X size={28} weight="regular" aria-hidden="true" />
          ) : (
            <List size={28} weight="regular" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black/10 px-6 py-4">
          <div className="flex flex-col gap-2 text-sm font-medium">
            <button
              type="button"
              className="w-full flex items-center justify-between rounded-xl px-3 py-3 hover:bg-black/[0.03] transition-colors"
              onClick={() => setServicesMobileOpen((v) => !v)}
              aria-expanded={servicesMobileOpen}
            >
              <span>Services</span>
              <CaretDown
                size={16}
                weight="regular"
                className={`transition-transform ${servicesMobileOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {servicesMobileOpen && (
              <div className="pl-3 pb-2 flex flex-col">
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2 hover:bg-black/[0.03] transition-colors"
                    onClick={() => {
                      setMobileOpen(false);
                      setServicesMobileOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/agence"
              className="rounded-xl px-3 py-3 hover:bg-black/[0.03] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              L'agence
            </Link>
            <Link
              href="/cas-etudes"
              className="rounded-xl px-3 py-3 hover:bg-black/[0.03] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Cas d'études
            </Link>
            <Link
              href="/blog"
              className="rounded-xl px-3 py-3 hover:bg-black/[0.03] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>

            <Link
              href="/audit-cro"
              className="mt-2 btn-primary w-full"
              onClick={() => setMobileOpen(false)}
            >
              Audit CRO offert
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

