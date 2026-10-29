import type { Metadata } from "next";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { companyName, pages, photos, researchCopy } from "@/lib/site";

const page = pages[4];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.href },
  openGraph: {
    title: `${page.title} · ${companyName}`,
    description: page.description,
    url: page.href,
  },
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        kicker="Research"
        title="Research and innovation"
        lede="Training and capacity building for researchers in the oil and gas industry."
        photo={photos.researchLab}
      />
      <section className="section">
        <div className="wrap narrow">
          <p>{researchCopy}</p>
        </div>
      </section>
      <OfficeCta intro="Call or email the Port Harcourt office about research and innovation." />
    </>
  );
}
