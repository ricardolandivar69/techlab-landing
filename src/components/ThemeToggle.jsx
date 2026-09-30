export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={dark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      aria-pressed={dark}
    >
      <span aria-hidden="true">☀</span>
      <span className="theme-track">
        <span className="theme-thumb" />
      </span>
      <span aria-hidden="true">☾</span>
    </button>
  )
}
