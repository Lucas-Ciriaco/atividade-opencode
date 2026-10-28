import Accordion from '../../shared/ui/Accordion.jsx'
import { faqItems } from '../../entities/faq-item/model.js'
export default function Faq() {
  return (
    <section id="faq" style={{ maxWidth: 760, margin: '0 auto' }}>
      <h2>Perguntas frequentes</h2>
      <Accordion items={faqItems} />
    </section>
  )
}
