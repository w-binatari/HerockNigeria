import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { companyName, pageFor, photos, services, servicesIntro } from "@/lib/site";

const page = pageFor("/what-we-do");

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

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        kicker="What we do"
        title="Our services"
        lede="Engineering and construction, people and training, the environment, and research."
        photo={photos.epcPlant}
      />
      <section className="section">
        <div className="wrap">
          <p className="intro">{servicesIntro}</p>
          <ul className="card-grid services-grid">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="photo-card">
                  <span className="photo-card-img">
                    <Image src={service.photo.src} alt="" fill sizes="(min-width: 720px) 50vw, 100vw" />
                  </span>
                  <span className="photo-card-title">{service.title}</span>
                  <span className="photo-card-text">{service.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <OfficeCta intro="Call, email, or use WhatsApp to discuss any of our services with the Port Harcourt office." />
    </>
  );
}
