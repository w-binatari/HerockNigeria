import type { Metadata } from "next";
import { Feature } from "@/components/Feature";
import { OfficeCta } from "@/components/OfficeCta";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import {
  ceaUrl,
  circularConsultancy,
  circularFocus,
  companyName,
  environmentIntro,
  environmentServices,
  group,
  pages,
  photos,
} from "@/lib/site";

const page = pages[6];
const envirotech = group[2];

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
              {envirotech.name}, part of the Herock group, carries out eco-friendly environmental
              clean-up.
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

      <RelatedServices current={page.href} />
      <OfficeCta intro="Call or email the Port Harcourt office about environmental and circular-economy work." />
    </>
  );
}
