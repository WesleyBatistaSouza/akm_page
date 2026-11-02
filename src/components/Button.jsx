import Icon from './Icon'
export default function Button({ icon, variant = 'primary', href, children, ...p }) {
  const cls = `btn btn-${variant}`
  const inner = <>{icon && <Icon name={icon} size={16} />}{children}</>
  return href ? <a className={cls} href={href} {...p}>{inner}</a> : <button className={cls} {...p}>{inner}</button>
}
