import Link from "next/link";
import { contact } from "@/lib/site";

type OfficeCtaProps = {
  intro: string;
};

export function OfficeCta({ intro }: OfficeCtaProps) {
  const phone = contact.phones[0];

  return (
    <aside className="office-cta">
      <div className="wrap">
        <p className="kicker">Office</p>
        <h2>Port Harcourt</h2>
        <p>{intro}</p>
        <div className="actions">
          <Link className="button" href="/contact">
            Contact the office
          </Link>
          <a className="button secondary" href={phone.href}>
            {phone.display}
          </a>
        </div>
      </div>
    </aside>
  );
}
