import Hero from "@/components/hero"
import ProductCard from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/products"
import Image from "next/image"

export default function Home() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div>
      <Hero />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designer%20%2813%29-wdJYVMwyK1CmJ2ppFhIe9NcIEHK6O5.jpeg"
                alt="VANNE Brand"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">The VANNE Story</h2>
              <p className="text-gray-600 mb-6">
                VANNE represents the fusion of artisanal craftsmanship and contemporary design. Our collections feature
                bold, darker graphics for men and high-end designer pieces for women, all crafted with meticulous
                attention to detail and quality.
              </p>
              <p className="text-gray-600">
                Each VANNE piece tells a story of creativity, passion, and dedication to the art of fashion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
