import { useState } from 'react'
import Button from './Button'
import { join } from '../data/content'
export default function JoinForm() {
  const [sent, setSent] = useState(false)
  const submit = e => { e.preventDefault(); setSent(true) } // TODO: conectar a backend/Discord webhook
  if (sent) return <p className="card pad" role="status">Invocação enviada. Aguarde o contato da liderança.</p>
  return (
    <form className="form" onSubmit={submit}>
      {join.fields.map(f => (
        <label key={f.name}>{f.label}
          <input name={f.name} placeholder={f.ph} required />
        </label>
      ))}
      <Button type="submit" icon="Send">Enviar invocação</Button>
    </form>
  )
}