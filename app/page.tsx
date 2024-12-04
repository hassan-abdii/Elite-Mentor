import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Curriculum from '../components/Curriculum'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <Hero />
      <About />
      <Services />
      <Curriculum />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}

