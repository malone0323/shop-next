import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group">
      <div className="aspect-square overflow-hidden bg-gray-100 mb-3">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={500}
          height={500}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{category}</p>
        <p className="text-sm font-medium mt-1">${price.toFixed(2)}</p>
      </div>
    </Link>
  )
}
