import type { Metadata } from "next";
import { NamedList } from "@/components/NamedList";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import {
  ceaUrl,
  circularConsultancy,
  circularFocus,
  companyName,
  environmentIntro,
  environmentServices,
  group,
  pages,
} from "@/lib/site";

const page = pages[6];
const envirotech = group[2];

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

export default function EnvironmentPage() {
  return (
    <>
      <PageHero
        kicker="Environment"
        title="Environment and circular economy"
        lede={environmentIntro}
      />
      <section className="section">
        <div className="wrap narrow">
          <h2>Services</h2>
          <NamedList items={environmentServices} />
          <p className="stance">
            {envirotech.name} sits under Herock Nigeria. Its role is {envirotech.role.toLowerCase()}
          </p>
        </div>
      </section>
      <section className="section mist">
        <div className="wrap narrow">
          <h2>Circular economy training and consultancy</h2>
          <p className="intro">{circularFocus}</p>
          <p className="intro">
            Through a strategic partnership with the Circular Economy Alliance (
            <a href={ceaUrl}>circulareconomyalliance.com</a>
            ), the consultancy and training services include:
          </p>
          <NamedList items={circularConsultancy} />
        </div>
      </section>
      <OfficeCta intro="Call or email the Port Harcourt office about environmental and circular-economy work." />
    </>
  );
}
