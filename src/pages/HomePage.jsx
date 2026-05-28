import Hero from '../components/home/Hero'
import Ticker from '../components/home/Ticker'
import Pillars from '../components/home/Pillars'
import Thesis from '../components/home/Thesis'
import Platforms from '../components/home/Platforms'
import Insights from '../components/home/Insights'
import Performance from '../components/home/Performance'
import CTAStrip from '../components/home/CTAStrip'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Ticker />
      <Pillars />
      <Thesis />
      <Platforms />
      <Insights />
      <Performance />
      <CTAStrip />
    </div>
  )
}
