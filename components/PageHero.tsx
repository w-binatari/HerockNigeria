import Image from "next/image";

type PageHeroProps = {
  kicker: string;
  title: string;
  lede: string;
  photo?: { src: string; alt: string };
};

export function PageHero({ kicker, title, lede, photo }: PageHeroProps) {
  return (
    <div className={photo ? "page-hero has-photo" : "page-hero"}>
      {photo ? <Image className="hero-photo" src={photo.src} alt={photo.alt} fill priority sizes="100vw" /> : null}
      <div className="wrap hero-content">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </div>
  );
}
