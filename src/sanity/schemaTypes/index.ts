import { type SchemaTypeDefinition } from 'sanity'
import { karierniSnidane } from './karierniSnidane'
import { podcast } from './podcast'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [karierniSnidane, podcast],
}
