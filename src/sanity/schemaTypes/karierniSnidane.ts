import { defineField, defineType } from "sanity";

export const karierniSnidane = defineType({
  name: "karierniSnidane",
  title: "Kariérní snídaně",
  type: "document",
  fields: [
    defineField({
      name: "datum",
      title: "Datum a čas",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: "DD. MM. YYYY",
        timeFormat: "HH:mm",
        timeStep: 30,
      },
    }),
    defineField({
      name: "mesto",
      title: "Město",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Praha", value: "Praha" },
          { title: "Brno", value: "Brno" },
          { title: "Ostrava", value: "Ostrava" },
          { title: "Olomouc", value: "Olomouc" },
          { title: "Plzeň", value: "Plzeň" },
          { title: "Hradec Králové", value: "Hradec Králové" },
          { title: "České Budějovice", value: "České Budějovice" },
          { title: "Pardubice", value: "Pardubice" },
        ],
      },
    }),
    defineField({
      name: "aktivni",
      title: "Aktivní termín",
      type: "boolean",
      initialValue: true,
      description: "Skryt termín z formuláře",
    }),
    defineField({
      name: "kapacita",
      title: "Kapacita (volitelné)",
      type: "number",
      description: "Maximální počet účastníků (0 = neomezeno)",
    }),
    defineField({
      name: "poznamka",
      title: "Interní poznámka",
      type: "text",
      rows: 2,
    }),
  ],
  orderings: [
    {
      title: "Datum (nejdříve)",
      name: "datumAsc",
      by: [{ field: "datum", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      datum: "datum",
      mesto: "mesto",
      aktivni: "aktivni",
    },
    prepare({ datum, mesto, aktivni }) {
      const date = datum
        ? new Date(datum).toLocaleDateString("cs-CZ", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        : "Datum neuvedeno";
      return {
        title: `${date} — ${mesto || "Město neuvedeno"}`,
        subtitle: aktivni ? "✅ Aktivní" : "❌ Skrytý",
      };
    },
  },
});
