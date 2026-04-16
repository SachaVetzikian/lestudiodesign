import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyPage } from "../_shared";
import { getCaseStudyBySlug } from "../_data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: `${cs.client} — Cas d'études | LeStudio`,
    description: `${cs.client} (${cs.year}) — ${cs.projectTitle}. ${cs.category}.`,
  };
}

export default async function CaseStudyDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();
  return <CaseStudyPage cs={cs} />;
}

