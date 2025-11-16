'use client'

import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter()

  return (
    <section className="min-h-screen flex items-center justify-center border-b border-border">
      <div className="max-w-4xl mx-auto px-6 text-center py-20 space-y-8">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-balance leading-tight">
          Curated Essentials for the Refined Mind
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
          Discover thoughtfully selected products that embody simplicity, quality, and timeless design. Each piece is chosen for its elegance and purpose.
        </p>
        <button onClick={()=>{router.push('/collection')}} className="mt-8 px-12 py-4 bg-foreground text-background text-sm font-medium tracking-wider hover:opacity-80 transition">
          EXPLORE COLLECTION
        </button>
      </div>
    </section>
  )
}
