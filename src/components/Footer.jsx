import { useState } from 'react'
import Button from './Button'
import Icon from './Icon'
import { footer } from '../data/content'
export default function Footer() {
  const [msg, setMsg] = useState('')
  const share = async () => {
    const data = { title: 'Akatsuki Mobile', url: location.href }
    try {
      if (navigator.share) await navigator.share(data)
      else { await navigator.clipboard.writeText(data.url); setMsg('Link copiado!'); setTimeout(() => setMsg(''), 2000) }
    } catch { /* cancelado */ }
  }
  return (
    <footer id="contato" className="footer">
      <h2 className="brand-big">AKATSUKI<br />MOBILE</h2>
      <p className="muted"><em>{footer.tagline}</em></p>
      <ul className="links">
        {footer.links.map(l => <li key={l.label}><a href={l.href} target="_blank" rel="noopener noreferrer"><Icon name="ExternalLink" size={13} />{l.label}</a></li>)}
      </ul>
      <Button variant="ghost" icon="Share2" onClick={share}>Compartilhar</Button>
      <p className="muted small" role="status">{msg}</p>
      <p className="muted small">{footer.legal}</p>
      <p className="muted small">{footer.created}</p>
    </footer>
  )
}
