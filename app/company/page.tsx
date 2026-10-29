import type { Metadata } from "next";
import Image from "next/image";
import { Credentials } from "@/components/Credentials";
import { GroupList } from "@/components/GroupList";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { ServiceList } from "@/components/ServiceList";
import {
  clientsLine,
  commitment,
  companyName,
  description,
  experience,
  mission,
  pages,
  photos,
  quality,
  services,
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
      <PageHero kicker="Company" title={companyName} lede={description} photo={photos.siteTeam} />

      <section className="section">
        <div className="wrap lead-split">
          <h2>Port Harcourt, since 1993.</h2>
          <div>
            <p>{experience}</p>
            <p>{quality}</p>
          </div>
        </div>
      </section>

      <Credentials />

      <section className="section">
        <div className="wrap">
          <h2>Mission and vision</h2>
          <div className="statement-grid">
            <figure className="statement has-photo">
              <Image className="statement-photo" src={photos.epcPlant.src} alt="" fill sizes="(min-width: 720px) 50vw, 100vw" />
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
        <div className="wrap group-layout">
          <div>
            <h2>The Herock group</h2>
            <GroupList />
          </div>
          <div>
            <h2>Our values</h2>
            <ul className="value-grid" aria-label="I-RISE">
              {values.map((value) => (
                <li className="value" key={value.name}>
                  <span className="value-letter" aria-hidden="true">
                    {value.letter}
                  </span>
                  <span className="value-name">{value.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <ServiceList intro={clientsLine} services={services} />
      </section>

      <OfficeCta intro="Call, email, or use WhatsApp to reach the Port Harcourt office." />
    </>
  );
}
