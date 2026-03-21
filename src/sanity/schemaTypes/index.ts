import { type SchemaTypeDefinition } from 'sanity'
import { karierniSnidane } from './karierniSnidane'
import { podcast } from './podcast'
import { bidliStats } from './bidliStats'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [karierniSnidane, podcast, bidliStats],
}
