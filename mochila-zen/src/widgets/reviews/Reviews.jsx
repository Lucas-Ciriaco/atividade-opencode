import s from './Reviews.module.css'
import { reviews } from '../../entities/review/model.js'
export default function Reviews() {
  return (
    <section id="avaliacoes" className={s.wrap}>
      <h2>Quem já chegou em paz</h2>
      <div className={s.grid}>
        {reviews.map((r) => (
          <figure key={r.id} className={s.card}>
            <blockquote>{r.text}</blockquote>
            <figcaption>{r.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
