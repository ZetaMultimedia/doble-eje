import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import brandLogo from '../assets/Logo dark.svg'

export function LoginPage() {
  return (
    <div className="login_page">
      <header className="login_header">
        <a className="login_brand" href="/" aria-label="Volver al inicio">
          <img src={brandLogo} alt="" aria-hidden="true" />
          <span>Doble Eje Tools</span>
        </a>
        <span className="login_header_label">Acceso de clientes</span>
      </header>

      <Container as="main" className="login_main">
        <Row className="login_shell g-0">
          <Col lg={5} className="login_context">
            <div>
              <span className="login_eyebrow">Portal profesional</span>
              <h2>Herramientas para cada desafío</h2>
              <p>
                Gestioná tus consultas, pedidos y datos de cuenta desde un
                único lugar.
              </p>
            </div>

            <div className="login_context_grid" aria-label="Servicios disponibles">
              <div>
                <span>Catálogo técnico</span>
                <strong>Productos y especificaciones</strong>
              </div>
              <div>
                <span>Atención especializada</span>
                <strong>Asistencia para tu taller</strong>
              </div>
            </div>

            <p className="login_context_note">
              Soluciones para profesionales, talleres y empresas.
            </p>
          </Col>

          <Col lg={7} className="login_panel">
            <div className="login_panel_heading">
              <span className="login_eyebrow">Gestión de cuenta</span>
              <h1>Ingresar a tu cuenta</h1>
              <p>
                Accedé con el correo registrado para consultar tu información.
              </p>
            </div>

            <Form className="login_form">
              <Form.Group controlId="login_email">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="nombre@empresa.com"
                  required
                />
              </Form.Group>

              <Form.Group controlId="login_password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="Ingresá tu contraseña"
                  required
                />
              </Form.Group>

              <Form.Check
                id="remember_session"
                type="checkbox"
                label="Recordar sesión en este dispositivo"
              />

              <Button type="submit" className="login_submit">
                Ingresar a mi cuenta
                <span aria-hidden="true">→</span>
              </Button>
            </Form>

            <div className="login_account_note">
              <span>¿Todavía no tenés una cuenta?</span>
              <span>El registro estará disponible próximamente.</span>
            </div>
          </Col>
        </Row>
      </Container>

      <footer className="login_footer">Doble Eje Tools</footer>
    </div>
  )
}
