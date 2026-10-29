import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import {
  accreditations,
  clientsLine,
  commitment,
  companyName,
  contact,
  description,
  experience,
  group,
  mission,
  pages,
  photos,
  quality,
  values,
  vision,
} from "@/lib/site";

const page = pages[1];

const work = [
  {
    href: "/engineering-procurement-and-construction",
    label: "Engineering, procurement and construction",
  },
  {
    href: "/human-capital-development",
    label: "Human capital development and manpower supply",
  },
  { href: "/research-and-innovation", label: "Research and innovation" },
  { href: "/project-management", label: "Project management" },
  {
    href: "/environment-and-circular-economy",
    label: "Environment and circular economy",
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

export default function CompanyPage() {
  return (
    <>
      <PageHero kicker="Company" title={companyName} lede={description} photo={photos.siteTeam} />
      <section className="section">
        <div className="wrap narrow">
          <h2>Office</h2>
          <p>
            The office is {contact.street}, {contact.city}, {contact.region}.
          </p>
          <p>{experience}</p>
          <ul className="offer-list">
            {accreditations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section mist">
        <div className="wrap narrow">
          <h2>Nigerian companies</h2>
          <p className="intro">These Nigerian names sit under Herock Nigeria.</p>
          <ul className="offer-list">
            {group.map((company) => (
              <li key={company.name}>
                <strong>{company.name}.</strong> {company.role}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2>Mission and vision</h2>
          <div className="statement-grid">
            <figure className="statement has-photo">
              <Image className="statement-photo" src={photos.siteTeam.src} alt="" fill sizes="(min-width: 720px) 50vw, 100vw" />
              <figcaption>Mission</figcaption>
              <blockquote>
                <p>{mission}</p>
              </blockquote>
            </figure>
            <figure className="statement has-photo">
              <Image className="statement-photo" src={photos.technician.src} alt="" fill sizes="(min-width: 720px) 50vw, 100vw" />
              <figcaption>Vision</figcaption>
              <blockquote>
                <p>{vision}</p>
              </blockquote>
            </figure>
          </div>
          <figure className="statement commitment">
            <figcaption>Commitment</figcaption>
            <blockquote>
              <p>{commitment}</p>
            </blockquote>
          </figure>
        </div>
      </section>
      <section className="section mist">
        <div className="wrap">
          <h2>Values</h2>
          <p className="intro">Core values (I-RISE).</p>
          <div className="value-grid">
            {values.map((value) => (
              <div className="value" key={value.name}>
                <span className="value-letter">{value.letter}</span>
                <span className="value-name">{value.name}</span>
              </div>
            ))}
          </div>
          <p className="stance">{quality}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap narrow">
          <h2>The work</h2>
          <p>{clientsLine}</p>
          <ul className="text-links">
            {work.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <OfficeCta intro="Call, email, or use WhatsApp to reach the Port Harcourt office." />
    </>
  );
}
