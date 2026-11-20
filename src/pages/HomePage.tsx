import { Container } from 'react-bootstrap'
import brandLogo from '../assets/Logo dark.svg'

const categories = [
  {
    code: '01',
    title: 'Herramientas manuales',
    detail: 'Llaves, tubos y soluciones de ajuste',
  },
  {
    code: '02',
    title: 'Herramientas eléctricas',
    detail: 'Equipos para trabajo intensivo',
  },
  {
    code: '03',
    title: 'Medición y diagnóstico',
    detail: 'Instrumentos para control y precisión',
  },
  {
    code: '04',
    title: 'Accesorios de taller',
    detail: 'Organización, sujeción y apoyo',
  },
]

const featuredAreas = [
  {
    index: 'A',
    title: 'Control de torque',
    detail: 'Herramientas pensadas para ajustes consistentes.',
  },
  {
    index: 'B',
    title: 'Trabajo de banco',
    detail: 'Utillaje para preparación, montaje y mantenimiento.',
  },
  {
    index: 'C',
    title: 'Organización técnica',
    detail: 'Soluciones para mantener cada elemento en su lugar.',
  },
]

export function HomePage() {
  return (
    <div className="home_page">
      <header className="home_header">
        <Container className="home_header_inner">
          <a className="home_brand" href="/" aria-label="Doble Eje Tools, inicio">
            <img src={brandLogo} alt="" aria-hidden="true" />
            <span>Doble Eje Tools</span>
          </a>

          <nav className="home_nav" aria-label="Navegación principal">
            <a href="/" aria-current="page">
              Inicio
            </a>
            <a href="/login">Ingresar</a>
          </nav>
        </Container>
      </header>

      <main>
        <Container>
          <section className="home_hero" aria-labelledby="home_title">
            <div className="home_hero_copy">
              <span className="home_kicker">Equipamiento para taller</span>
              <h1 id="home_title">Herramientas para cada desafío</h1>
              <p>
                Una experiencia clara para explorar soluciones de trabajo,
                medición y organización profesional.
              </p>
              <a className="home_primary_link" href="/login">
                Acceso de clientes
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="home_hero_visual" aria-hidden="true">
              <div className="home_hero_grid" />
              <div className="home_tool_outline">
                <span />
                <span />
                <span />
              </div>
              <div className="home_visual_label">
                <span>Área de trabajo</span>
                <strong>Precisión · Resistencia · Control</strong>
              </div>
            </div>
          </section>

          <section className="home_section" aria-labelledby="categories_title">
            <div className="home_section_heading">
              <div>
                <span className="home_kicker">Líneas de trabajo</span>
                <h2 id="categories_title">Categorías principales</h2>
              </div>
              <p>Una vista general de los rubros disponibles.</p>
            </div>

            <div className="home_category_grid">
              {categories.map((category) => (
                <article className="home_category_card" key={category.code}>
                  <span className="home_card_code">{category.code}</span>
                  <div className="home_category_mark" aria-hidden="true" />
                  <h3>{category.title}</h3>
                  <p>{category.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="home_section" aria-labelledby="featured_title">
            <div className="home_section_heading">
              <div>
                <span className="home_kicker">Selección técnica</span>
                <h2 id="featured_title">Áreas destacadas</h2>
              </div>
              <p>Contenido informativo, sin acciones comerciales activas.</p>
            </div>

            <div className="home_featured_grid">
              {featuredAreas.map((area) => (
                <article className="home_featured_card" key={area.index}>
                  <div className="home_featured_visual" aria-hidden="true">
                    <span>{area.index}</span>
                  </div>
                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="home_value" aria-labelledby="value_title">
            <div>
              <span className="home_kicker">Enfoque Doble Eje</span>
              <h2 id="value_title">Una base sólida para el trabajo diario</h2>
              <p>
                Organizamos la experiencia alrededor de información clara,
                categorías reconocibles y una interfaz preparada para crecer.
              </p>
            </div>
            <dl className="home_value_list">
              <div>
                <dt>Diseño</dt>
                <dd>Lectura directa y jerarquía técnica</dd>
              </div>
              <div>
                <dt>Acceso</dt>
                <dd>Controles visibles y navegación simple</dd>
              </div>
              <div>
                <dt>Escala</dt>
                <dd>Estructura adaptable a cada pantalla</dd>
              </div>
            </dl>
          </section>
        </Container>
      </main>

      <footer className="home_footer">
        <Container className="home_footer_inner">
          <div className="home_footer_brand">
            <img src={brandLogo} alt="" aria-hidden="true" />
            <span>Doble Eje Tools</span>
          </div>
          <p>Herramientas y equipamiento para entornos de trabajo.</p>
        </Container>
      </footer>
    </div>
  )
}
