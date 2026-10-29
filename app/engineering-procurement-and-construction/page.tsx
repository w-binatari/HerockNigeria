import type { Metadata } from "next";
import { Credentials } from "@/components/Credentials";
import { Feature } from "@/components/Feature";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import { companyName, pages, photos } from "@/lib/site";

const page = pages[2];

const stages = [
  {
    title: "Engineering",
    text: "Design that meets safety and quality standards from the first drawing.",
  },
  {
    title: "Procurement",
    text: "Sourcing of materials and equipment to the same standards as the design.",
  },
  {
    title: "Construction",
    text: "Execution on site, managed through to completion.",
  },
  {
    title: "Handover training",
    text: "Your facility managers and technical staff trained to run what we built.",
  },
] as const;

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

export default function EngineeringPage() {
  return (
    <>
      <PageHero
        kicker="EPC"
        title="Engineering, procurement and construction"
        lede="Complete engineering, procurement and construction, from first design to final execution."
        photo={photos.epcPlant}
      />
      <section className="section">
        <div className="wrap lead-split">
          <h2>One team from first design to final execution.</h2>
          <div>
            <p>
              We offer complete engineering, procurement and construction services, managing complex
              infrastructure projects from the first design to final execution.
            </p>
            <p>
              We make sure all engineering, sourcing and construction tasks meet the safety and quality
              standards, so one accountable team carries the project the whole way.
            </p>
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="wrap">
          <h2>How we deliver</h2>
          <ol className="steps">
            {stages.map((stage, index) => (
              <li key={stage.title}>
                <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Feature photo={photos.technician} title="Every handover includes training.">
        <p>
          Before we finish a project, we thoroughly train the client&apos;s facility managers and technical
          staff on how to safely operate, maintain and troubleshoot the new infrastructure.
        </p>
        <p>It is how we protect long-term asset integrity after our crews leave site.</p>
      </Feature>

      <Credentials />

      <RelatedServices current={page.href} />
      <OfficeCta intro="Call or email the Port Harcourt office about engineering, procurement and construction." />
    </>
  );
}
