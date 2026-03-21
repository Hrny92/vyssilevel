import { defineType, defineField, defineArrayMember } from 'sanity'

export const bidliStats = defineType({
  name: 'bidliStats',
  title: 'Bidli v číslech',
  type: 'document',
  // Singleton — v Sanity studiu vytvořte pouze jeden dokument tohoto typu
  fields: [
    defineField({
      name: 'stats',
      title: 'Statistiky',
      type: 'array',
      validation: (Rule) => Rule.min(1).max(8),
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Statistika',
          preview: {
            select: { title: 'label', subtitle: 'num' },
            prepare({ title, subtitle }) {
              return { title, subtitle: String(subtitle) }
            },
          },
          fields: [
            defineField({
              name: 'num',
              title: 'Číslo',
              type: 'number',
              description: 'Např. 624 nebo 105.5',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'decimals',
              title: 'Desetinná místa',
              type: 'number',
              description: 'Počet des. míst u čísla (0 = celé číslo, 1 = jedno des. místo). Výchozí: 0',
              initialValue: 0,
              validation: (Rule) => Rule.min(0).max(3),
            }),
            defineField({
              name: 'suffix',
              title: 'Přípona za číslem',
              type: 'string',
              description: 'Např. " let", " mld.", "+" (nebo nechte prázdné)',
            }),
            defineField({
              name: 'label',
              title: 'Popis čísla',
              type: 'string',
              description: 'Např. "specialistů", "prodaných nemovitostí"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'sublabel',
              title: 'Podpopis',
              type: 'string',
              description: 'Např. "od roku 2003", "připravených vám pomoci"',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Bidli v číslech' }
    },
  },
})
