import Image from "next/image";
import { group } from "@/lib/site";

export function GroupList() {
  return (
    <ul className="group-list">
      {group.map((item) => (
        <li key={item.name}>
          <span className="group-logo">
            {item.logo ? (
              <Image src={item.logo.src} alt={`${item.name} logo`} width={item.logo.width} height={item.logo.height} />
            ) : null}
          </span>
          <span className="group-text">
            <strong>{item.name}</strong>
            <span>{item.role}</span>
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.url.replace("https://www.", "")}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}
