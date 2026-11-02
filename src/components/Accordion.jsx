import { useState } from 'react'
import Icon from './Icon'
export default function Accordion({ item, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`acc card ${open ? 'is-open' : ''}`}>
      <button className="acc-head" aria-expanded={open} aria-controls={`p-${item.id}`} onClick={() => setOpen(o => !o)}>
        <span className="acc-icon"><Icon name={item.icon} /></span>
        <span className="acc-title"><b>{item.name}</b><small>{item.sub}</small></span>
        <span className="badge">{item.badge}</span>
        <Icon name="ChevronDown" className="chev" />
      </button>
      <div id={`p-${item.id}`} className="acc-panel" role="region"><div>{children}</div></div>
    </div>
  )
}
