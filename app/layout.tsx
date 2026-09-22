import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://adventure-landing.vercel.app"; // update after deploying

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Freefall to Deep Blue | Skydiving & Scuba Diving",
    template: "%s | Freefall to Deep Blue",
  },
  description:
    "Tandem skydives from 6,000m and guided reef dives 40m below the surface. Book your descent — no experience required.",
  keywords: [
    "skydiving",
    "scuba diving",
    "tandem jump",
    "reef dive",
    "adventure sports",
    "extreme sports booking",
  ],
  openGraph: {
    title: "Freefall to Deep Blue | Skydiving & Scuba Diving",
    description:
      "Tandem skydives from 6,000m and guided reef dives 40m below the surface.",
    url: siteUrl,
    siteName: "Freefall to Deep Blue",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freefall to Deep Blue | Skydiving & Scuba Diving",
    description:
      "Tandem skydives from 6,000m and guided reef dives 40m below the surface.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Freefall to Deep Blue",
  description:
    "Tandem skydiving and guided scuba diving experiences, from 6,000m altitude jumps to 40m reef and wreck dives.",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mogadishu",
    addressCountry: "SO",
  },
  priceRange: "$120-$1850",
  sameAs: [], // add real social media URLs here once you have them
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}