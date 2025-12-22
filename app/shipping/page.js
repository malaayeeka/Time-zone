"use client"

import { useApp } from "@/lib/app-context"
import { Truck, MapPin, Clock, CreditCard } from "lucide-react"

export default function ShippingPage() {
  const { language } = useApp()

  const content = {
    en: {
      title: "Shipping Information",
      subtitle: "Everything you need to know about our delivery",
      deliveryTitle: "Delivery Options",
      deliveryText:
        "We offer multiple delivery options to ensure your watch reaches you safely and on time. Standard delivery takes 3-5 business days, while express delivery is available within 1-2 business days for urgent orders.",
      shippingTitle: "Shipping Costs",
      shippingText:
        "Standard shipping is free for orders over $100. Express shipping is available at an additional cost. International shipping rates vary by location.",
      trackingTitle: "Order Tracking",
      trackingText:
        "Once your order is shipped, you will receive a tracking number via email. You can use this to track your package in real-time.",
      paymentTitle: "Payment Methods",
      paymentText: "We accept all major credit cards, debit cards, and cash on delivery for local orders.",
    },
    bn: {
      title: "শিপিং তথ্য",
      subtitle: "আমাদের ডেলিভারি সম্পর্কে আপনার যা জানা দরকার",
      deliveryTitle: "ডেলিভারি অপশন",
      deliveryText:
        "আমরা আপনার ঘড়ি নিরাপদে এবং সময়মতো পৌঁছানোর জন্য একাধিক ডেলিভারি অপশন অফার করি। স্ট্যান্ডার্ড ডেলিভারি ৩-৫ ব্যবসায়িক দিন সময় নেয়, যেখানে জরুরি অর্ডারের জন্য ১-২ ব্যবসায়িক দিনের মধ্যে এক্সপ্রেস ডেলিভারি পাওয়া যায়।",
      shippingTitle: "শিপিং খরচ",
      shippingText:
        "$১০০ এর উপরে অর্ডারের জন্য স্ট্যান্ডার্ড শিপিং বিনামূল্যে। এক্সপ্রেস শিপিং অতিরিক্ত খরচে পাওয়া যায়। আন্তর্জাতিক শিপিং হার অবস্থান অনুযায়ী পরিবর্তিত হয়।",
      trackingTitle: "অর্ডার ট্র্যাকিং",
      trackingText:
        "আপনার অর্ডার শিপ হওয়ার পরে, আপনি ইমেইলের মাধ্যমে একটি ট্র্যাকিং নম্বর পাবেন। আপনি রিয়েল-টাইমে আপনার প্যাকেজ ট্র্যাক করতে এটি ব্যবহার করতে পারেন।",
      paymentTitle: "পেমেন্ট পদ্ধতি",
      paymentText: "আমরা সমস্ত প্রধান ক্রেডিট কার্ড, ডেবিট কার্ড এবং স্থানীয় অর্ডারের জন্য ক্যাশ অন ডেলিভারি গ্রহণ করি।",
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-muted flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{t.title}</h1>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="flex gap-6">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Truck className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t.deliveryTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.deliveryText}</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <CreditCard className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t.shippingTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.shippingText}</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t.trackingTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.trackingText}</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t.paymentTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.paymentText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
