import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-light tracking-widest">MINIMAL</h3>
            <p className="text-sm opacity-70 font-light">
              Curated essentials for modern living
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-widest">Shop</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><Link href="#" className="hover:opacity-70 transition">New Arrivals</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition">All Products</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition">Sale</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-widest">Support</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><Link href="#" className="hover:opacity-70 transition">Contact Us</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition">Shipping Info</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition">Returns</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-widest">Legal</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><Link href="#" className="hover:opacity-70 transition">Privacy</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm font-light opacity-70">
          <p>&copy; 2025 MINIMAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
