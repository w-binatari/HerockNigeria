import type { Metadata } from "next";
import { Feature } from "@/components/Feature";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { companyName, projectManagementPage, photos, projectManagementIntro, projectTopics } from "@/lib/site";

const page = projectManagementPage;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.href },
  // Unlisted until the client reintroduces it.
  robots: { index: false, follow: true },
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
            {projectTopics.map((topic) => (
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

      <OfficeCta intro="Call or email the Port Harcourt office about project management training." />
    </>
  );
}
