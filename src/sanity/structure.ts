import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Vyssilevel CMS")
    .items([
      // ── Singleton: Bidli v číslech ──────────────────────────────────────
      S.listItem()
        .title("Bidli v číslech")
        .icon(() => "📊")
        .child(
          S.document()
            .schemaType("bidliStats")
            .documentId("bidliStats")  // fixní ID — vždy jen jeden dokument
            .title("Bidli v číslech")
        ),

      S.divider(),

      // ── Kariérní snídaně ────────────────────────────────────────────────
      S.listItem()
        .title("Kariérní snídaně")
        .icon(() => "☕")
        .child(
          S.documentTypeList("karierniSnidane")
            .title("Termíny kariérních snídaní")
            .defaultOrdering([{ field: "datum", direction: "asc" }])
        ),

      // ── Podcasty ────────────────────────────────────────────────────────
      S.listItem()
        .title("Podcasty")
        .icon(() => "🎙️")
        .child(
          S.documentTypeList("podcast")
            .title("Epizody podcastu")
            .defaultOrdering([{ field: "datumVydani", direction: "desc" }])
        ),
    ]);
