import { useState } from 'react'
import s from './Header.module.css'
const links = [['#beneficios', 'Benefícios'], ['#como-funciona', 'Como funciona'], ['#avaliacoes', 'Avaliações'], ['#preco', 'Preço'], ['#faq', 'FAQ']]
export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className={s.header}>
      <a href="#topo" className={s.logo}>Mochila Zen</a>
      <button className={s.toggle} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>Menu</button>
      <nav id="menu" aria-label="Principal" className={`${s.nav} ${open ? s.open : ''}`}>
        {links.map(([h, t]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
      </nav>
    </header>
  )
}
