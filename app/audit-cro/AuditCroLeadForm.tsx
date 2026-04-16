"use client";

import { useMemo, useState } from "react";

type RevenueBand = "moins-500k" | "500k-1m" | "1m-5m" | "plus-5m";

const REVENUE_LABELS: Record<RevenueBand, string> = {
  "moins-500k": "Moins de 500k",
  "500k-1m": "500k-1M",
  "1m-5m": "1M-5M",
  "plus-5m": "Plus de 5M",
};

const CONTACT_EMAIL = "contact@lestudiodesign.fr";

export function AuditCroLeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [revenue, setRevenue] = useState<RevenueBand>("500k-1m");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Veuillez renseigner votre nom.";
    if (!/^\S+@\S+\.\S+$/.test(email.trim()))
      next.email = "Veuillez renseigner un email valide.";
    if (siteUrl.trim().length < 4) next.siteUrl = "Veuillez renseigner l’URL du site.";
    return next;
  }, [name, email, siteUrl]);

  const canSubmit = Object.keys(errors).length === 0;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (!canSubmit) return;

    const subject = "Audit CRO e-commerce offert — demande";
    const body = [
      `Nom : ${name}`,
      `Email : ${email}`,
      `URL du site : ${siteUrl}`,
      `Chiffre d'affaires annuel : ${REVENUE_LABELS[revenue]}`,
      "",
      "Message :",
      message || "(non renseigné)",
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-black/10 bg-white p-7">
      <div className="flex items-start justify-between gap-6 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Obtenir mon audit gratuit</h2>
          <p className="text-black/60 text-sm md:text-base mt-2 leading-relaxed">
            Répondez en 30 secondes. On vous recontacte avec les prochaines étapes.
          </p>
        </div>
        <div className="hidden md:block text-right">
          <div className="text-sm font-semibold text-black/50">Réponse rapide</div>
          <div className="text-xs text-black/40">Sous réserve d’éligibilité</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-semibold text-black/70">Nom</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30"
            placeholder="Votre nom"
            autoComplete="name"
          />
          {submitted && errors.name && (
            <span className="mt-2 block text-xs text-red-600">{errors.name}</span>
          )}
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-black/70">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30"
            placeholder="vous@marque.com"
            autoComplete="email"
          />
          {submitted && errors.email && (
            <span className="mt-2 block text-xs text-red-600">{errors.email}</span>
          )}
        </label>

        <label className="block md:col-span-2">
          <span className="text-sm font-semibold text-black/70">URL du site</span>
          <input
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30"
            placeholder="https://votre-site.com"
            inputMode="url"
          />
          {submitted && errors.siteUrl && (
            <span className="mt-2 block text-xs text-red-600">{errors.siteUrl}</span>
          )}
        </label>

        <label className="block md:col-span-2">
          <span className="text-sm font-semibold text-black/70">Chiffre d'affaires annuel</span>
          <select
            value={revenue}
            onChange={(e) => setRevenue(e.target.value as RevenueBand)}
            className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30 bg-white"
          >
            <option value="moins-500k">Moins de 500k</option>
            <option value="500k-1m">500k-1M</option>
            <option value="1m-5m">1M-5M</option>
            <option value="plus-5m">Plus de 5M</option>
          </select>
        </label>

        <label className="block md:col-span-2">
          <span className="text-sm font-semibold text-black/70">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 w-full min-h-28 rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30 resize-y"
            placeholder="Ce que vous souhaitez améliorer (pages, problèmes, objectif…) "
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-black text-white font-semibold px-7 py-4 rounded-full hover:bg-black/80 transition-colors text-center"
      >
        Obtenir mon audit gratuit
      </button>

      <p className="mt-4 text-xs text-black/40 leading-relaxed">
        En envoyant ce formulaire, vous acceptez d’être recontacté par {CONTACT_EMAIL}.
      </p>
    </form>
  );
}

