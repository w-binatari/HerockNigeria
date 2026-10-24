import type { Metadata } from "next";
import { NamedList } from "@/components/NamedList";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { circularConsultancy, companyName, environmentServices, pages } from "@/lib/site";

const page = pages[3];

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
        lede="Waste management, sustainability consulting, and circular-economy consulting and training."
      />
      <section className="section">
        <div className="wrap narrow">
          <h2>Services</h2>
          <NamedList items={environmentServices} />
        </div>
      </section>
      <section className="section mist">
        <div className="wrap narrow">
          <h2>Circular-economy training and consultancy</h2>
          <p className="intro">
            A focus of this work is circular-economy training and consultancy. The consultancy
            covers:
          </p>
          <NamedList items={circularConsultancy} />
        </div>
      </section>
      <OfficeCta intro="Call or email the Port Harcourt office about environmental and circular-economy work." />
    </>
  );
}
