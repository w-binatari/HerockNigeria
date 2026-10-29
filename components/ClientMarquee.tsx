import Image from "next/image";
import type { CSSProperties } from "react";
import { clients } from "@/lib/site";

// A continuously scrolling row of client logos. Renders nothing until clients are listed.
export function ClientMarquee() {
  if (clients.length === 0) {
    return null;
  }

  return (
    <section className="clients" aria-labelledby="clients-heading">
      <div className="wrap">
        <h2 id="clients-heading">Clients we have worked with</h2>
      </div>
      <div className="marquee" style={{ "--marquee-duration": `${clients.length * 3}s` } as CSSProperties}>
        {/* The list is drawn twice so the loop has no gap; the copy is hidden from assistive tech. */}
        {[0, 1].map((copy) => (
          <ul className="marquee-track" key={copy} aria-hidden={copy === 1 || undefined}>
            {clients.map((client) => (
              <li key={client.name}>
                <Image
                  src={client.logo.src}
                  alt={copy === 0 ? client.name : ""}
                  width={client.logo.width}
                  height={client.logo.height}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
