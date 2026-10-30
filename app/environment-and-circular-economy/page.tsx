import type { Metadata } from "next";
import { Feature } from "@/components/Feature";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import {
  ceaUrl,
  circularConsultancy,
  circularFocus,
  companyName,
  environmentIntro,
  environmentServices,
  envirotechUrl,
  pageFor,
  photos,
} from "@/lib/site";

const page = pageFor("/environment-and-circular-economy");

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

export default function EnvironmentPage() {
  return (
    <>
      <PageHero
        kicker="Environment"
        title="Environment and circular economy"
        lede="Services that protect the environment and help organisations waste less."
        photo={photos.wasteTruck}
      />
      <section className="section">
        <div className="wrap lead-split">
          <h2>Cleaner operations, less waste.</h2>
          <div>
            <p>{environmentIntro}</p>
            <p>
              Herock Envirotech Limited, our sister company, develops biodegradable oil-spill sorbents made
              from agricultural waste.
            </p>
          </div>
        </div>
        <div className="wrap">
          <ul className="tiles compact">
            {environmentServices.map((service) => (
              <li className="tile" key={service}>
                <h3>{service}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Feature photo={photos.recyclingBins} title="Circular economy training and consultancy." reverse>
        <p>{circularFocus}</p>
        <p>
          Through a strategic partnership with the{" "}
          <a href={ceaUrl} target="_blank" rel="noopener noreferrer">
            Circular Economy Alliance
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          , our consultancy and training cover:
        </p>
        <ul className="feature-list">
          {circularConsultancy.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Feature>

      <Feature photo={photos.envirotechAward} title="Herock Envirotech: oil-spill clean-up from chicken feathers.">
        <p>
          Our sister company turns poultry feather waste into the Chicken Feather Oil Pillow, a
          biodegradable sorbent that absorbs over ten times its own weight in oil and floats on water.
          It is validated at technology readiness level 7.
        </p>
        <p>
          In 2026 it was one of the top eight finalists in the Nigerian Academy of Engineering&apos;s 3rd
          National Innovation Competition, and received the Academy&apos;s Certificate of Merit.
        </p>
        <p className="section-link">
          <a href={envirotechUrl} target="_blank" rel="noopener noreferrer">
            Visit Herock Envirotech
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </Feature>

      <OfficeCta intro="Call or email the Port Harcourt office about environmental and circular-economy work." />
    </>
  );
}
