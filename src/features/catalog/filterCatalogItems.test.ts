import { describe, expect, it } from 'vitest'
import { filterCatalogItems } from './filterCatalogItems'

const items = [
  { category: 'Corte', title: 'Primero' },
  { category: 'Medición', title: 'Segundo' },
  { category: 'Corte', title: 'Tercero' },
]

describe('filterCatalogItems', () => {
  it('returns every item when no category is selected', () => {
    expect(filterCatalogItems(items, null)).toEqual(items)
  })

  it('returns exact category matches in their original order', () => {
    expect(filterCatalogItems(items, 'Corte')).toEqual([items[0], items[2]])
  })
})
