import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";

type RelatedServicesProps = {
  current: string;
};

// Photo cards for the services other than the page being viewed.
export function RelatedServices({ current }: RelatedServicesProps) {
  const others = services.filter((service) => service.href !== current);

  return (
    <section className="section mist">
      <div className="wrap">
        <h2>Other services</h2>
        <ul className="related-grid">
          {others.map((service) => (
            <li key={service.href}>
              <Link href={service.href} className="related-card">
                <span className="related-photo">
                  <Image src={service.photo.src} alt="" fill sizes="(min-width: 980px) 25vw, (min-width: 720px) 50vw, 100vw" />
                </span>
                <span className="related-title">{service.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
