import type { Metadata } from "next";
import Link from "next/link";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import {
  companyName,
  contact,
  description,
  mission,
  pages,
  stance,
  values,
  vision,
} from "@/lib/site";

const page = pages[1];

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

export default function CompanyPage() {
  return (
    <>
      <PageHero kicker="Company" title={companyName} lede={description} />
      <section className="section">
        <div className="wrap narrow">
          <h2>Office</h2>
          <p>
            The office is {contact.street}, {contact.city}.
          </p>
        </div>
      </section>
      <section className="section mist">
        <div className="wrap">
          <h2>Mission and vision</h2>
          <div className="statement-grid">
            <figure className="statement">
              <figcaption>Mission</figcaption>
              <blockquote>
                <p>{mission}</p>
              </blockquote>
            </figure>
            <figure className="statement">
              <figcaption>Vision</figcaption>
              <blockquote>
                <p>{vision}</p>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2>Values</h2>
          <p className="intro">
            The values are spelled I-R-I-S-E: innovation, respect, integrity, service, and
            excellence.
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
        </div>
      </section>
      <section className="section mist">
        <div className="wrap narrow">
          <h2>The work</h2>
          <ul className="text-links">
            <li>
              <Link href="/engineering-procurement-and-construction">
                Engineering, procurement and construction
              </Link>
            </li>
            <li>
              <Link href="/environment-and-circular-economy">Environment and circular economy</Link>
            </li>
            <li>
              <Link href="/equipment-people-and-training">Equipment, people and training</Link>
            </li>
          </ul>
        </div>
      </section>
      <OfficeCta intro="Call or email the Port Harcourt office." />
    </>
  );
}
