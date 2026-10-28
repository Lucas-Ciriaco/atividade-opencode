import s from './HowItWorks.module.css'
const steps = [
  ['Coloque suas coisas', 'Guarde notebook e livros. A mochila ajusta o apoio sozinha pelo formato do peso.'],
  ['Ela percebe a pressa', 'Se seus passos aceleram e o horário da aula está perto, o sensor entra em ação.'],
  ['Toca a trilha zen', 'Uma música suave toca por 5 minutos no alto-falante discreto da alça.'],
]
export default function HowItWorks() {
  return (
    <section id="como-funciona" className={s.wrap}>
      <h2>Como funciona</h2>
      <ol className={s.list}>
        {steps.map(([t, d], i) => (
          <li key={t}><span className={s.n} aria-hidden="true">{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></li>
        ))}
      </ol>
    </section>
  )
}
