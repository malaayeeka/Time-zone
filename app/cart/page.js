"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useApp } from "@/lib/app-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Trash2 } from "lucide-react"
import { useState } from "react"
import { CheckoutModal } from "@/components/checkout-modal"

export default function CartPage() {
  const router = useRouter()
  const { language, cart, formatPrice, removeFromCart, clearCart } = useApp()
  const t = translations[language]
  const [checkoutProduct, setCheckoutProduct] = useState(null)

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  if (cart.length === 0) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">{language === "en" ? "Your cart is empty" : "আপনার কার্ট খালি"}</h1>
          <Button onClick={() => router.push("/")}>{language === "en" ? "Start Shopping" : "কেনাকাটা শুরু করুন"}</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          {language === "en" ? "Back" : "ফিরুন"}
        </Button>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">{t.cart}</h1>
          <Button variant="outline" onClick={clearCart}>
            {language === "en" ? "Clear Cart" : "কার্ট খালি করুন"}
          </Button>
        </div>

        <div className="space-y-4 mb-8">
          {cart.map((item, index) => (
            <Card key={`${item.id}-${index}`}>
              <CardContent className="flex items-center gap-4 p-4">
                <div className="relative h-24 w-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                  <p className="text-lg font-bold text-accent mt-1">{formatPrice(item.price)}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => setCheckoutProduct(item)}>
                    {t.buyNow}
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">{t.total}</span>
              <span className="text-2xl font-bold text-accent">{formatPrice(total)}</span>
            </div>
            <Button className="w-full" size="lg">
              {language === "en" ? "Checkout All" : "সব অর্ডার করুন"}
            </Button>
          </CardContent>
        </Card>
      </div>

      {checkoutProduct && (
        <CheckoutModal
          open={!!checkoutProduct}
          onOpenChange={(open) => !open && setCheckoutProduct(null)}
          product={checkoutProduct}
        />
      )}
    </div>
  )
}
