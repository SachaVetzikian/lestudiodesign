import { notFound } from "next/navigation";
import { CaseStudyPage } from "../_shared";
import { getCaseStudyBySlug } from "../_data";

export default function CaalmeCaseStudyPage() {
  const cs = getCaseStudyBySlug("caalme");
  if (!cs) notFound();
  return <CaseStudyPage cs={cs} />;
}

