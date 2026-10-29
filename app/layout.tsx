import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { preload } from "react-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { companyName, description, jsonLd, logo, siteUrl } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#0a2350",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: companyName,
    template: `%s · ${companyName}`,
  },
  description,
  applicationName: companyName,
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: companyName,
    title: companyName,
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  preload(logo.src, { as: "image" });

  return (
    <html lang="en" className={`${archivo.variable} js`}>
      <body>
        <noscript>
          <style>{`.nav-list{display:flex !important;position:static !important}.nav-toggle{display:none !important}`}</style>
        </noscript>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
