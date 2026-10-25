import type { Metadata } from "next";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { companyName, epcCopy, pages } from "@/lib/site";

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
        kicker="EPC"
        title="Engineering, procurement and construction"
        lede="Complete engineering, procurement and construction, from first design to final execution."
      />
      <section className="section">
        <div className="wrap narrow">
          <p>{epcCopy}</p>
        </div>
      </section>
      <OfficeCta intro="Call or email the Port Harcourt office about engineering, procurement, and construction." />
    </>
  );
}
