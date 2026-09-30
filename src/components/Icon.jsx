export default function Icon({ name }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  }

  if (name === 'spark') {
    return (
      <svg {...common}>
        <path d="M12 3l1.2 3.7L17 8l-3.8 1.3L12 13l-1.2-3.7L7 8l3.8-1.3L12 3z" />
        <path d="M6 13l.8 2.3L9 16l-2.2.7L6 19l-.8-2.3L3 16l2.2-.7L6 13z" />
        <path d="M18 12l.9 2.7L22 16l-3.1 1.3L18 20l-.9-2.7L14 16l3.1-1.3L18 12z" />
      </svg>
    )
  }

  if (name === 'repair') {
    return (
      <svg {...common}>
        <path d="M14.7 6.3a4 4 0 0 0-5 5L3.5 17.5a2.1 2.1 0 1 0 3 3l6.2-6.2a4 4 0 0 0 5-5l-2.4 2.4-2.9-.8-.8-2.9 2.4-2.4z" />
      </svg>
    )
  }

  if (name === 'pc') {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M4 12a8 8 0 0 1 16 0" />
      <path d="M4 12v5a2 2 0 0 0 2 2h2v-7H4zM20 12v5a2 2 0 0 1-2 2h-2v-7h4z" />
      <path d="M16 19c0 1.1-.9 2-2 2h-2" />
    </svg>
  )
}
