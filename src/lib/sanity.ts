import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

// Only valid if projectId matches Sanity's allowed format: a-z, 0-9 and dashes
const isValidProjectId = /^[a-z0-9-]+$/.test(projectId);

export const client = isValidProjectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
    })
  : null;

const builder = isValidProjectId && client ? imageUrlBuilder(client) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) return { url: () => "" };
  return builder.image(source);
}

// Fetch active KS dates sorted by date
export async function getKarierniSnidane(): Promise<KarierniSnidaneTermin[]> {
  if (!client) return [];
  return client.fetch<KarierniSnidaneTermin[]>(
    `*[_type == "karierniSnidane" && aktivni == true] | order(datum asc) {
      _id,
      datum,
      mesto,
      kapacita
    }`
  );
}

export interface KarierniSnidaneTermin {
  _id: string;
  datum: string;
  mesto: string;
  kapacita?: number;
}

// Fetch published podcast episodes sorted newest first
export async function getPodcasty(): Promise<PodcastEpizoda[]> {
  if (!client) return [];
  return client.fetch<PodcastEpizoda[]>(
    `*[_type == "podcast" && zverejneno == true] | order(datumVydani desc) {
      _id,
      youtubeId,
      nazev,
      popis,
      host,
      datumVydani
    }`
  );
}

export interface PodcastEpizoda {
  _id: string;
  youtubeId: string;
  nazev: string;
  popis?: string;
  host?: string;
  datumVydani: string;
}
