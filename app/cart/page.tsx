'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useState } from 'react'
import { X } from 'lucide-react'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Minimalist Ceramic Vase',
      price: 180,
      quantity: 1,
      image: '/white-ceramic-vase-minimal-design.jpg'
    },
    {
      id: 2,
      name: 'Linen Throw Blanket',
      price: 95,
      quantity: 2,
      image: '/white-linen-throw-blanket-minimalist.jpg'
    }
  ])

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemove(id)
      return
    }
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = cartItems.length > 0 ? 15 : 0
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">
              Shopping Cart
            </h1>
          </div>
        </section>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <section className="max-w-7xl mx-auto px-6 py-32">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-light">Your cart is empty</h2>
                <p className="text-muted-foreground">
                  Explore our collection and add items to your cart.
                </p>
              </div>
              <Link
                href="/collection"
                className="inline-block px-8 py-3 border border-foreground text-sm font-medium tracking-wider hover:bg-foreground hover:text-background transition"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </section>
        ) : (
          /* Cart Content */
          <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-8">
                {cartItems.map(item => (
                  <div key={item.id} className="border-b border-border pb-8">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-secondary flex-shrink-0"></div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-light">{item.name}</h3>
                            <p className="text-muted-foreground text-sm">Item #{item.id}</p>
                          </div>
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="p-1 hover:opacity-60 transition"
                            aria-label="Remove item"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 border border-border">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                              className="w-12 text-center border-l border-r border-border bg-background focus:outline-none"
                              min="1"
                            />
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition"
                            >
                              +
                            </button>
                          </div>
                          <p className="text-lg font-light">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="h-fit border border-border p-8">
                <h2 className="text-lg font-light tracking-tight mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6 pb-6 border-b border-border">
                  <span className="font-light">Total</span>
                  <span className="text-xl font-light">${total.toFixed(2)}</span>
                </div>

                <button className="w-full py-3 bg-foreground text-background font-medium tracking-wider hover:opacity-90 transition mb-3">
                  CHECKOUT
                </button>
                <Link
                  href="/collection"
                  className="block text-center py-3 border border-foreground font-medium tracking-wider hover:bg-foreground hover:text-background transition"
                >
                  CONTINUE SHOPPING
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
