import Icon from './Icon'
export default function LeaderCard({ l }) {
  return (
    <article className="card leader">
      <div className="leader-top">
        <span className="icon-box"><Icon name="Shield" /></span>
        <span className="who"><b>{l.name}</b><small>{l.role}</small></span>
        <span className="badge">{l.badge}</span>
      </div>
      <blockquote>“{l.quote}”</blockquote>
      <p className="handles"><span>{l.handle}</span>{l.id && <span>ID: {l.id}</span>}</p>
    </article>
  )
}
