import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ContactModal from "@/components/ContactModal";
import { ContactModalProvider } from "@/context/ContactModalContext";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Vyšší level kariéry | Bidli",
    template: "%s | Bidli",
  },
  description:
    "Přijď na vyšší level kariéry s Bidli. Finanční specialista, Manažer, kariérní snídaně. Finance, reality, energetika a technologie pod jednou střechou.",
  keywords: ["Bidli", "kariéra", "finanční poradce", "manažer", "vyšší level"],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Vyssilevel.cz",
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
