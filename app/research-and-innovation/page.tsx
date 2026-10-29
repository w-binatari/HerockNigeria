import type { Metadata } from "next";
import { Feature } from "@/components/Feature";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import { companyName, pages, photos, researchCopy, researchSteps } from "@/lib/site";

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
        <div className="wrap lead-split">
          <h2>From idea to industry.</h2>
          <div>
            <p>{researchCopy}</p>
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="wrap">
          <h2>How we support researchers</h2>
          <ol className="steps three">
            {researchSteps.map((step, index) => (
              <li key={step.title}>
                <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Feature photo={photos.technician} title="Grounded in the oil and gas industry.">
        <p>
          Our research support sits beside three decades of engineering and training work in the sector, so
          ideas are tested against how the industry actually operates.
        </p>
      </Feature>

      <RelatedServices current={page.href} />
      <OfficeCta intro="Call or email the Port Harcourt office about research and innovation." />
    </>
  );
}
