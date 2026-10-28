import { useState } from 'react'
import s from './Accordion.module.css'
export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null)
  return (
    <div className={s.list}>
      {items.map((it) => {
        const open = openId === it.id
        return (
          <div key={it.id} className={s.item}>
            <h3>
              <button className={s.trigger} aria-expanded={open} aria-controls={`panel-${it.id}`} id={`btn-${it.id}`}
                onClick={() => setOpenId(open ? null : it.id)}>
                {it.q}<span aria-hidden="true">{open ? '−' : '+'}</span>
              </button>
            </h3>
            <div id={`panel-${it.id}`} role="region" aria-labelledby={`btn-${it.id}`} hidden={!open} className={s.panel}>{it.a}</div>
          </div>
        )
      })}
    </div>
  )
}
