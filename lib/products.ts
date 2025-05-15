export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
}

// Men's products
const menProducts: Product[] = Array.from({ length: 12 }, (_, i) => ({
  id: `men-${i + 1}`,
  name: `Men's Item ${i + 1}`,
  price: 49.99 + i * 10,
  image: `/placeholder.svg?height=500&width=500&text=Men's+Item+${i + 1}`,
  category: "Men",
  description: "A trendy men's item with darker graphics and modern styling. Perfect for any casual occasion.",
}))

// Women's products
const womenProducts: Product[] = Array.from({ length: 12 }, (_, i) => ({
  id: `women-${i + 1}`,
  name: `Women's Item ${i + 1}`,
  price: 79.99 + i * 15,
  image: `/placeholder.svg?height=500&width=500&text=Women's+Item+${i + 1}`,
  category: "Women",
  description: "A high-end designer women's clothing item with premium quality and elegant design.",
}))

export const allProducts = [...menProducts, ...womenProducts]

export function getFeaturedProducts() {
  return allProducts.slice(0, 6)
}

export function getMensProducts() {
  return menProducts
}

export function getWomensProducts() {
  return womenProducts
}

export function getProductById(id: string) {
  return allProducts.find((product) => product.id === id)
}
