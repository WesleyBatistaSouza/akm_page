import * as L from 'lucide-react'
export default function Icon({ name, size = 18, ...p }) {
  const C = L[name] || L.Circle
  return <C size={size} aria-hidden="true" {...p} />
}
