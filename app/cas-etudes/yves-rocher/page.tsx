import { notFound } from "next/navigation";
import { CaseStudyPage } from "../_shared";
import { getCaseStudyBySlug } from "../_data";

export default function YvesRocherCaseStudyPage() {
  const cs = getCaseStudyBySlug("yves-rocher");
  if (!cs) notFound();
  return <CaseStudyPage cs={cs} />;
}

