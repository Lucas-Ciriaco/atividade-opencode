import s from './ColorPicker.module.css'
import { backpackColors } from '../../entities/backpack-color/model.js'
export default function ColorPicker({ value, onChange }) {
  return (
    <fieldset className={s.group}>
      <legend>Cor da mochila</legend>
      {backpackColors.map((c) => (
        <label key={c.id} className={s.opt}>
          <input type="radio" name="cor" value={c.id} checked={value === c.id} onChange={() => onChange(c.id)} />
          <span className={s.dot} style={{ background: c.hex }} />{c.name}
        </label>
      ))}
    </fieldset>
  )
}
