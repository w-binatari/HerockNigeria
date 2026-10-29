import { logo } from "@/lib/site";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    // The published PNG is served as-is so the mark is not redrawn or recompressed.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
