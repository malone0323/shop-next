"use client"

import { useCart } from "@/context/cart-context"
import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"

interface MiniCartProps {
  isOpen: boolean
}

export default function MiniCart({ isOpen }: MiniCartProps) {
  const { items, removeItem, subtotal } = useCart()

  if (!isOpen) return null

  return (
    <div className="absolute top-full right-0 mt-2 w-80 bg-white shadow-lg border border-gray-200 z-50">
      <div className="p-4">
        <h3 className="font-medium mb-3">Your Cart</h3>

        {items.length === 0 ? (
          <p className="text-gray-500 text-sm">Your cart is empty</p>
        ) : (
          <>
            <div className="max-h-60 overflow-auto">
              {items.map((item) => (
                <div key={item.id} className="flex py-2 border-b">
                  <div className="w-16 h-16 bg-gray-100 mr-3 relative flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <p className="text-xs text-gray-500">
                      {item.quantity} × ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <button className="text-gray-400 hover:text-red-600" onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between font-medium mt-3 pt-3 border-t">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <Link
                href="/cart"
                className="bg-white border border-black text-black text-center py-2 text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                View Cart
              </Link>
              <Link
                href="/cart"
                className="bg-black text-white text-center py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
