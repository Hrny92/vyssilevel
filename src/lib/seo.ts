import type { Metadata } from "next";

// ─── Centrální konfigurace webu ────────────────────────────────────────────
export const SITE = {
  name: "Bidli | Vyšší level kariéry",
  shortName: "Bidli",
  url: "https://vyssilevel.cz",
  description:
    "Přijď na vyšší level kariéry s Bidli. Finanční specialista, manažer, kariérní snídaně. Finance, reality, energetika a pojišťovnictví pod jednou střechou. Stabilní zázemí, neomezené výdělky, moderní nástroje.",
  locale: "cs_CZ",
  /** Výchozí OG obrázek — doporučená velikost 1200×630 px */
  ogImage: "/img/og-image.jpg",
  /** Twitter/X handle */
  twitterHandle: "@BIDLIsev",
  /** Telefonní číslo organizace */
  phone: "+420 123 456 789",
  /** Adresa */
  address: {
    street: "Česká republika",
    country: "CZ",
  },
} as const;

// ─── Klíčová slova pro celý web ────────────────────────────────────────────
export const GLOBAL_KEYWORDS = [
  "Bidli",
  "kariéra ve financích",
  "finanční poradce",
  "finanční specialista",
  "manažer financí",
  "vyšší level kariéry",
  "kariérní snídaně",
  "práce v pojišťovnictví",
  "práce v realitách",
  "práce v energetice",
  "finanční svoboda",
  "obchodní zástupce",
  "vyssilevel.cz",
];

// ─── Helper pro generování plné Next.js Metadata na každé stránce ─────────
export function pageMeta({
  title,
  description,
  path,
  ogImage,
  keywords = [],
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;          // e.g. "/kariera/financni-specialista"
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE.url}${path}`;
  const image = ogImage ?? SITE.ogImage;
  const fullTitle = title.includes("Bidli") ? title : `${title} | Bidli`;

  return {
    title,
    description,
    keywords: [...GLOBAL_KEYWORDS, ...keywords],
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: SITE.name,
      locale: SITE.locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      site: SITE.twitterHandle,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

// ─── JSON-LD: Organizace (použij na root layout nebo hlavní stránce) ───────
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.shortName,
    legalName: "Bidli",
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/img/logo.svg`,
    },
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: SITE.address.country,
    },
    sameAs: [
      "https://www.bidli.cz",
      "https://www.facebook.com/bidli",
      `https://www.youtube.com/@BIDLIsev%C5%A1%C3%ADmv%C5%A1udy`,
    ],
  };
}

// ─── JSON-LD: WebSite (pro sitelinks searchbox a AI indexaci) ─────────────
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "cs",
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── JSON-LD: BreadcrumbList ───────────────────────────────────────────────
export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE.url}${item.url}`,
    })),
  };
}

// ─── JSON-LD: JobPosting ───────────────────────────────────────────────────
export function jobPostingJsonLd({
  title,
  description,
  url,
  skills = [],
}: {
  title: string;
  description: string;
  url: string;
  skills?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    url: `${SITE.url}${url}`,
    hiringOrganization: {
      "@type": "Organization",
      name: SITE.shortName,
      sameAs: SITE.url,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CZ",
        addressLocality: "Česká republika",
      },
    },
    employmentType: "CONTRACTOR",
    workHours: "Flexibilní pracovní doba",
    skills: skills.join(", "),
    datePosted: new Date().toISOString().split("T")[0],
    validThrough: new Date(
      Date.now() + 365 * 24 * 60 * 60 * 1000
    ).toISOString().split("T")[0],
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "CZK",
      value: {
        "@type": "QuantitativeValue",
        minValue: 30000,
        unitText: "MONTH",
      },
    },
  };
}

// ─── JSON-LD: FAQPage ──────────────────────────────────────────────────────
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── JSON-LD: Event (kariérní snídaně) ────────────────────────────────────
export function eventJsonLd({
  name,
  description,
  startDate,
  location,
  url,
}: {
  name: string;
  description: string;
  startDate: string;
  location: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    startDate,
    location: {
      "@type": "Place",
      name: location,
      address: {
        "@type": "PostalAddress",
        addressLocality: location,
        addressCountry: "CZ",
      },
    },
    organizer: {
      "@type": "Organization",
      name: SITE.shortName,
      url: SITE.url,
    },
    url: `${SITE.url}${url}`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  };
}
