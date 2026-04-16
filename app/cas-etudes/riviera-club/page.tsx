import { notFound } from "next/navigation";
import { CaseStudyPage } from "../_shared";
import { getCaseStudyBySlug } from "../_data";

export default function RivieraClubCaseStudyPage() {
  const cs = getCaseStudyBySlug("riviera-club");
  if (!cs) notFound();
  return <CaseStudyPage cs={cs} />;
}

