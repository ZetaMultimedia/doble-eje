import { useState } from 'react'
import { Container } from 'react-bootstrap'
import brandLogo from '../assets/Logo dark.svg'
import catalogSeed from '../data/catalog.seed.json'
import { filterCatalogItems } from '../features/catalog/filterCatalogItems'

const catalogItems = catalogSeed.map((item) => ({
  code: item.Código,
  category: item.Categoría,
  title: item['Herramienta / descripción'],
  details: [
    ['Marca', item.Marca],
    ['Modelo / medida', item['Modelo / medida']],
    ['Estado', item.Estado],
    ['Precio venta (ARS)', item['Precio venta (ARS)']],
    ['Stock', item.Stock],
    ['Disponibilidad', item.Disponibilidad],
    ['Observaciones', item.Observaciones],
  ] as const,
}))

const catalogCategories = [
  ...new Set(
    catalogItems
      .map((item) => item.category)
      .filter((category): category is string => category !== null),
  ),
]

export function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const filteredItems = filterCatalogItems(catalogItems, selectedCategory)

  return (
    <div className="catalog_page">
      <header className="catalog_header">
        <Container className="catalog_header_inner">
          <a className="catalog_brand" href="/" aria-label="Doble Eje Tools, inicio">
            <img src={brandLogo} alt="" aria-hidden="true" />
            <span>Doble Eje Tools</span>
          </a>

          <nav className="catalog_nav" aria-label="Navegación principal">
            <a href="/">Inicio</a>
            <a href="/catalog" aria-current="page">
              Catálogo
            </a>
            <a href="/login">Ingresar</a>
          </nav>
        </Container>
      </header>

      <main>
        <section className="catalog_intro" aria-labelledby="catalog_title">
          <Container>
            <span className="catalog_kicker">Líneas de herramientas</span>
            <h1 id="catalog_title">Catálogo técnico</h1>
            <p>
              Explorá las categorías y herramientas registradas en el catálogo
              construido a partir de la fuente verificada.
            </p>
          </Container>
        </section>

        <Container className="catalog_content">
          <aside className="catalog_filters" aria-labelledby="catalog_filters_title">
            <div className="catalog_panel_heading">
              <span>Vista general</span>
              <h2 id="catalog_filters_title">Categorías</h2>
            </div>
            <ul>
              <li>
                <button
                  type="button"
                  aria-pressed={selectedCategory === null}
                  onClick={() => setSelectedCategory(null)}
                >
                  Todas las categorías
                </button>
              </li>
              {catalogCategories.map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    aria-pressed={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
            <p>Seleccioná una categoría para ajustar esta vista.</p>
          </aside>

          <section className="catalog_results" aria-labelledby="catalog_results_title">
            <div className="catalog_results_heading">
              <div>
                <span className="catalog_kicker">Datos del catálogo</span>
                <h2 id="catalog_results_title">Herramientas registradas</h2>
              </div>
              <p aria-label="Categoría seleccionada">
                {selectedCategory ?? 'Todas las categorías'}
              </p>
            </div>

            <div className="catalog_grid">
              {filteredItems.map((item) => (
                <article className="catalog_card" key={item.code}>
                  <div className="catalog_card_visual" aria-hidden="true">
                    <span>{item.code}</span>
                    <div />
                  </div>
                  <div className="catalog_card_body">
                    <span>{item.category ?? ''}</span>
                    <h3>{item.title ?? ''}</h3>
                    <p>
                      {item.details.map(([label, value]) => (
                        <span key={label}>
                          {label}: {value === null ? '' : String(value)}{' '}
                        </span>
                      ))}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Container>

        <section className="catalog_note" aria-labelledby="catalog_note_title">
          <Container>
            <div>
              <span className="catalog_kicker">Fuente del catálogo</span>
              <h2 id="catalog_note_title">Información conectada y verificable</h2>
            </div>
            <p>
              Las categorías y herramientas mostradas provienen de la fuente
              confirmada del catálogo.
            </p>
          </Container>
        </section>
      </main>

      <footer className="catalog_footer">
        <Container className="catalog_footer_inner">
          <div>
            <img src={brandLogo} alt="" aria-hidden="true" />
            <span>Doble Eje Tools</span>
          </div>
          <p>Catálogo técnico con datos verificados.</p>
        </Container>
      </footer>
    </div>
  )
}
