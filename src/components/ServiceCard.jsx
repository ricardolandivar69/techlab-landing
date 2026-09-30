import Icon from './Icon.jsx'

export default function ServiceCard({ service, expanded, onToggle }) {
  return (
    <article className={`service-card ${expanded ? 'is-open' : ''}`}>
      <div className="service-icon">
        <Icon name={service.icon} />
      </div>
      <div className="service-copy">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>

      <button
        type="button"
        className="service-toggle"
        onClick={onToggle}
        aria-expanded={expanded}
      >
        {expanded ? 'Ocultar detalles' : 'Ver qué incluye'}
        <span aria-hidden="true">{expanded ? '−' : '+'}</span>
      </button>

      {expanded && (
        <ul className="service-details">
          {service.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}
    </article>
  )
}
