import s from './Pricing.module.css'
import Button from '../../shared/ui/Button.jsx'
export default function Pricing({ onOrder }) {
  return (
    <section id="preco" className={s.wrap}>
      <div className={s.card}>
        <h2>Mochila Zen</h2>
        <p className={s.price}>R$ 249,90</p>
        <p>no Pix, ou 3x de R$ 83,30 sem juros</p>
        <ul>
          <li>Trilha zen e sensor de pressa</li>
          <li>Bateria de 30 dias, carga por USB-C</li>
          <li>Troca em até 7 dias</li>
        </ul>
        <Button onClick={onOrder}>Reservar agora</Button>
      </div>
    </section>
  )
}
