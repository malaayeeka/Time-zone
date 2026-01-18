"use client"

import { useApp } from "@/lib/app-context"

export default function PrivacyPage() {
  const { language } = useApp()

  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] bg-muted flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{language === "en" ? "Privacy Policy" : "গোপনীয়তা নীতি"}</h1>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl prose prose-lg">
          <p className="text-muted-foreground leading-relaxed">
            {language === "en"
              ? "Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information when you use our website and services."
              : "আপনার গোপনীয়তা আমাদের কাছে গুরুত্বপূর্ণ। এই গোপনীয়তা নীতি ব্যাখ্যা করে যে আপনি যখন আমাদের ওয়েবসাইট এবং সেবা ব্যবহার করেন তখন আমরা কীভাবে আপনার ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষা করি।"}
          </p>
        </div>
      </section>
    </div>
  )
}
