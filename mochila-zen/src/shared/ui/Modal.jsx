import { useEffect, useRef } from 'react'
import s from './Modal.module.css'
export default function Modal({ open, onClose, title, children }) {
  const ref = useRef(null)
  useEffect(() => {
    const d = ref.current
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])
  return (
    <dialog ref={ref} className={s.dialog} onClose={onClose} aria-labelledby="modal-title">
      <div className={s.head}>
        <h2 id="modal-title">{title}</h2>
        <button type="button" className={s.close} onClick={onClose} aria-label="Fechar">×</button>
      </div>
      {children}
    </dialog>
  )
}
