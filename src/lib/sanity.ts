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
      useCdn: false,
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

// Extrahuje YouTube ID z celého linku nebo z čistého ID
export function extractYoutubeId(input: string): string {
  if (!input) return "";
  const watchMatch = input.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return watchMatch[1];
  const shortMatch = input.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];
  const embedMatch = input.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];
  return input; // předpokládá čisté ID
}

export interface PodcastEpizoda {
  _id: string;
  youtubeId: string;
  nazev: string;
  popis?: string;
  host?: string;
  datumVydani: string;
}

// ─── Bidli v číslech ───────────────────────────────────────────────────────

export interface BidliStat {
  num: number;
  decimals?: number;
  suffix?: string;
  label: string;
  sublabel?: string;
}

/** Hardcoded fallback — použije se když Sanity dokument ještě neexistuje */
export const DEFAULT_STATS: BidliStat[] = [
  { num: 624,   decimals: 0, suffix: "",       label: "specialistů",           sublabel: "připravených vám pomoci"   },
  { num: 105.5, decimals: 1, suffix: " mld.",  label: "Kč v úvěrech",          sublabel: "od roku 2003"              },
  { num: 12310, decimals: 0, suffix: "",       label: "prodaných nemovitostí",  sublabel: "od roku 2010"              },
  { num: 22,    decimals: 0, suffix: " let",   label: "na trhu",               sublabel: "stabilní a stále rostoucí" },
];

export async function getBidliStats(): Promise<BidliStat[]> {
  if (!client) return DEFAULT_STATS;
  // Singleton — vždy fetchujeme dokument s fixním ID "bidliStats"
  const doc = await client.fetch<{ stats?: BidliStat[] } | null>(
    `*[_type == "bidliStats" && _id == "bidliStats"][0]{ stats }`
  );
  if (!doc?.stats?.length) return DEFAULT_STATS;
  return doc.stats;
}
