import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designer%20%288%29-E8b5sRthmhhKiuKDVxeDo2pm8JMRb4.jpeg"
        alt="VANNE Fashion"
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">VANNE</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          Elevating fashion with bold designs and premium craftsmanship
        </p>
        <div className="flex space-x-4">
          <Link href="/mens" className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors">
            Shop Men
          </Link>
          <Link
            href="/womens"
            className="bg-red-600 text-white px-6 py-3 font-medium hover:bg-red-700 transition-colors"
          >
            Shop Women
          </Link>
        </div>
      </div>
    </div>
  )
}
