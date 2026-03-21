import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Vyssilevel CMS")
    .items([
      S.listItem()
        .title("Kariérní snídaně")
        .icon(() => "☕")
        .child(
          S.documentTypeList("karierniSnidane")
            .title("Termíny kariérních snídaní")
            .defaultOrdering([{ field: "datum", direction: "asc" }])
        ),
      S.listItem()
        .title("Podcasty")
        .icon(() => "🎙️")
        .child(
          S.documentTypeList("podcast")
            .title("Epizody podcastu")
            .defaultOrdering([{ field: "datumVydani", direction: "desc" }])
        ),
    ]);
