import type { Metadata } from "next";
import Link from "next/link";
import { ClientMarquee } from "@/components/ClientMarquee";
import { CourseCards } from "@/components/CourseCards";
import { Credentials } from "@/components/Credentials";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { TrainingHall } from "@/components/TrainingHall";
import { companyName, expertiseAreas, pageFor, photos, qhseIntro, trainingIntro } from "@/lib/site";

const page = pageFor("/our-expertise");

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

export default function OurExpertisePage() {
  return (
    <>
      <PageHero
        kicker="Our expertise"
        title="Training and capacity building for industry"
        lede="Engineering, oil and gas and QHSE training, delivered by experts from Port Harcourt since 1993."
        photo={photos.workforceCrew}
      />

      <Credentials />

      <section className="section">
        <div className="wrap lead-split">
          <h2>Where our expertise lies.</h2>
          <div>
            <p>{trainingIntro}</p>
            <p>
              We believe that giving people the right knowledge and skills is the best way to ensure
              long-term success.
            </p>
          </div>
        </div>
        <div className="wrap">
          <ul className="tiles compact">
            {expertiseAreas.map((area) => (
              <li className="tile" key={area}>
                <h3>{area}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section navy">
        <div className="wrap">
          <h2>QHSE courses we have delivered</h2>
          <p className="intro">{qhseIntro.replace(/ A few of the courses.*$/, "")}</p>
          <CourseCards label="QHSE courses" />
          <p className="section-link">
            <Link href="/human-capital-development">Training and manpower supply</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>The Herock Training Centre</h2>
          <p className="intro">Our training rooms in Port Harcourt, set up for classroom sessions, workshops and group work.</p>
          <TrainingHall />
        </div>
      </section>

      <ClientMarquee />
      <OfficeCta intro="Call, email, or use WhatsApp to plan training with the Port Harcourt office." />
    </>
  );
}
