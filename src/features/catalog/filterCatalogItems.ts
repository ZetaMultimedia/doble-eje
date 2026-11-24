export function filterCatalogItems<T extends { category: string }>(
  items: T[],
  selectedCategory: string | null,
) {
  return selectedCategory === null
    ? items
    : items.filter((item) => item.category === selectedCategory)
}
