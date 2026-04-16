import { notFound } from "next/navigation";
import { CaseStudyPage } from "../_shared";
import { getCaseStudyBySlug } from "../_data";

export default function JulietteHasAGunCaseStudyPage() {
  const cs = getCaseStudyBySlug("juliette-has-a-gun");
  if (!cs) notFound();
  return <CaseStudyPage cs={cs} />;
}

