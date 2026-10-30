import Image from "next/image";
import { credentials } from "@/lib/site";

export function Credentials() {
  return (
    <section className="credentials" aria-label="Accreditations">
      <ul className="wrap credential-list">
        {credentials.map((item) => (
          <li key={item.name}>
            <span className="credential-mark">
              {item.logo ? (
                <Image src={item.logo.src} alt={`${item.name} logo`} width={item.logo.width} height={item.logo.height} />
              ) : (
                <span className="credential-year" aria-hidden="true">
                  1993
                </span>
              )}
            </span>
            <strong>{item.name}</strong>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
