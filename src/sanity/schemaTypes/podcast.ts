import { defineField, defineType } from "sanity";

export const podcast = defineType({
  name: "podcast",
  title: "Podcast",
  type: "document",
  fields: [
    defineField({
      name: "youtubeId",
      title: "YouTube Video ID",
      type: "string",
      description: "Část URL za ?v= nebo youtu.be/. Např. pro youtube.com/watch?v=abc123 zadej abc123",
      validation: (Rule) => Rule.required().regex(/^[a-zA-Z0-9_-]{11}$/, {
        name: "YouTube ID",
        invert: false,
      }).error("YouTube ID musí mít přesně 11 znaků (písmena, číslice, - nebo _)"),
    }),
    defineField({
      name: "nazev",
      title: "Název epizody",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(120),
    }),
    defineField({
      name: "popis",
      title: "Krátký popis",
      type: "text",
      rows: 3,
      description: "Zobrazí se pod názvem epizody na webu (max. 200 znaků)",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "host",
      title: "Host / moderátor",
      type: "string",
      description: "Jméno hosta nebo moderátora (zobrazí se u karty)",
    }),
    defineField({
      name: "datumVydani",
      title: "Datum vydání",
      type: "date",
      options: {
        dateFormat: "DD. MM. YYYY",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "zverejneno",
      title: "Zveřejněno na webu",
      type: "boolean",
      initialValue: true,
      description: "Odškrtni pro dočasné skrytí epizody bez smazání",
    }),
  ],
  orderings: [
    {
      title: "Datum vydání (nejnovější)",
      name: "datumDesc",
      by: [{ field: "datumVydani", direction: "desc" }],
    },
    {
      title: "Datum vydání (nejstarší)",
      name: "datumAsc",
      by: [{ field: "datumVydani", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      nazev: "nazev",
      youtubeId: "youtubeId",
      host: "host",
      datumVydani: "datumVydani",
      zverejneno: "zverejneno",
    },
    prepare({ nazev, youtubeId, host, datumVydani, zverejneno }) {
      const datum = datumVydani
        ? new Date(datumVydani).toLocaleDateString("cs-CZ", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        : "Datum neuvedeno";
      return {
        title: nazev || "Bez názvu",
        subtitle: `${datum}${host ? ` · ${host}` : ""}${!zverejneno ? " · ❌ Skryto" : ""}`,
        media: youtubeId
          ? { _type: "image", asset: { url: `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg` } }
          : undefined,
      };
    },
  },
});
