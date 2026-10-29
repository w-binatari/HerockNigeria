import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OfficeCta } from "@/components/OfficeCta";
import {
  circularFocus,
  companyName,
  contact,
  credentials,
  environmentIntro,
  group,
  manpower,
  manpowerIntro,
  pages,
  photos,
  qhseCourses,
  servicesIntro,
  values,
} from "@/lib/site";

const services = [
  {
    href: "/engineering-procurement-and-construction",
    title: "Engineering, procurement and construction",
    text: "Complete delivery of complex infrastructure projects, from first design to final execution, with training at handover.",
  },
  {
    href: "/human-capital-development",
    title: "Human capital development and manpower supply",
    text: "Practical engineering, digital and QHSE training, and a vetted workforce ready to join your operations.",
  },
  {
    href: "/project-management",
    title: "Project management",
    text: "Training for teams delivering work on time, on budget and to technical specification.",
  },
  {
    href: "/environment-and-circular-economy",
    title: "Environment and circular economy",
    text: "Waste management, sustainability and circular economy consulting and training.",
  },
  {
    href: "/research-and-innovation",
    title: "Research and innovation",
    text: "Capacity building for researchers, and links to commercialise innovation in oil and gas.",
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
            {companyName} is an EPC and manpower supply company. We have delivered projects and trained
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

      <section className="credentials" aria-label="Accreditations">
        <ul className="wrap credential-list">
          {credentials.map((item) => (
            <li key={item.name}>
              {item.logo ? (
                <Image className="credential-logo" src={item.logo} alt={`${item.name} logo`} width={160} height={64} />
              ) : null}
              <strong>{item.name}</strong>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="wrap split-head">
          <div>
            <h2>What we do</h2>
            <p className="intro">{servicesIntro}</p>
          </div>
          <ul className="service-rows">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href}>
                  <span className="service-title">{service.title}</span>
                  <span className="service-text">{service.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="feature">
        <div className="feature-photo">
          <Image src={photos.technician.src} alt={photos.technician.alt} fill sizes="(min-width: 980px) 50vw, 100vw" />
        </div>
        <div className="feature-body">
          <h2>Every handover includes training.</h2>
          <p>
            Before we finish a project, we train the client&apos;s facility managers and technical staff to
            operate, maintain and troubleshoot the new infrastructure safely. The asset keeps working long
            after our crews leave.
          </p>
          <p className="section-link">
            <Link href="/engineering-procurement-and-construction">Engineering, procurement and construction</Link>
          </p>
        </div>
      </section>

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

      <section className="feature reverse">
        <div className="feature-photo">
          <Image src={photos.wasteTruck.src} alt={photos.wasteTruck.alt} fill sizes="(min-width: 980px) 50vw, 100vw" />
        </div>
        <div className="feature-body">
          <h2>Cleaner operations, less waste.</h2>
          <p>{environmentIntro}</p>
          <p>{circularFocus}</p>
          <p className="section-link">
            <Link href="/environment-and-circular-economy">Environment and circular economy</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap group-layout">
          <div>
            <h2>The Herock group</h2>
            <ul className="group-list">
              {group.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </li>
              ))}
            </ul>
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
