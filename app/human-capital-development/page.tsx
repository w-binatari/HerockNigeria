import type { Metadata } from "next";
import { CourseCards } from "@/components/CourseCards";
import { Feature } from "@/components/Feature";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import {
  companyName,
  engineeringTraining,
  group,
  ictTraining,
  manpower,
  manpowerIntro,
  pages,
  photos,
  qhseIntro,
  trainingIntro,
} from "@/lib/site";

const page = pages[3];
const techIdeas = group.find((item) => item.name === "Herock Tech-IDEAS")!;

const trainingAreas = [
  { title: "Engineering training", text: engineeringTraining },
  { title: "ICT and technology", text: ictTraining },
  {
    title: "Digitalization and digital innovation",
    text: `Training that helps teams adopt digital tools and ways of working, alongside ${techIdeas.name}, our digital skills company.`,
  },
  {
    title: "QHSE training",
    text: "Health, safety and environment programmes that build a culture of safety and regulatory compliance.",
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

export default function HumanCapitalPage() {
  return (
    <>
      <PageHero
        kicker="People"
        title="Human capital development and manpower supply"
        lede="Training and skills development, and a vetted workforce."
        photo={photos.siteTeam}
      />
      <section className="section">
        <div className="wrap lead-split">
          <h2>Training built for the field.</h2>
          <div>
            <p>{trainingIntro}</p>
            <p>
              Giving people the right knowledge and skills is, we believe, the best way to ensure
              long-term success.
            </p>
          </div>
        </div>
        <div className="wrap">
          <div className="tiles two">
            {trainingAreas.map((area) => (
              <div className="tile" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="wrap">
          <h2>QHSE courses we have delivered</h2>
          <p className="intro">{qhseIntro}</p>
          <CourseCards label="QHSE courses" />
        </div>
      </section>

      <Feature photo={photos.workforceCrew} title="Strategic manpower solutions." reverse>
        <p>{manpowerIntro}</p>
        <ul className="feature-list">
          {manpower.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </Feature>

      <RelatedServices current={page.href} />
      <OfficeCta intro="Call or email the Port Harcourt office about training and manpower." />
    </>
  );
}
