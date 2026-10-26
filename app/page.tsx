import type { Metadata } from "next";
import Link from "next/link";
import { ContactDetails } from "@/components/ContactDetails";
import { companyName, contact, pages, servicesIntro, values } from "@/lib/site";

const services = [
  {
    href: "/engineering-procurement-and-construction",
    index: "01",
    title: "Engineering, procurement and construction",
    text: "Complete engineering, procurement and construction for complex infrastructure projects, from first design to final execution, with training at handover.",
    tags: ["Design", "Procurement", "Construction"],
  },
  {
    href: "/human-capital-development",
    index: "02",
    title: "Human capital development and manpower supply",
    text: "Practical training and a vetted workforce, including engineering, digital skills, and health, safety, and environment courses.",
    tags: ["Training", "Manpower"],
  },
  {
    href: "/research-and-innovation",
    index: "03",
    title: "Research and innovation",
    text: "Training and capacity building for researchers, and linkages to support commercialization in the oil and gas industry.",
    tags: ["Oil and gas"],
  },
  {
    href: "/project-management",
    index: "04",
    title: "Project management",
    text: "Project management training for teams delivering work on time, on budget, and to technical specifications.",
    tags: ["Planning", "Risk"],
  },
  {
    href: "/environment-and-circular-economy",
    index: "05",
    title: "Environment and circular economy",
    text: "Waste management, sustainability, and circular economy consulting and training.",
    tags: ["Waste", "Circular economy"],
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
          <p className="kicker">{companyName}</p>
          <h1>An EPC and man power supply company.</h1>
          <p className="lede">Established in 1993. Port Harcourt.</p>
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
          <h2>Five service areas</h2>
          <p className="intro">{servicesIntro}</p>
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
                <p className="tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </p>
                <p className="more">View this service</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Values</p>
          <h2>I-RISE</h2>
          <p className="intro">
            The core values are integrity, respect, innovation, service, and excellence.
          </p>
          <div className="value-grid">
            {values.map((value) => (
              <div className="value" key={value.name}>
                <span className="value-letter">{value.letter}</span>
                <span className="value-name">{value.name}</span>
              </div>
            ))}
          </div>
          <p className="section-link">
            <Link href="/company">Company, mission, and vision</Link>
          </p>
        </div>
      </section>

      <section className="section mist">
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
