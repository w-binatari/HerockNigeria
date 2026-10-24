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
      </address>
      <ul className="contact-list">
        {contact.phones.map((phone) => (
          <li key={phone.href}>
            <a href={phone.href}>{phone.display}</a>
          </li>
        ))}
        {contact.emails.map((email) => (
          <li key={email}>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
