import Icon from './Icon'
export default function Section({ id, eyebrow, icon, title, intro, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-t`}>
      {eyebrow && <p className="eyebrow"><Icon name={icon} size={13} />{eyebrow}</p>}
      <h2 id={`${id}-t`}>{title}</h2>
      {intro && <p className="muted">{intro}</p>}
      {children}
    </section>
  )
}
