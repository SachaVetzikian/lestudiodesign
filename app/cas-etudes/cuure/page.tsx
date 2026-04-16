import { notFound } from "next/navigation";
import { CaseStudyPage } from "../_shared";
import { getCaseStudyBySlug } from "../_data";

export default function CuureCaseStudyPage() {
  const cs = getCaseStudyBySlug("cuure");
  if (!cs) notFound();
  return <CaseStudyPage cs={cs} />;
}

