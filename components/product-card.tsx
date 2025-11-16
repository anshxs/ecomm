'use client'

import Image from 'next/image'
import { Heart } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  id: number
  name: string
  price: string
  image: string
  category: string
}

export function ProductCard({ name, price, image, category }: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <div className="group space-y-4 cursor-pointer">
      <div className="relative overflow-hidden bg-secondary aspect-square">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-4 right-4 p-2 bg-background rounded-full opacity-0 group-hover:opacity-100 transition"
          aria-label="Add to favorites"
        >
          <Heart
            className="w-5 h-5"
            fill={isFavorited ? 'currentColor' : 'none'}
            stroke={isFavorited ? 'currentColor' : 'currentColor'}
          />
        </button>
      </div>
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          {category}
        </p>
        <h3 className="text-lg font-light">{name}</h3>
        <p className="text-base font-light">{price}</p>
      </div>
      <button className="w-full py-3 border border-foreground text-sm font-medium tracking-wider hover:bg-foreground hover:text-background transition">
        ADD TO CART
      </button>
    </div>
  )
}
