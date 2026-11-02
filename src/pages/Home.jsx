import Section from '../components/Section'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Accordion from '../components/Accordion'
import PlayerList from '../components/TrackList'
import TrophyCard from '../components/TrophyCard'
import LeaderCard from '../components/LeaderCard'
import JoinForm from '../components/JoinForm'
import { hero, pillars, stats, teams, glory, leaders, rules, join } from '../data/content'

const Stats = ({ items }) => (
  <dl className="stats">{items.map(s => <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>)}</dl>
)

export default function Home() {
  return (
    <div className="container">
      <section id="inicio" className="hero">
        <p className="tag">{hero.tag}</p>
        <h1>{hero.title}<span>{hero.accent}</span></h1>
        <p className="muted quote"><em>"{hero.quote}"</em></p>
        <ul className="pillars">
          {pillars.map(p => <li key={p.title} className="card"><span className="icon-box"><Icon name={p.icon} /></span><span><b>{p.title}</b><small>{p.text}</small></span></li>)}
        </ul>
        <Button href="#contato" icon="Flame">Junte-se à AKM</Button>
        <Button href="#vilas" variant="ghost" icon="Swords">Conheça os times</Button>
        <Stats items={stats} />
      </section>

      <Section id="vilas" eyebrow="Divisões táticas" icon="Swords" title="Os times da AKM" intro="As vilas de elite do Akatsuki Mobile moldadas em batalhas da Terra do Amanhecer.">
        <div className="stack">{teams.map((t, i) => <Accordion key={t.id} item={t} defaultOpen={i === 0}><PlayerList players={t.players} /></Accordion>)}</div>
      </Section>

      <Section id="gloria" eyebrow="Glórias & conquistas" icon="Trophy" title="Hall da Fama & Torneios" intro={glory.intro}>
        <Stats items={glory.stats} />
        <div className="stack">{glory.trophies.map(t => <TrophyCard key={t.title} t={t} />)}</div>
      </Section>

      <Section id="lideranca" eyebrow="Alto comando" icon="Crown" title="A cúpula da Akatsuki" intro="Liderança estratégica que comanda os passos do clã rumo ao topo.">
        <div className="stack">{leaders.map(l => <LeaderCard key={l.name} l={l} />)}</div>
      </Section>

      <Section id="codigo" eyebrow="Honra & disciplina" icon="ScrollText" title={rules.title} intro={rules.intro}>
        <ol className="stack rules">{rules.items.map(r => <li key={r.n} className="card"><span className="num">{r.n}</span><h3>{r.title}</h3><p className="muted">{r.text}</p></li>)}</ol>
      </Section>

      {/* <Section id="recrutamento" eyebrow="Exame de entrada" icon="Flame" title={join.title} intro={join.text}>
        <div className="card pad"><p className="eyebrow">Requisitos mínimos</p>
          <ul className="reqs">{join.reqs.map(r => <li key={r}><Icon name="Check" size={14} />{r}</li>)}</ul></div>
        <JoinForm />
      </Section> */}
    </div>
  )
}
