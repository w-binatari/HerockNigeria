import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { companyName, pages } from "@/lib/site";

const page = pages[5];

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
        lede="One office, in Port Harcourt."
      />
      <section className="section">
        <div className="wrap contact-layout">
          <ContactDetails title="Address" />
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
