"use client"

import { useApp } from "@/lib/app-context"

export default function TermsPage() {
  const { language } = useApp()

  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] bg-muted flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{language === "en" ? "Terms & Conditions" : "শর্তাবলী"}</h1>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl prose prose-lg">
          <p className="text-muted-foreground leading-relaxed">
            {language === "en"
              ? "By using our website and services, you agree to these terms and conditions. Please read them carefully before making any purchase."
              : "আমাদের ওয়েবসাইট এবং সেবা ব্যবহার করে, আপনি এই শর্তাবলীতে সম্মত হন। কোনো ক্রয় করার আগে দয়া করে সেগুলি সাবধানে পড়ুন।"}
          </p>
        </div>
      </section>
    </div>
  )
}
