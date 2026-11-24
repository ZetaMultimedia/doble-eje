import { describe, expect, it } from 'vitest'
import { filterCatalogItems } from './filterCatalogItems'

const items = [
  { category: 'Corte', title: 'Primero' },
  { category: 'Medición', title: 'Segundo' },
  { category: 'Corte', title: 'Tercero' },
]

const itemsWithNullCategory = [
  { category: 'Corte ', title: 'Espacio final' },
  { category: null, title: 'Sin categoría' },
  { category: 'Corte', title: 'Recorte' },
]

describe('filterCatalogItems', () => {
  it('returns every item when no category is selected', () => {
    expect(filterCatalogItems(items, null)).toEqual(items)
  })

  it('returns exact category matches in their original order', () => {
    expect(filterCatalogItems(items, 'Corte')).toEqual([items[0], items[2]])
  })

  it('returns all items including null-category records when no category is selected', () => {
    expect(filterCatalogItems(itemsWithNullCategory, null)).toEqual(
      itemsWithNullCategory,
    )
  })

  it('matches trailing-space categories exactly', () => {
    expect(filterCatalogItems(itemsWithNullCategory, 'Corte ')).toEqual([
      itemsWithNullCategory[0],
    ])
  })

  it('excludes null-category records when a specific category is selected', () => {
    expect(filterCatalogItems(itemsWithNullCategory, 'Corte')).toEqual([
      itemsWithNullCategory[2],
    ])
  })
})
