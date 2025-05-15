"use client"

import { getProductById } from "@/lib/products"
import Image from "next/image"
import { notFound, useRouter } from "next/navigation"
import { ShoppingBag, Heart } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/context/cart-context"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const router = useRouter()
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState<string>("M")
  const [quantity, setQuantity] = useState(1)

  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        ...product,
        name: `${product.name} - ${selectedSize}`, // Add size to product name
      })
    }
  }

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        ...product,
        name: `${product.name} - ${selectedSize}`, // Add size to product name
      })
    }
    router.push("/cart")
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="aspect-square bg-gray-100 relative">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500 mt-2">{product.category}</p>
          <p className="text-2xl font-bold mt-4">${product.price.toFixed(2)}</p>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-2">Size</h3>
            <div className="flex space-x-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`w-10 h-10 border flex items-center justify-center ${
                    selectedSize === size ? "border-black bg-black text-white" : "border-gray-300 hover:border-black"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-2">Quantity</h3>
            <div className="flex items-center border border-gray-300 w-32">
              <button
                className="w-10 h-10 flex items-center justify-center border-r border-gray-300"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <div className="flex-1 text-center">{quantity}</div>
              <button
                className="w-10 h-10 flex items-center justify-center border-l border-gray-300"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-8 flex space-x-4">
            <button
              className="bg-black text-white px-6 py-3 flex items-center justify-center flex-1"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button
              className="bg-red-600 text-white px-6 py-3 flex items-center justify-center flex-1"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
            <button className="border border-gray-300 px-4 py-3 flex items-center justify-center">
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
