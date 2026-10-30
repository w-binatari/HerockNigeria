import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/equipment-people-and-training",
        destination: "/human-capital-development",
        permanent: false,
      },
      // Addresses from the previous WordPress site at herocknigeria.com, so links and search
      // history carry over once the domain points here.
      ...[
        ["/about", "/about-us"],
        ["/e-p-c-engineering-procurement-and-construction", "/engineering-procurement-and-construction"],
        ["/equipment-leasing-manpower-supply", "/human-capital-development"],
        ["/environmental-circular-economy-services", "/environment-and-circular-economy"],
        ["/contact-us", "/contact"],
        ["/feed", "/"],
        ["/comments/feed", "/"],
        ["/wp-content/uploads/:path*", "/about-us"],
        // Renamed in the October 2026 menu change.
        ["/company", "/about-us"],
        ["/md/company.md", "/md/about-us.md"],
      ].map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
  },
};

export default nextConfig;
