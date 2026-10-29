import type { Metadata } from "next";
import { OfficeMap } from "@/components/OfficeMap";
import { PageHero } from "@/components/PageHero";
import { companyName, contact, pages, reachOut } from "@/lib/site";

const page = pages[7];

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

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Contact the office"
        lede="Call, message on WhatsApp, email or visit us in Port Harcourt."
      />
      <section className="section">
        <div className="wrap">
          <p className="stance">{reachOut}</p>
          <ul className="contact-tiles">
            <li>
              <h2>Call</h2>
              {contact.phones.map((phone) => (
                <a key={phone.href} href={phone.href}>
                  {phone.display}
                </a>
              ))}
            </li>
            <li>
              <h2>WhatsApp</h2>
              <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer">
                {contact.whatsapp.display}
                <span className="sr-only"> (opens WhatsApp in a new tab)</span>
              </a>
              <span>Messages only, no calls.</span>
            </li>
            <li>
              <h2>Email</h2>
              {contact.emails.map((email) => (
                <a key={email} href={`mailto:${email}`}>
                  {email}
                </a>
              ))}
            </li>
            <li>
              <h2>Visit</h2>
              <address>
                {contact.street}
                <br />
                {contact.city}
                <br />
                {contact.region}
              </address>
            </li>
          </ul>
          <OfficeMap className="contact-map" />
        </div>
      </section>
    </>
  );
}
