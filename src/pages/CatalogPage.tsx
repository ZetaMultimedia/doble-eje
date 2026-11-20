import { Container } from 'react-bootstrap'
import brandLogo from '../assets/Logo dark.svg'

const catalogCategories = [
  'Herramientas manuales',
  'Herramientas eléctricas',
  'Medición y diagnóstico',
  'Accesorios de taller',
]

const catalogItems = [
  {
    code: 'A1',
    category: 'Perforación',
    title: 'Equipos para perforación y ajuste',
    detail: 'Presentación visual pendiente de integración con el catálogo.',
  },
  {
    code: 'B2',
    category: 'Herramientas manuales',
    title: 'Conjuntos para trabajo de banco',
    detail: 'Ficha informativa preparada para recibir datos confirmados.',
  },
  {
    code: 'C3',
    category: 'Corte',
    title: 'Soluciones para corte y preparación',
    detail: 'Contenido comercial no disponible en esta vista estática.',
  },
  {
    code: 'D4',
    category: 'Medición',
    title: 'Instrumentos de control dimensional',
    detail: 'Estructura visual lista para una futura fuente de datos.',
  },
  {
    code: 'E5',
    category: 'Taller',
    title: 'Equipamiento para organización técnica',
    detail: 'Presentación neutral sin disponibilidad ni transacciones.',
  },
  {
    code: 'F6',
    category: 'Accesorios',
    title: 'Complementos para entornos de trabajo',
    detail: 'Información detallada pendiente de validación e integración.',
  },
]

export function CatalogPage() {
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
              Explorá la estructura de categorías y áreas de equipamiento. Los
              datos comerciales se incorporarán desde una fuente confirmada.
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
              {catalogCategories.map((category, index) => (
                <li key={category}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {category}
                </li>
              ))}
            </ul>
            <p>
              Los filtros interactivos se habilitarán junto con la integración
              del catálogo.
            </p>
          </aside>

          <section className="catalog_results" aria-labelledby="catalog_results_title">
            <div className="catalog_results_heading">
              <div>
                <span className="catalog_kicker">Presentación inicial</span>
                <h2 id="catalog_results_title">Áreas de producto</h2>
              </div>
              <p aria-label="Estado de la vista">Contenido estático</p>
            </div>

            <div className="catalog_grid">
              {catalogItems.map((item) => (
                <article className="catalog_card" key={item.code}>
                  <div className="catalog_card_visual" aria-hidden="true">
                    <span>{item.code}</span>
                    <div />
                  </div>
                  <div className="catalog_card_body">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Container>

        <section className="catalog_note" aria-labelledby="catalog_note_title">
          <Container>
            <div>
              <span className="catalog_kicker">Próxima etapa</span>
              <h2 id="catalog_note_title">Información conectada y verificable</h2>
            </div>
            <p>
              Esta estructura está preparada para mostrar categorías y
              productos cuando el contrato de datos esté disponible.
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
          <p>Catálogo técnico en preparación.</p>
        </Container>
      </footer>
    </div>
  )
}
