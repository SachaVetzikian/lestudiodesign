"use client";

import { useMemo, useState } from "react";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const linkedinHref = useMemo(() => {
    const u = new URL("https://www.linkedin.com/sharing/share-offsite/");
    u.searchParams.set("url", url);
    return u.toString();
  }, [url]);

  const xHref = useMemo(() => {
    const u = new URL("https://twitter.com/intent/tweet");
    u.searchParams.set("url", url);
    u.searchParams.set("text", title);
    return u.toString();
  }, [url, title]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // Fallback
      const el = document.createElement("textarea");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={linkedinHref}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-black/10 px-3 py-2 text-xs font-semibold hover:bg-black/[0.03] transition-colors"
      >
        LinkedIn
      </a>
      <a
        href={xHref}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-black/10 px-3 py-2 text-xs font-semibold hover:bg-black/[0.03] transition-colors"
      >
        Twitter/X
      </a>
      <button
        type="button"
        onClick={copy}
        className="rounded-full border border-black/10 px-3 py-2 text-xs font-semibold hover:bg-black/[0.03] transition-colors"
      >
        {copied ? "Lien copié" : "Copier le lien"}
      </button>
    </div>
  );
}

