import { useState, useEffect } from 'react'
import Icon from './Icon'
import { nav } from '../data/content'
export default function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const k = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [])
  return (
    <header className="header">
      <div className="bar">
        <button className="icon-btn" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(o => !o)}>
          <Icon name={open ? 'X' : 'Menu'} size={22} />
        </button>
        <a href="#inicio" className="brand"><strong>AKATSUKI</strong><small>MOBILE</small></a>
        <span className="logo" aria-hidden="true">AKM</span>
      </div>
      <nav id="menu" className={`menu ${open ? 'open' : ''}`} aria-label="Principal" aria-hidden={!open}>
        {nav.map(i => <a key={i.href} href={i.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{i.label}</a>)}
      </nav>
    </header>
  )
}
