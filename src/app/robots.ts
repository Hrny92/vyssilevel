import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/vyssilevel/",   // Sanity Studio
          "/studio/",       // Sanity Studio (záložní route)
          "/api/",
        ],
      },
      // AI crawlery necháme indexovat vše (GEO)
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/vyssilevel/", "/studio/", "/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/vyssilevel/", "/studio/", "/api/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/vyssilevel/", "/studio/", "/api/"],
      },
      {
        userAgent: "Gemini",
        allow: "/",
        disallow: ["/vyssilevel/", "/studio/", "/api/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
