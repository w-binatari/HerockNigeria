import Image from "next/image";
import type { ReactNode } from "react";

type FeatureProps = {
  photo: { src: string; alt: string };
  title: string;
  reverse?: boolean;
  children: ReactNode;
};

// A full-bleed photo beside a block of text, alternating sides with `reverse`.
export function Feature({ photo, title, reverse = false, children }: FeatureProps) {
  return (
    <section className={reverse ? "feature reverse" : "feature"}>
      <div className="feature-photo">
        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 980px) 50vw, 100vw" />
      </div>
      <div className="feature-body">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
