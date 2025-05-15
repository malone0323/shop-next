"use client"

import type React from "react"

import { useCart } from "@/context/cart-context"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, CreditCard, Bitcoin } from "lucide-react"
import { useState } from "react"

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState<string>("stripe")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the order
    alert("Order placed successfully! (This is just a demo)")
    clearCart()
  }

  const shipping = 10.0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <p className="text-gray-600 mb-8">Your cart is empty.</p>
        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Cart Items */}
        <div>
          <div className="border-b pb-4 mb-4">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>

            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex border-b pb-4">
                  <div className="w-24 h-24 bg-gray-100 mr-4 relative flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.category}</p>
                    <p className="font-medium mt-1">${item.price.toFixed(2)}</p>

                    <div className="flex items-center mt-2">
                      <button className="p-1" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button className="p-1" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-4 w-4" />
                      </button>

                      <button className="ml-auto p-1 text-red-600" onClick={() => removeItem(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4">Shipping Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>

              <div className="space-y-3">
                <div
                  className={`border p-4 flex items-center cursor-pointer ${
                    paymentMethod === "stripe" ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setPaymentMethod("stripe")}
                >
                  <div
                    className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                      paymentMethod === "stripe" ? "border-black" : "border-gray-300"
                    }`}
                  >
                    {paymentMethod === "stripe" && <div className="w-3 h-3 rounded-full bg-black" />}
                  </div>
                  <CreditCard className="h-5 w-5 mr-2" />
                  <span>Credit Card (Stripe)</span>
                </div>

                <div
                  className={`border p-4 flex items-center cursor-pointer ${
                    paymentMethod === "paypal" ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setPaymentMethod("paypal")}
                >
                  <div
                    className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                      paymentMethod === "paypal" ? "border-black" : "border-gray-300"
                    }`}
                  >
                    {paymentMethod === "paypal" && <div className="w-3 h-3 rounded-full bg-black" />}
                  </div>
                  <span className="font-bold text-blue-700">Pay</span>
                  <span className="font-bold text-blue-900">Pal</span>
                </div>

                <div
                  className={`border p-4 flex items-center cursor-pointer ${
                    paymentMethod === "crypto" ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setPaymentMethod("crypto")}
                >
                  <div
                    className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                      paymentMethod === "crypto" ? "border-black" : "border-gray-300"
                    }`}
                  >
                    {paymentMethod === "crypto" && <div className="w-3 h-3 rounded-full bg-black" />}
                  </div>
                  <Bitcoin className="h-5 w-5 mr-2" />
                  <span>Cryptocurrency</span>
                </div>

                <div
                  className={`border p-4 flex items-center cursor-pointer ${
                    paymentMethod === "cashapp" ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setPaymentMethod("cashapp")}
                >
                  <div
                    className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                      paymentMethod === "cashapp" ? "border-black" : "border-gray-300"
                    }`}
                  >
                    {paymentMethod === "cashapp" && <div className="w-3 h-3 rounded-full bg-black" />}
                  </div>
                  <span className="font-bold text-green-500">Cash App</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              Place Order - ${total.toFixed(2)}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
