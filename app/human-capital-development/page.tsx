import type { Metadata } from "next";
import { NamedList } from "@/components/NamedList";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import {
  companyName,
  engineeringTraining,
  group,
  ictTraining,
  manpower,
  manpowerIntro,
  pages,
  qhseCourses,
  qhseIntro,
  trainingIntro,
} from "@/lib/site";

const page = pages[3];
const techIdeas = group[0];

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
      />
      <section className="section">
        <div className="wrap narrow">
          <h2>Training and skills development</h2>
          <p className="intro">{trainingIntro}</p>
          <h3 className="subhead">Engineering training</h3>
          <p>{engineeringTraining}</p>
          <h3 className="subhead">ICT and technology</h3>
          <p>{ictTraining}</p>
          <p>Digitalization and Digital Innovation Training.</p>
          <p>
            {techIdeas.name} sits under Herock Nigeria. Its role is {techIdeas.role.toLowerCase()}
          </p>
          <h3 className="subhead">QHSE training</h3>
          <p className="intro">{qhseIntro}</p>
          <NamedList items={qhseCourses} />
        </div>
      </section>
      <section className="section mist">
        <div className="wrap narrow">
          <h2>Strategic manpower solutions</h2>
          <p className="intro">{manpowerIntro}</p>
          <ul className="offer-list">
            {manpower.map((item) => (
              <li key={item.title}>
                <strong>{item.title}.</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <OfficeCta intro="Call or email the Port Harcourt office about training and manpower." />
    </>
  );
}
