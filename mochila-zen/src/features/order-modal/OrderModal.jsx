import { useState } from 'react'
import Modal from '../../shared/ui/Modal.jsx'
import Button from '../../shared/ui/Button.jsx'
import ColorPicker from '../color-picker/ColorPicker.jsx'
import { backpackColors } from '../../entities/backpack-color/model.js'
import s from './OrderModal.module.css'

export default function OrderModal({ open, onClose, colorId, onColorChange }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  function submit(e) {
    e.preventDefault()
    const err = {}
    if (name.trim().length < 2) err.name = 'Informe seu nome.'
    if (!/^\S+@\S+\.\S+$/.test(email)) err.email = 'Informe um e-mail válido, como nome@email.com.'
    setErrors(err)
    if (Object.keys(err).length === 0) setDone(true)
  }
  function close() { setDone(false); setErrors({}); onClose() }
  const color = backpackColors.find((c) => c.id === colorId)

  return (
    <Modal open={open} onClose={close} title={done ? 'Pedido reservado' : 'Reserve sua Mochila Zen'}>
      {done ? (
        <div>
          <p>Obrigado, {name}! Reservamos uma mochila {color.name.toLowerCase()} e enviaremos os detalhes para {email}.</p>
          <p className={s.note}>Este é um pedido fictício feito para uma atividade acadêmica.</p>
          <Button onClick={close}>Fechar</Button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className={s.form}>
          <label>Nome
            <input value={name} onChange={(e) => setName(e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} />
            {errors.name && <span id="e-name" role="alert" className={s.error}>{errors.name}</span>}
          </label>
          <label>E-mail
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'e-email' : undefined} />
            {errors.email && <span id="e-email" role="alert" className={s.error}>{errors.email}</span>}
          </label>
          <ColorPicker value={colorId} onChange={onColorChange} />
          <Button type="submit">Confirmar reserva</Button>
        </form>
      )}
    </Modal>
  )
}
