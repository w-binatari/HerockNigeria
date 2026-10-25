import { contact } from "@/lib/site";

type ContactDetailsProps = {
  title?: string;
};

export function ContactDetails({ title = "Office" }: ContactDetailsProps) {
  return (
    <div className="contact-details">
      <h2>{title}</h2>
      <address>
        {contact.street}
        <br />
        {contact.city}
        <br />
        {contact.region}
      </address>
      <ul className="contact-list">
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
        <li>
          <a href={contact.website.href} target="_blank" rel="noopener noreferrer">
            {contact.website.display}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
