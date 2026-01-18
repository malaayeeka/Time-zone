"use client"

import { use } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/app-context"
import { translations } from "@/lib/translations"
import { getProductsByCategory, getAllProducts } from "@/lib/products-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function CollectionPage({ params }) {
  const resolvedParams = use(params)
  const router = useRouter()
  const { language, formatPrice } = useApp()
  const t = translations[language]

  const products = resolvedParams.category === "all" ? getAllProducts() : getProductsByCategory(resolvedParams.category)

  const categoryTitles = {
    mens: t.mensCollection,
    womens: t.womensCollection,
    children: t.childrenCollection,
    couples: t.couplesCollection,
    all: language === "en" ? "All Collections" : "সব কালেকশন",
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          {language === "en" ? "Back" : "ফিরুন"}
        </Button>

        <h1 className="text-4xl font-bold mb-8">{categoryTitles[resolvedParams.category]}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer overflow-hidden"
              onClick={() => router.push(`/product/${product.id}`)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2 p-4">
                <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between w-full mt-2">
                  <span className="text-xl font-bold text-accent">{formatPrice(product.price)}</span>
                  <Button size="sm" variant="secondary">
                    {language === "en" ? "View" : "দেখুন"}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
