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

  const handleProductClick = () => {
    window.alert(`You clicked on: ${name} - ${price} 🛍️`)
  }

  return (
    <div className="group space-y-4 cursor-pointer" onClick={handleProductClick}>
      <div className="relative overflow-hidden bg-secondary rounded-2xl aspect-square">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsFavorited(!isFavorited)
            window.alert(isFavorited ? 'Removed from favorites! 💔' : 'Added to favorites! ❤️')
          }}
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
      <button 
        className="w-full py-3 border rounded-2xl border-foreground text-sm font-medium tracking-wider hover:bg-foreground hover:text-background transition"
        onClick={(e) => {
          e.stopPropagation()
          window.alert(`${name} added to cart! 🛒`)
        }}
      >
        ADD TO CART
      </button>
    </div>
  )
}
