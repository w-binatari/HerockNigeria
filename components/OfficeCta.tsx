import Link from "next/link";
import { OfficeMap } from "@/components/OfficeMap";
import { contact } from "@/lib/site";

type OfficeCtaProps = {
  intro: string;
};

export function OfficeCta({ intro }: OfficeCtaProps) {
  const phone = contact.phones[0];

  return (
    <aside className="office-cta">
      <div className="wrap office-cta-grid">
        <div>
          <p className="kicker">Office</p>
          <h2>Port Harcourt</h2>
          <p>{intro}</p>
          <address>
            {contact.street}, {contact.city}, {contact.region}
          </address>
          <div className="actions">
            <Link className="button" href="/contact">
              Contact the office
            </Link>
            <a className="button secondary" href={phone.href}>
              {phone.display}
            </a>
          </div>
        </div>
        <OfficeMap />
      </div>
    </aside>
  );
}
