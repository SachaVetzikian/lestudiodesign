import { notFound } from "next/navigation";
import { CaseStudyPage } from "../_shared";
import { getCaseStudyBySlug } from "../_data";

export default function ApoticariaCaseStudyPage() {
  const cs = getCaseStudyBySlug("apoticaria");
  if (!cs) notFound();
  return <CaseStudyPage cs={cs} />;
}

