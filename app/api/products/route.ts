import { NextResponse } from "next/server"
import { allProducts } from "@/lib/products"

export async function GET() {
  return NextResponse.json(allProducts)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Here you would typically save the data to a database
    // For now, we'll just return the data as if it was saved

    return NextResponse.json({
      success: true,
      message: "Product data received for Coda.io integration",
      data,
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to process product data" }, { status: 400 })
  }
}
