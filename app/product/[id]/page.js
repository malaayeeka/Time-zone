"use client"

import { useState, use } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/app-context"
import { translations } from "@/lib/translations"
import { getProductById } from "@/lib/products-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginModal } from "@/components/login-modal"
import { CheckoutModal } from "@/components/checkout-modal"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function ProductPage({ params }) {
  const resolvedParams = use(params)
  const router = useRouter()
  const { language, user, formatPrice, addToCart } = useApp()
  const t = translations[language]
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showCheckoutModal, setShowCheckoutModal] = useState(false)

  const product = getProductById(resolvedParams.id)

  if (!product) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">{language === "en" ? "Product Not Found" : "পণ্য পাওয়া যায়নি"}</h1>
          <Button asChild>
            <Link href="/">{language === "en" ? "Back to Home" : "হোমে ফিরুন"}</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleBuyNow = () => {
    if (!user) {
      setShowLoginModal(true)
    } else {
      setShowCheckoutModal(true)
    }
  }

  const handleAddToCart = () => {
    if (!user) {
      setShowLoginModal(true)
    } else {
      addToCart(product)
      // Show success feedback
      alert(language === "en" ? "Added to cart!" : "কার্টে যোগ করা হয়েছে!")
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          {language === "en" ? "Back" : "ফিরুন"}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-muted">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{product.name}</h1>
              <p className="text-4xl font-bold text-accent">{formatPrice(product.price)}</p>
            </div>

            <div className="space-y-4">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="description" className="flex-1">
                    {t.description}
                  </TabsTrigger>
                  <TabsTrigger value="specifications" className="flex-1">
                    {t.specifications}
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </TabsContent>
                <TabsContent value="specifications" className="mt-4">
                  <p className="text-muted-foreground leading-relaxed">{product.specifications}</p>
                </TabsContent>
              </Tabs>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="flex-1" onClick={handleBuyNow}>
                {t.buyNow}
              </Button>
              <Button size="lg" variant="outline" className="flex-1 bg-transparent" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                {t.addToCart}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <LoginModal open={showLoginModal} onOpenChange={setShowLoginModal} onSuccess={() => setShowCheckoutModal(true)} />
      <CheckoutModal open={showCheckoutModal} onOpenChange={setShowCheckoutModal} product={product} />
    </div>
  )
}
