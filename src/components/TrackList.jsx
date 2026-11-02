// Lista de jogadores renderizada via map()
export default function PlayerList({ players }) {
  if (!players.length) return <p className="muted pad">Roster em formação.</p>
  return (
    <ul className="players">
      {players.map(p => (
        <li key={p.name}>
          <span className="role">{p.role}</span>
          <span className="who"><b>{p.name}</b></span>
          <span className="pos">{p.pos}</span>
        </li>
      ))}
    </ul>
  )
}
