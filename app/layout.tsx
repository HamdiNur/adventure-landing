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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}