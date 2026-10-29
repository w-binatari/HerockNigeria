import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClientMarquee } from "@/components/ClientMarquee";
import { Credentials } from "@/components/Credentials";
import { Feature } from "@/components/Feature";
import { GroupList } from "@/components/GroupList";
import { OfficeCta } from "@/components/OfficeCta";
import { ServiceList } from "@/components/ServiceList";
import {
  circularFocus,
  companyName,
  contact,
  environmentIntro,
  manpower,
  manpowerIntro,
  pages,
  photos,
  qhseCourses,
  services,
  servicesIntro,
  values,
} from "@/lib/site";

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
        <Image
          className="hero-photo"
          src={photos.siteTeam.src}
          alt={photos.siteTeam.alt}
          fill
          priority
          sizes="100vw"
        />
        <div className="wrap hero-content">
          <h1>Engineering, construction and the people to run it.</h1>
          <p className="lede">
            {companyName} is an EPC and man power supply company. We have delivered projects and trained
            the teams behind them from Port Harcourt since 1993.
          </p>
          <div className="actions">
            <Link className="button" href="/contact">
              Contact the office
            </Link>
            <a className="button secondary" href={phone.href}>
              Call {phone.display}
            </a>
          </div>
        </div>
      </div>

      <Credentials />

      <section className="section">
        <ServiceList intro={servicesIntro} services={services} />
      </section>

      <ClientMarquee />

      <Feature photo={photos.technician} title="Every handover includes training.">
        <p>
          Before we finish a project, we train the client&apos;s facility managers and technical staff to
          operate, maintain and troubleshoot the new infrastructure safely. The asset keeps working long
          after our crews leave.
        </p>
        <p className="section-link">
          <Link href="/engineering-procurement-and-construction">Engineering, procurement and construction</Link>
        </p>
      </Feature>

      <section className="section navy">
        <div className="wrap">
          <h2>A workforce that arrives ready.</h2>
          <p className="intro">{manpowerIntro}</p>
          <div className="three-up">
            {manpower.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="course-strip">
            <h3>QHSE courses we deliver</h3>
            <ul>
              {[...new Set(qhseCourses)].slice(0, 7).map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
            <p className="section-link">
              <Link href="/human-capital-development">Training and manpower supply</Link>
            </p>
          </div>
        </div>
      </section>

      <Feature photo={photos.wasteTruck} title="Cleaner operations, less waste." reverse>
        <p>{environmentIntro}</p>
        <p>{circularFocus}</p>
        <p className="section-link">
          <Link href="/environment-and-circular-economy">Environment and circular economy</Link>
        </p>
      </Feature>

      <section className="section">
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
            <p className="section-link">
              <Link href="/company">Company, mission and vision</Link>
            </p>
          </div>
        </div>
      </section>

      <OfficeCta intro="Tell us about your project, training need or manpower requirement. We reply by phone, WhatsApp or email." />
    </>
  );
}
