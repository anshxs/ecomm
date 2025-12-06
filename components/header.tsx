'use client'

import Link from 'next/link'
import { ShoppingBag, Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogoClick = () => {
    window.alert('Welcome to MINIMAL! 👋')
  }

  return (
    <header className="sticky top-0 z-100 bg-white/50 backdrop-blur-lg border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-lg font-light tracking-widest"
          onClick={handleLogoClick}
        >
          MINIMAL
        </Link>
        
        <div className="hidden md:flex gap-12 items-center">
          <Link href="/collection" className="text-sm hover:opacity-60 transition">
            COLLECTION
          </Link>
          <Link href="/about" className="text-sm hover:opacity-60 transition">
            ABOUT
          </Link>
          <Link href="/contact" className="text-sm hover:opacity-60 transition">
            CONTACT
          </Link>
          <Link href="/cart" className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-foreground text-background text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/cart" className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-foreground text-background text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border px-6 py-4 space-y-4">
          <Link href="/collection" className="block text-sm">
            COLLECTION
          </Link>
          <Link href="/about" className="block text-sm">
            ABOUT
          </Link>
          <Link href="/contact" className="block text-sm">
            CONTACT
          </Link>
          <Link href="/cart" className="block text-sm">
            CART
          </Link>
        </div>
      )}
    </header>
  )
}
