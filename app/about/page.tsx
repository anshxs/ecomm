import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight">
                About MINIMAL
              </h1>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-light tracking-tight">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  MINIMAL exists to celebrate the beauty of simplicity. We believe that in a world of excess, intentional design and purposeful living are paramount. Our mission is to curate and create products that embody this philosophy—pieces that are timeless, functional, and beautiful.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every item in our collection is thoughtfully selected for its quality, craftsmanship, and aesthetic purity. We partner with artisans and manufacturers who share our commitment to excellence and sustainability.
                </p>
              </div>
              <div className="bg-secondary aspect-square"></div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-light tracking-tight mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light">Quality</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We never compromise on quality. Each product is designed to last, combining durability with aesthetic refinement.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light">Sustainability</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Environmental responsibility is core to our values. We prioritize sustainable materials and ethical production practices.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light">Simplicity</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Design should be simple, not complicated. We strip away the unnecessary to reveal the essential beauty in every piece.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-secondary">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <p className="text-3xl font-light">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-light">500+</p>
                <p className="text-sm text-muted-foreground">Curated Products</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-light">50+</p>
                <p className="text-sm text-muted-foreground">Global Partners</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-light">2025</p>
                <p className="text-sm text-muted-foreground">Year Founded</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
