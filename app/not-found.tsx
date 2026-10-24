import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-hero">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1>Page not found</h1>
        <p className="lede">This address is not on the Herock Nigeria site.</p>
        <div className="actions">
          <Link className="button" href="/">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
