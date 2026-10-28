import s from './Hero.module.css'
import Button from '../../shared/ui/Button.jsx'
import Backpack from '../../entities/backpack-color/Backpack.jsx'
import ColorPicker from '../../features/color-picker/ColorPicker.jsx'
import { backpackColors } from '../../entities/backpack-color/model.js'
export default function Hero({ colorId, onColorChange, onOrder }) {
  const color = backpackColors.find((c) => c.id === colorId)
  return (
    <section className={s.hero} id="topo">
      <div className={s.text}>
        <h1>Chegue atrasado, mas chegue em paz.</h1>
        <p>A mochila que distribui o peso nas suas costas e toca uma trilha relaxante assim que percebe que você está correndo para a aula.</p>
        <Button onClick={onOrder}>Quero a minha</Button>
      </div>
      <div className={s.visual}>
        <div className={s.stage}><Backpack color={color.hex} /></div>
        <ColorPicker value={colorId} onChange={onColorChange} />
      </div>
    </section>
  )
}
