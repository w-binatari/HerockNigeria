import Image from "next/image";
import Link from "next/link";

type Service = {
  href: string;
  title: string;
  text: string;
  photo: { src: string; alt: string };
};

type ServiceListProps = {
  intro: string;
  services: readonly Service[];
};

// Each row carries its own photo, faded in behind the text on hover or focus.
export function ServiceList({ intro, services }: ServiceListProps) {
  return (
    <div className="wrap split-head">
      <div>
        <h2>What we do</h2>
        <p className="intro">{intro}</p>
      </div>
      <ul className="service-rows">
        {services.map((service) => (
          <li key={service.href}>
            <Link href={service.href}>
              <Image className="service-bg" src={service.photo.src} alt="" fill sizes="(min-width: 980px) 60vw, 100vw" />
              <span className="service-title">{service.title}</span>
              <span className="service-text">{service.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
