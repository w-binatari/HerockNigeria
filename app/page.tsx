import type { Metadata } from "next";
import Link from "next/link";
import { ContactDetails } from "@/components/ContactDetails";
import { companyName, contact, pages, stance, values } from "@/lib/site";

const services = [
  {
    href: "/engineering-procurement-and-construction",
    index: "01",
    title: "Engineering, procurement and construction",
    text: "Engineering design, project management, feasibility studies, procurement and logistics, supply chain management, and construction and installation, for various industries.",
  },
  {
    href: "/environment-and-circular-economy",
    index: "02",
    title: "Environment and circular economy",
    text: "Waste management, sustainability consulting, circular-economy consulting, resource-efficiency optimization, supply-chain optimization, carbon-footprint reduction programs, and stakeholder engagement and education.",
  },
  {
    href: "/equipment-people-and-training",
    index: "03",
    title: "Equipment, people and training",
    text: "Rental and leasing of heavy machinery, construction equipment, environment and waste equipment, industry equipment, and IT equipment, with skilled labour and training.",
  },
] as const;

export const metadata: Metadata = {
  title: { absolute: companyName },
  description: pages[0].description,
  alternates: { canonical: "/" },
  openGraph: {
    title: companyName,
    description: pages[0].description,
    url: "/",
  },
};

export default function HomePage() {
  const phone = contact.phones[0];

  return (
    <>
      <div className="home-hero">
        <div className="wrap">
          <p className="kicker">Port Harcourt</p>
          <h1>{companyName}</h1>
          <p className="lede">
            Engineering, procurement and construction, environmental services, and equipment
            leasing and manpower supply.
          </p>
          <p className="since">Incorporated since 1993.</p>
          <div className="actions">
            <Link className="button" href="/contact">
              Contact the office
            </Link>
            <a className="button secondary" href={phone.href}>
              {phone.display}
            </a>
          </div>
        </div>
      </div>

      <section className="section mist">
        <div className="wrap">
          <p className="kicker">Services</p>
          <h2>Three lines of work</h2>
          <div className="card-grid">
            {services.map((service) => (
              <article className="service-card" key={service.href}>
                <p className="index">{service.index}</p>
                <h3>
                  <Link href={service.href}>
                    {service.title}
                    <span className="stretched" aria-hidden="true" />
                  </Link>
                </h3>
                <p>{service.text}</p>
                <p className="more">View this service</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Values</p>
          <h2>I-R-I-S-E</h2>
          <p className="intro">
            Herock spells its values as innovation, respect, integrity, service, and excellence.
          </p>
          <div className="value-grid">
            {values.map((value) => (
              <div className="value" key={value.name}>
                <span className="value-letter">{value.letter}</span>
                <span className="value-name">{value.name}</span>
              </div>
            ))}
          </div>
          <p className="stance">{stance}</p>
          <p className="section-link">
            <Link href="/company">Company, mission, and vision</Link>
          </p>
        </div>
      </section>

      <section className="section ink">
        <div className="wrap office-home">
          <ContactDetails title="The Port Harcourt office" />
          <p className="section-link">
            <Link className="button" href="/contact">
              All contact details
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
