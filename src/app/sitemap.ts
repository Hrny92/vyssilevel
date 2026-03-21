import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${SITE.url}/bidli`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE.url}/bidli/proc-bidli`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/kariera/financni-specialista`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/kariera/manazer`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/kariera/karierrni-snidane`,
      lastModified: now,
      changeFrequency: "daily",   // termíny se mění
      priority: 0.85,
    },
    {
      url: `${SITE.url}/podcasty`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/kontakt`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  return routes;
}
