import { useEffect, useState } from 'react'
import ServiceCard from './components/ServiceCard.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import { benefits, services, steps } from './data.js'

const LOGO_URL = 'https://ugc.production.linktr.ee/4ca3b6b0-c09a-48f9-ae08-dfde96f1d7b3_techlab-logo.png?io=true&size=avatar-v3_0'
const INSTAGRAM_URL = 'https://www.instagram.com/techlab.ec/'
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=593992262642&text=%C2%A1Hola%20me%20gustaria%20arreglar%20mi%20computadora%20con%20ustedes!%F0%9F%98%8A%F0%9F%96%A5%F0%9F%92%A1'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('techlab-theme') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openService, setOpenService] = useState(null)
  const [logoFailed, setLogoFailed] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('techlab-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  function handleNavClick() {
    setMenuOpen(false)
  }

  function toggleService(id) {
    setOpenService((current) => (current === id ? null : id))
  }

  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" onClick={handleNavClick}>
            <span className="brand-mark" aria-hidden="true">
              {logoFailed ? 'TL' : (
                <img src={LOGO_URL} alt="" onError={() => setLogoFailed(true)} />
              )}
            </span>
            <span>TechLab<span className="brand-dot">.ec</span></span>
          </a>

          <nav id="mobile-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
            <a href="#inicio" onClick={handleNavClick}>Inicio</a>
            <a href="#servicios" onClick={handleNavClick}>Servicios</a>
            <a href="#proceso" onClick={handleNavClick}>Cómo trabajamos</a>
            <a href="#nosotros" onClick={handleNavClick}>Por qué TechLab</a>
            <a href="#contacto" onClick={handleNavClick}>Contacto</a>
          </nav>

          <div className="nav-actions">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              className="menu-button"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">SERVICIO TÉCNICO · ECUADOR</p>
              <h1>Tu equipo,<br /><span>en buenas manos.</span></h1>
              <p className="hero-lead">
                Reparación, mantenimiento, ensamble y soporte técnico para estudiantes,
                profesionales y pequeños negocios.
              </p>
              <div className="hero-actions">
                <a className="button primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Solicitar servicio</a>
                <a className="button secondary" href="#servicios">Ver servicios</a>
              </div>
              <div className="hero-notes" aria-label="Características del servicio">
                <span>Diagnóstico técnico</span>
                <span>Atención personalizada</span>
                <span>Hardware + software</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Identidad de TechLab">
              <div className="orb orb-one" />
              <div className="orb orb-two" />
              <div className="logo-card">
                <div className="logo-frame">
                  {logoFailed ? (
                    <div className="logo-fallback">TechLab.ec</div>
                  ) : (
                    <img
                      className="hero-logo"
                      src={LOGO_URL}
                      alt="Logo de TechLab.ec"
                      onError={() => setLogoFailed(true)}
                    />
                  )}
                </div>
                <div className="logo-card-copy">
                  <span className="status-dot" />
                  <div>
                    <strong>TechLab.ec</strong>
                    <p>Servicio técnico y soluciones tecnológicas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="servicios">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">01 / SERVICIOS</p>
              <h2>Soluciones para mantener tu equipo funcionando.</h2>
              <p>Selecciona un servicio para ver de forma sencilla qué incluye.</p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  expanded={openService === service.id}
                  onToggle={() => toggleService(service.id)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="proceso">
          <div className="container process-layout">
            <div className="section-heading sticky-copy">
              <p className="eyebrow">02 / PROCESO</p>
              <h2>Cómo trabajamos.</h2>
              <p>Un proceso directo para que sepas qué ocurre antes de autorizar el trabajo.</p>
            </div>

            <div className="steps-list">
              {steps.map((step) => (
                <article className="step-card" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="nosotros">
          <div className="container">
            <div className="section-heading compact">
              <p className="eyebrow">03 / TECHLAB</p>
              <h2>Tecnología explicada de forma clara.</h2>
              <p>El objetivo no es complicar el problema: es ayudarte a entenderlo y resolverlo.</p>
            </div>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <article className="benefit-card" key={benefit.title}>
                  <span className="benefit-index">0{index + 1}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contacto">
          <div className="container contact-card">
            <div>
              <p className="eyebrow">04 / CONTACTO</p>
              <h2>¿Tu equipo necesita ayuda?</h2>
              <p>Cuéntanos qué ocurre y coordinamos la mejor forma de revisar tu caso.</p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Escribir por WhatsApp</a>
              <a className="button secondary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram · @techlab.ec</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div>
            <strong>TechLab.ec</strong>
            <p>Servicio técnico en Ecuador.</p>
          </div>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>
    </>
  )
}
