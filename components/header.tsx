"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Menu, Search } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useState, useRef, useEffect } from "react"
import MiniCart from "./mini-cart"

export default function Header() {
  const { totalItems } = useCart()
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)
  const cartRef = useRef<HTMLDivElement>(null)

  // Close mini-cart when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsMiniCartOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center md:hidden">
            <button className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/mens" className="text-sm font-medium hover:text-gray-600 transition-colors">
              MEN
            </Link>
            <Link href="/womens" className="text-sm font-medium hover:text-gray-600 transition-colors">
              WOMEN
            </Link>
          </div>

          <Link href="/" className="flex items-center justify-center">
            <div className="relative h-10 w-32">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VANNE%20WRITTEN%20IN%20BLACK%20ON%20A%20WHITE%20AND%20BLACK%20CHECKER%20BORD-6i4rFL2z2V3spsAdwaGZ6j4uSfo1Gk.png"
                alt="VANNE"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <button className="p-2 hidden md:block">
              <Search className="h-5 w-5" />
            </button>
            <div className="relative" ref={cartRef}>
              <button className="p-2 relative" onClick={() => setIsMiniCartOpen(!isMiniCartOpen)}>
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <MiniCart isOpen={isMiniCartOpen} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
