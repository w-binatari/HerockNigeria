type PageHeroProps = {
  kicker: string;
  title: string;
  lede: string;
};

export function PageHero({ kicker, title, lede }: PageHeroProps) {
  return (
    <div className="page-hero">
      <div className="wrap">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </div>
  );
}
