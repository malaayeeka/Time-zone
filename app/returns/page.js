"use client"

import { useApp } from "@/lib/app-context"
import { RefreshCw, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function ReturnsPage() {
  const { language } = useApp()

  const content = {
    en: {
      title: "Returns & Exchange",
      subtitle: "Our hassle-free return policy",
      policyTitle: "Return Policy",
      policyText:
        "We offer a 30-day return policy on all watches. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange.",
      conditionsTitle: "Return Conditions",
      condition1: "Watch must be in original condition with all packaging and documentation",
      condition2: "Must not show signs of wear or damage",
      condition3: "All tags and protective films must be intact",
      condition4: "Return request must be initiated within 30 days of delivery",
      processTitle: "Return Process",
      processText:
        "To initiate a return, contact our customer service team with your order number. We'll provide you with a return shipping label and instructions.",
      exchangeTitle: "Exchanges",
      exchangeText:
        "If you'd like to exchange your watch for a different model or size, please contact us and we'll be happy to help you with the exchange process.",
    },
    bn: {
      title: "রিটার্ন ও বিনিময়",
      subtitle: "আমাদের ঝামেলামুক্ত রিটার্ন নীতি",
      policyTitle: "রিটার্ন নীতি",
      policyText:
        "আমরা সমস্ত ঘড়িতে ৩০ দিনের রিটার্ন নীতি অফার করি। আপনি যদি আপনার ক্রয়ে সম্পূর্ণভাবে সন্তুষ্ট না হন, তাহলে ৩০ দিনের মধ্যে সম্পূর্ণ রিফান্ড বা বিনিময়ের জন্য ফেরত দিতে পারেন।",
      conditionsTitle: "রিটার্ন শর্তাবলী",
      condition1: "ঘড়ি অবশ্যই সমস্ত প্যাকেজিং এবং ডকুমেন্টেশন সহ মূল অবস্থায় থাকতে হবে",
      condition2: "পরিধান বা ক্ষতির চিহ্ন দেখাতে হবে না",
      condition3: "সমস্ত ট্যাগ এবং প্রতিরক্ষামূলক ফিল্ম অক্ষত থাকতে হবে",
      condition4: "ডেলিভারির ৩০ দিনের মধ্যে রিটার্ন অনুরোধ শুরু করতে হবে",
      processTitle: "রিটার্ন প্রক্রিয়া",
      processText:
        "একটি রিটার্ন শুরু করতে, আপনার অর্ডার নম্বর সহ আমাদের গ্রাহক সেবা দলের সাথে যোগাযোগ করুন। আমরা আপনাকে একটি রিটার্ন শিপিং লেবেল এবং নির্দেশনা প্রদান করব।",
      exchangeTitle: "বিনিময়",
      exchangeText:
        "আপনি যদি আপনার ঘড়ি একটি ভিন্ন মডেল বা আকারের জন্য বিনিময় করতে চান, তাহলে আমাদের সাথে যোগাযোগ করুন এবং আমরা বিনিময় প্রক্রিয়ায় আপনাকে সাহায্য করতে পেরে খুশি হব।",
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
              <RefreshCw className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t.policyTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.policyText}</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t.conditionsTitle}</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{t.condition1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{t.condition2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{t.condition3}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{t.condition4}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <XCircle className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t.processTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.processText}</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <RefreshCw className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t.exchangeTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.exchangeText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
