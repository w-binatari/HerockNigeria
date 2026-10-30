import Link from "next/link";
import { Logo } from "@/components/Logo";
import { companyName, contact, pages, social } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="footer-logo">
            <Logo />
          </Link>
          <p className="footer-name">{companyName}</p>
          <p>Established in 1993.</p>
        </div>
        <div>
          <h2>Pages</h2>
          <ul className="footer-list">
            {pages.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Office</h2>
          <address>
            {contact.street}
            <br />
            {contact.city}
            <br />
            {contact.region}
          </address>
          <ul className="footer-list">
            {contact.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href}>{phone.display}</a>
              </li>
            ))}
            <li>
              <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer">
                {contact.whatsapp.display}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <span> ({contact.whatsapp.note})</span>
            </li>
            {contact.emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Social</h2>
          <ul className="footer-list">
            {social.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        <p>© 2026 {companyName}.</p>
      </div>
    </footer>
  );
}
