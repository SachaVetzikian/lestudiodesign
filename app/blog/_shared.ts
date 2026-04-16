export type BlogCategory =
  | "CRO"
  | "UX Design"
  | "Shopify"
  | "A/B Testing"
  | "E-commerce";

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  dateISO: string;
  readingTimeMin: number;
  excerpt: string;
  author: string;
};

export const SITE_URL = "https://lestudiodesign.fr";
export const AUTHOR_NAME = "Sacha Vetzikian";
export const AUTHOR_TITLE = "Consultant UX/UI & CRO";

export function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export function catColor(category: BlogCategory) {
  switch (category) {
    case "CRO":
      return "bg-zinc-900";
    case "UX Design":
      return "bg-zinc-700";
    case "Shopify":
      return "bg-zinc-800";
    case "A/B Testing":
      return "bg-zinc-600";
    case "E-commerce":
      return "bg-zinc-500";
    default:
      return "bg-zinc-900";
  }
}

export function catTint(category: BlogCategory) {
  switch (category) {
    case "CRO":
      return "bg-black/[0.04]";
    case "UX Design":
      return "bg-black/[0.03]";
    case "Shopify":
      return "bg-black/[0.035]";
    case "A/B Testing":
      return "bg-black/[0.03]";
    case "E-commerce":
      return "bg-black/[0.025]";
    default:
      return "bg-black/[0.03]";
  }
}

