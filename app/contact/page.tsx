import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails";
import { EnquiryForm } from "@/components/EnquiryForm";
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
        lede={`${contact.street}, ${contact.city}, ${contact.region}.`}
      />
      <section className="section">
        <div className="wrap contact-layout">
          <div>
            <ContactDetails title="Address" />
            <p className="stance">{reachOut}</p>
          </div>
          <EnquiryForm />
        </div>
        <div className="wrap">
          <OfficeMap className="contact-map" />
        </div>
      </section>
    </>
  );
}
