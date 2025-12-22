"use client"

import { useApp } from "@/lib/app-context"
import { Clock, Award, Users, Shield } from "lucide-react"

export default function AboutPage() {
  const { language } = useApp()

  const content = {
    en: {
      title: "About Us",
      subtitle: "Your Trusted Watch Destination",
      story:
        "Since our establishment, we have been dedicated to providing premium quality watches to our customers. Our passion for timepieces drives us to curate the finest collections from around the world.",
      mission: "Our Mission",
      missionText:
        "To deliver exceptional quality watches and outstanding customer service, making luxury timepieces accessible to everyone.",
      values: "Our Values",
      value1Title: "Quality First",
      value1Text: "We ensure every watch meets the highest standards of craftsmanship and durability.",
      value2Title: "Customer Satisfaction",
      value2Text: "Your happiness is our priority. We go above and beyond to ensure you're satisfied.",
      value3Title: "Trust & Authenticity",
      value3Text: "All our watches are 100% authentic with proper documentation and warranty.",
      value4Title: "Expert Service",
      value4Text: "Our knowledgeable team is always ready to assist you in finding the perfect watch.",
    },
    bn: {
      title: "আমাদের সম্পর্কে",
      subtitle: "আপনার বিশ্বস্ত ঘড়ির গন্তব্য",
      story:
        "আমাদের প্রতিষ্ঠার পর থেকে, আমরা আমাদের গ্রাহকদের প্রিমিয়াম মানের ঘড়ি সরবরাহ করতে নিবেদিত। টাইমপিসের প্রতি আমাদের আবেগ আমাদের বিশ্বজুড়ে সেরা সংগ্রহ কিউরেট করতে অনুপ্রাণিত করে।",
      mission: "আমাদের লক্ষ্য",
      missionText: "ব্যতিক্রমী মানের ঘড়ি এবং অসামান্য গ্রাহক সেবা প্রদান করা, বিলাসবহুল টাইমপিসকে সবার জন্য সহজলভ্য করা।",
      values: "আমাদের মূল্যবোধ",
      value1Title: "গুণমান প্রথম",
      value1Text: "আমরা নিশ্চিত করি যে প্রতিটি ঘড়ি কারুশিল্প এবং স্থায়িত্বের সর্বোচ্চ মান পূরণ করে।",
      value2Title: "গ্রাহক সন্তুষ্টি",
      value2Text: "আপনার সুখ আমাদের অগ্রাধিকার। আমরা আপনার সন্তুষ্টি নিশ্চিত করতে সর্বাত্মক চেষ্টা করি।",
      value3Title: "বিশ্বাস এবং সত্যতা",
      value3Text: "আমাদের সমস্ত ঘড়ি যথাযথ ডকুমেন্টেশন এবং ওয়ারেন্টি সহ ১০০% খাঁটি।",
      value4Title: "বিশেষজ্ঞ সেবা",
      value4Text: "আমাদের জ্ঞানী দল সর্বদা নিখুঁত ঘড়ি খুঁজে পেতে আপনাকে সহায়তা করতে প্রস্তুত।",
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

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">{t.story}</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">{t.mission}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t.missionText}</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.values}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{t.value1Title}</h3>
              <p className="text-muted-foreground text-sm">{t.value1Text}</p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{t.value2Title}</h3>
              <p className="text-muted-foreground text-sm">{t.value2Text}</p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{t.value3Title}</h3>
              <p className="text-muted-foreground text-sm">{t.value3Text}</p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{t.value4Title}</h3>
              <p className="text-muted-foreground text-sm">{t.value4Text}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
