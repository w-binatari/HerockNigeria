import type { Metadata } from "next";
import { NamedList } from "@/components/NamedList";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { companyName, pages, projectManagementIntro, projectManagementTopics } from "@/lib/site";

const page = pages[5];

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
      />
      <section className="section">
        <div className="wrap narrow">
          <p className="intro">{projectManagementIntro}</p>
          <NamedList items={projectManagementTopics} />
        </div>
      </section>
      <OfficeCta intro="Call or email the Port Harcourt office about project management training." />
    </>
  );
}
