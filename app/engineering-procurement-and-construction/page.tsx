import type { Metadata } from "next";
import { NamedList } from "@/components/NamedList";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { companyName, epcServices, pages } from "@/lib/site";

const page = pages[2];

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
        kicker="Engineering"
        title="Engineering, procurement and construction"
        lede="Herock provides engineering, procurement, and construction for various industries."
      />
      <section className="section">
        <div className="wrap narrow">
          <h2>Services</h2>
          <NamedList items={epcServices} />
        </div>
      </section>
      <OfficeCta intro="Call or email the Port Harcourt office about engineering, procurement, and construction." />
    </>
  );
}
