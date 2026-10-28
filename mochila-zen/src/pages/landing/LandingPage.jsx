import { useState } from 'react'
import Header from '../../widgets/header/Header.jsx'
import Hero from '../../widgets/hero/Hero.jsx'
import Benefits from '../../widgets/benefits/Benefits.jsx'
import HowItWorks from '../../widgets/how-it-works/HowItWorks.jsx'
import Reviews from '../../widgets/reviews/Reviews.jsx'
import Pricing from '../../widgets/pricing/Pricing.jsx'
import Faq from '../../widgets/faq/Faq.jsx'
import Footer from '../../widgets/footer/Footer.jsx'
import OrderModal from '../../features/order-modal/OrderModal.jsx'

export default function LandingPage() {
  const [colorId, setColorId] = useState('salvia')
  const [orderOpen, setOrderOpen] = useState(false)
  const openOrder = () => setOrderOpen(true)
  return (
    <>
      <Header />
      <main>
        <Hero colorId={colorId} onColorChange={setColorId} onOrder={openOrder} />
        <Benefits />
        <HowItWorks />
        <Reviews />
        <Pricing onOrder={openOrder} />
        <Faq />
      </main>
      <Footer />
      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} colorId={colorId} onColorChange={setColorId} />
    </>
  )
}
