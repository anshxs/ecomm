import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ProductGrid } from '@/components/product-grid'
import { Newsletter } from '@/components/newsletter'
import { Footer } from '@/components/footer'
import { MarqueeDemo } from '@/components/demomar'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <MarqueeDemo />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
