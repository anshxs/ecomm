'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { useState } from 'react'

const allProducts = [
  {
    id: 1,
    name: 'Minimalist Ceramic Vase',
    price: '$180',
    image: '/white-ceramic-vase-minimal-design.jpg',
    category: 'Home'
  },
  {
    id: 2,
    name: 'Linen Throw Blanket',
    price: '$95',
    image: '/white-linen-throw-blanket-minimalist.jpg',
    category: 'Textiles'
  },
  {
    id: 3,
    name: 'Marble Writing Desk',
    price: '$520',
    image: '/white-marble-desk-minimalist-modern.jpg',
    category: 'Furniture'
  },
  {
    id: 4,
    name: 'Natural Wood Frame',
    price: '$65',
    image: '/wood-picture-frame-minimal-design.jpg',
    category: 'Decor'
  },
  {
    id: 5,
    name: 'Stainless Steel Kettle',
    price: '$140',
    image: '/stainless-steel-kettle-minimalist.jpg',
    category: 'Kitchen'
  },
  {
    id: 6,
    name: 'Cotton Pillow Set',
    price: '$110',
    image: '/white-cotton-pillows-minimalist.jpg',
    category: 'Textiles'
  },
  {
    id: 7,
    name: 'Granite Coasters',
    price: '$45',
    image: '/minimalist-granite-coasters.jpg',
    category: 'Decor'
  },
  {
    id: 8,
    name: 'Wool Area Rug',
    price: '$380',
    image: '/minimalist-wool-area-rug.jpg',
    category: 'Textiles'
  },
  {
    id: 9,
    name: 'Brass Desk Lamp',
    price: '$220',
    image: '/minimalist-brass-desk-lamp.jpg',
    category: 'Lighting'
  },
]

const categories = ['All', 'Home', 'Textiles', 'Furniture', 'Decor', 'Kitchen', 'Lighting']

export default function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('newest')

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
    }
    if (sortBy === 'price-high') {
      return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
    }
    return 0
  })

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight">
                Collection
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                Explore our complete collection of carefully selected minimalist essentials. Each piece embodies our commitment to quality, simplicity, and timeless design.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="space-y-6">
              {/* Categories */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium tracking-widest">CATEGORY</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 text-sm transition ${
                        selectedCategory === category
                          ? 'bg-foreground text-background'
                          : 'border border-border hover:border-foreground'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium tracking-widest">SORT BY</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 text-sm border border-border bg-background focus:outline-none"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
