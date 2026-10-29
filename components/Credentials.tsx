import Image from "next/image";
import { credentials } from "@/lib/site";

export function Credentials() {
  return (
    <section className="credentials" aria-label="Accreditations">
      <ul className="wrap credential-list">
        {credentials.map((item) => (
          <li key={item.name}>
            {item.logo ? (
              <Image
                className="credential-logo"
                src={item.logo.src}
                alt={`${item.name} logo`}
                width={item.logo.width}
                height={item.logo.height}
              />
            ) : null}
            <strong>{item.name}</strong>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
