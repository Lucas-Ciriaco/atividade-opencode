import s from './Benefits.module.css'
const items = [
  ['Peso bem distribuído', 'Alças largas e painel dorsal que dividem até 12 kg entre costas e ombros.'],
  ['Som anti-pânico', 'Sensor de passos acelerados que ativa uma trilha de 5 minutos para acalmar.'],
  ['Bolso secreto', 'Espaço protegido para carregador e fones, longe dos olhos curiosos.'],
  ['Tecido impermeável', 'Chuva no caminho até o campus não molha o notebook.'],
]
export default function Benefits() {
  return (
    <section id="beneficios" className={s.wrap}>
      <h2>Feita para quem está sempre quase chegando</h2>
      <ul className={s.grid}>
        {items.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
      </ul>
    </section>
  )
}
