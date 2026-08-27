import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const SITE_NAME = "BetaBridge";
const SITE_TITLE =
  "BetaBridge — Pass Google Play Closed Testing";
const SITE_DESCRIPTION =
  "Automated reciprocal closed testing squads, physical Android device package tracking, and anti-cheat AI proof verification for Google Play personal developer accounts.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s • BetaBridge"
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Google Play closed testing",
    "12 testers 14 days",
    "Google Play 20 testers",
    "Android beta testing",
    "reciprocal app testing",
    "BetaBridge",
    "Play Store closed track",
    "Google Play production access"
  ],
  authors: [{ name: "BetaBridge Team" }],
  creator: "BetaBridge",
  publisher: "BetaBridge",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/assets/images/Featured_Graphic_1024x500.avif",
        width: 1024,
        height: 500,
        alt: "BetaBridge — Google Play Closed Testing Platform"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/assets/images/Featured_Graphic_1024x500.avif"]
  },
  category: "technology"
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BetaBridge",
  operatingSystem: "Android 8.0+",
  applicationCategory: "DeveloperApplication",
  url: SITE_URL,
  downloadUrl:
    "https://play.google.com/store/apps/details?id=mhq.betabridge.app",
  description: SITE_DESCRIPTION,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  publisher: {
    "@type": "Organization",
    name: "BetaBridge",
    url: SITE_URL
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BetaBridge",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/app_icon.png`,
  email: "minhaj99mhq@gmail.com"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen text-slate-900 selection:bg-violet-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
