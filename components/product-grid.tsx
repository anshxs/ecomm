import { ProductCard } from './product-card'

const products = [
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
]

export function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-b border-border">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Featured Collection
          </h2>
          <p className="text-muted-foreground">
            Thoughtfully curated pieces for modern living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
