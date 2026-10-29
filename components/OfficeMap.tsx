import { contact } from "@/lib/site";

const query = encodeURIComponent(`${contact.street}, ${contact.city}, ${contact.region}`);

type OfficeMapProps = {
  className?: string;
};

export function OfficeMap({ className }: OfficeMapProps) {
  return (
    <div className={className ? `office-map ${className}` : "office-map"}>
      <iframe
        title={`Map of the office at ${contact.street}, ${contact.city}`}
        src={`https://maps.google.com/maps?q=${query}&z=16&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a href={`https://www.google.com/maps/search/?api=1&query=${query}`} target="_blank" rel="noopener noreferrer">
        Get directions
        <span className="sr-only"> (opens Google Maps in a new tab)</span>
      </a>
    </div>
  );
}
