import Icon from './Icon'
export default function TrophyCard({ t }) {
  return (
    <article className="card trophy">
      <div className="trophy-top"><span className="icon-box"><Icon name="Trophy" /></span><span className="badge">{t.tag}</span></div>
      <p className="place">{t.place}</p>
      <h3>{t.title}</h3>
      <p className="muted">{t.text}</p>
      <div className="trophy-foot"><span><Icon name="Calendar" size={14} /> {t.date}</span></div>
    </article>
  )
}
