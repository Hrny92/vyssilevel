import { defineField, defineType } from "sanity";

export const podcast = defineType({
  name: "podcast",
  title: "Podcast",
  type: "document",
  fields: [
    defineField({
      name: "youtubeId",
      title: "YouTube odkaz nebo ID",
      type: "string",
      description: "Vlož celý link videa (např. https://www.youtube.com/watch?v=abc123) nebo jen ID (abc123)",
      validation: (Rule) => Rule.required().custom((value) => {
        if (!value) return "Povinné pole";
        const isId = /^[a-zA-Z0-9_-]{11}$/.test(value);
        const isUrl = /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/.test(value)
          || /youtu\.be\/([a-zA-Z0-9_-]{11})/.test(value)
          || /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/.test(value);
        return isId || isUrl ? true : "Zadej platný YouTube link nebo 11znakové ID";
      }),
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
      host: "host",
      datumVydani: "datumVydani",
      zverejneno: "zverejneno",
    },
    prepare({ nazev, host, datumVydani, zverejneno }) {
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
      };
    },
  },
});
