"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

// The photo beside the list follows whichever service is hovered or focused.
export function ServiceList({ intro, services }: ServiceListProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="wrap split-head">
      <div className="service-aside">
        <h2>What we do</h2>
        <p className="intro">{intro}</p>
        <div className="service-photo" aria-hidden="true">
          {services.map((service, index) => (
            <Image
              key={service.href}
              src={service.photo.src}
              alt=""
              fill
              sizes="(min-width: 980px) 40vw, 1px"
              className={index === active ? "is-active" : undefined}
            />
          ))}
        </div>
      </div>
      <ul className="service-rows">
        {services.map((service, index) => (
          <li key={service.href}>
            <Link
              href={service.href}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              data-active={index === active || undefined}
            >
              <span className="service-title">{service.title}</span>
              <span className="service-text">{service.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
