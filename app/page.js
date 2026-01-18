"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/app-context"
import { translations } from "@/lib/translations"
import { products } from "@/lib/products-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { LoginModal } from "@/components/login-modal"
import { ChevronLeft, ChevronRight } from "lucide-react"

const bannerImages = [
  {
    url: "/banner-luxury-watches.jpg",
    title: "Timeless Elegance",
    subtitle: "Discover Premium Watches",
    titleBn: "চিরন্তন কমনীয়তা",
    subtitleBn: "প্রিমিয়াম ঘড়ি আবিষ্কার করুন",
  },
  {
    url: "/banner-sport-watches.jpg",
    title: "Sport Collection",
    subtitle: "Built for Performance",
    titleBn: "স্পোর্ট কালেকশন",
    subtitleBn: "পারফরম্যান্সের জন্য তৈরি",
  },
  {
    url: "/banner-couples-watches.jpg",
    title: "Couple Collection",
    subtitle: "Together Forever",
    titleBn: "কাপল কালেকশন",
    subtitleBn: "চিরকালের জন্য একসাথে",
  },
]

export default function HomePage() {
  const router = useRouter()
  const { language, user, formatPrice } = useApp()
  const t = translations[language]
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }

  const handleShopNow = () => {
    if (!user) {
      setShowLoginModal(true)
    } else {
      router.push("/collections/all")
    }
  }

  return (
    <div className="min-h-screen">
      {/* Banner Section with Slider */}
      <section className="relative h-[500px] md:h-[600px] bg-muted overflow-hidden">
        <div className="relative h-full">
          {bannerImages.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={banner.url || "/placeholder.svg"}
                alt={language === "en" ? banner.title : banner.titleBn}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6 px-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-white text-balance">
                    {language === "en" ? banner.title : banner.titleBn}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90">
                    {language === "en" ? banner.subtitle : banner.subtitleBn}
                  </p>
                  <Button
                    size="lg"
                    onClick={handleShopNow}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    {t.shopNow}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Men's Collection */}
          <CategorySection
            title={t.mensCollection}
            products={products.mens}
            category="mens"
            language={language}
            formatPrice={formatPrice}
            user={user}
            onLoginRequired={() => setShowLoginModal(true)}
          />

          {/* Women's Collection */}
          <CategorySection
            title={t.womensCollection}
            products={products.womens}
            category="womens"
            language={language}
            formatPrice={formatPrice}
            user={user}
            onLoginRequired={() => setShowLoginModal(true)}
          />

          {/* Children Collection */}
          <CategorySection
            title={t.childrenCollection}
            products={products.children}
            category="children"
            language={language}
            formatPrice={formatPrice}
            user={user}
            onLoginRequired={() => setShowLoginModal(true)}
          />

          {/* Couples Collection */}
          <CategorySection
            title={t.couplesCollection}
            products={products.couples}
            category="couples"
            language={language}
            formatPrice={formatPrice}
            user={user}
            onLoginRequired={() => setShowLoginModal(true)}
          />
        </div>
      </section>

      <LoginModal open={showLoginModal} onOpenChange={setShowLoginModal} />
    </div>
  )
}

function CategorySection({ title, products, category, language, formatPrice, user, onLoginRequired }) {
  const router = useRouter()
  const t = translations[language]

  const handleProductClick = (productId) => {
    router.push(`/product/${productId}`)
  }

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <Button variant="outline" asChild>
          <Link href={`/collections/${category}`}>{t.viewAll}</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group cursor-pointer overflow-hidden"
            onClick={() => handleProductClick(product.id)}
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
                  {t.viewAll}
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
