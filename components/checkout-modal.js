"use client"

import { useState } from "react"
import { useApp } from "@/lib/app-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function CheckoutModal({ open, onOpenChange, product }) {
  const { language, formatPrice } = useApp()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would submit the order to a backend
    alert(
      language === "en"
        ? `Order placed successfully! Total: ${formatPrice(product.price)}`
        : `অর্ডার সফলভাবে সম্পন্ন হয়েছে! মোট: ${formatPrice(product.price)}`,
    )
    onOpenChange(false)
    setFormData({
      name: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
    })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t.checkoutTitle}</DialogTitle>
          <DialogDescription>
            {language === "en" ? "Fill in your details to complete the purchase" : "ক্রয় সম্পূর্ণ করতে আপনার তথ্য পূরণ করুন"}
          </DialogDescription>
        </DialogHeader>

        <div className="border-t border-b py-4 my-4">
          <h4 className="font-semibold mb-2">{t.orderSummary}</h4>
          <div className="flex justify-between text-sm">
            <span>{product?.name}</span>
            <span className="font-semibold">{formatPrice(product?.price)}</span>
          </div>
          <div className="flex justify-between mt-2 pt-2 border-t font-bold">
            <span>{t.total}</span>
            <span className="text-accent">{formatPrice(product?.price)}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="checkout-name">{t.name}</Label>
            <Input
              id="checkout-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={language === "en" ? "Enter your full name" : "আপনার সম্পূর্ণ নাম লিখুন"}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="checkout-phone">{t.phone}</Label>
            <Input
              id="checkout-phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder={language === "en" ? "Enter your phone number" : "আপনার ফোন নম্বর লিখুন"}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="checkout-address">{t.address}</Label>
            <Input
              id="checkout-address"
              name="address"
              type="text"
              required
              value={formData.address}
              onChange={handleChange}
              placeholder={language === "en" ? "Street address" : "রাস্তার ঠিকানা"}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="checkout-city">{t.city}</Label>
              <Input
                id="checkout-city"
                name="city"
                type="text"
                required
                value={formData.city}
                onChange={handleChange}
                placeholder={language === "en" ? "City" : "শহর"}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="checkout-zipCode">{t.zipCode}</Label>
              <Input
                id="checkout-zipCode"
                name="zipCode"
                type="text"
                required
                value={formData.zipCode}
                onChange={handleChange}
                placeholder={language === "en" ? "Zip code" : "জিপ কোড"}
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => onOpenChange(false)}
            >
              {t.cancel}
            </Button>
            <Button type="submit" className="flex-1">
              {t.placeOrder}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
