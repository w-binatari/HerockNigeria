import type { Metadata } from "next";
import { Feature } from "@/components/Feature";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import { companyName, pages, photos, projectManagementIntro } from "@/lib/site";

const page = pages[5];

const topics = [
  {
    title: "Project planning and scheduling",
    text: "Turning scope into a realistic plan and schedule a team can deliver against.",
  },
  {
    title: "Risk management and mitigation",
    text: "Spotting what could go wrong early and deciding how to control it.",
  },
  {
    title: "Resource allocation and management",
    text: "Putting the right people, equipment and budget where the work needs them.",
  },
  {
    title: "Communication and stakeholder management",
    text: "Keeping clients, contractors and teams informed and aligned through delivery.",
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

export default function ProjectManagementPage() {
  return (
    <>
      <PageHero
        kicker="Projects"
        title="Project management"
        lede="Project management training for delivery on time, on budget, and to technical specifications."
        photo={photos.projectPlanning}
      />
      <section className="section">
        <div className="wrap lead-split">
          <h2>On time, on budget, to specification.</h2>
          <div>
            <p>{projectManagementIntro.replace(/ We cover:$/, "")}</p>
          </div>
        </div>
        <div className="wrap">
          <div className="tiles two">
            {topics.map((topic) => (
              <div className="tile" key={topic.title}>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Feature photo={photos.siteTeam} title="Skills your team uses on site." reverse>
        <p>
          Like all our training, it is practical, industry-aligned and delivered by experts, so teams can
          apply it on their next job.
        </p>
      </Feature>

      <RelatedServices current={page.href} />
      <OfficeCta intro="Call or email the Port Harcourt office about project management training." />
    </>
  );
}
