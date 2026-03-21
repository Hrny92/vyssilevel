import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ContactModal from "@/components/ContactModal";
import { ContactModalProvider } from "@/context/ContactModalContext";
import StructuredData from "@/components/StructuredData";
import { SITE, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Vyšší level kariéry | Bidli",
    template: "%s | Bidli",
  },
  description: SITE.description,
  keywords: [
    "Bidli",
    "kariéra ve financích",
    "finanční poradce",
    "finanční specialista",
    "manažer financí",
    "vyšší level kariéry",
    "kariérní snídaně Bidli",
    "práce ve financích ČR",
    "finanční poradenství kariéra",
    "vyssilevel.cz",
  ],
  authors: [{ name: "Bidli", url: SITE.url }],
  creator: "Bidli",
  publisher: "Bidli",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: SITE.url,
    siteName: SITE.name,
    title: "Vyšší level kariéry | Bidli",
    description: SITE.description,
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bidli — Vyšší level kariéry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyšší level kariéry | Bidli",
    description: SITE.description,
    images: ["/img/og-image.jpg"],
    site: SITE.twitterHandle,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    // Sem přidej Google Search Console verification token
    // google: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="cs" className={geistSans.variable}>
      <head>
        {/* ── Structured Data (GEO) ── */}
        <StructuredData data={[organizationJsonLd(), websiteJsonLd()]} />

        {/* ── Google Analytics ── */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="antialiased">
        <ContactModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
