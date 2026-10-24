import type { Metadata } from "next";
import { NamedList } from "@/components/NamedList";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { companyName, equipmentCategories, leasingBenefits, pages } from "@/lib/site";

const page = pages[4];

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

export default function EquipmentPage() {
  return (
    <>
      <PageHero
        kicker="Equipment"
        title="Equipment, people and training"
        lede="Herock rents and leases equipment, and supplies skilled labour and training."
      />
      <section className="section">
        <div className="wrap narrow">
          <h2>Equipment</h2>
          <p className="intro">Rental and leasing covers these categories.</p>
          <NamedList items={equipmentCategories} />
        </div>
      </section>
      <section className="section mist">
        <div className="wrap narrow">
          <h2>People and training</h2>
          <p>Skilled labour and training are part of this offer.</p>
          <h2 className="subhead">Stated benefits</h2>
          <p>Herock states the client benefits as flexibility, cost saving, and innovation.</p>
          <NamedList items={leasingBenefits} />
        </div>
      </section>
      <OfficeCta intro="Call or email the Port Harcourt office about equipment, people, and training." />
    </>
  );
}
