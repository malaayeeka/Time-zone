"use client"

import { useState } from "react"
import { useApp } from "@/lib/app-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const { language } = useApp()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with our team",
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      phonePlaceholder: "Your phone number",
      messagePlaceholder: "How can we help you?",
      submitButton: "Send Message",
      contactInfo: "Contact Information",
      address: "123 Watch Street, Dhaka, Bangladesh",
      phone: "+880 1234-567890",
      email: "info@watchstore.com",
      hours: "Business Hours",
      hoursText: "Saturday - Thursday: 9:00 AM - 8:00 PM",
      friday: "Friday: 2:00 PM - 8:00 PM",
    },
    bn: {
      title: "যোগাযোগ করুন",
      subtitle: "আমাদের টিমের সাথে যোগাযোগ করুন",
      nameLabel: "নাম",
      emailLabel: "ইমেইল",
      phoneLabel: "ফোন",
      messageLabel: "বার্তা",
      namePlaceholder: "আপনার নাম",
      emailPlaceholder: "আপনার@ইমেইল.com",
      phonePlaceholder: "আপনার ফোন নম্বর",
      messagePlaceholder: "আমরা কীভাবে আপনাকে সাহায্য করতে পারি?",
      submitButton: "বার্তা পাঠান",
      contactInfo: "যোগাযোগের তথ্য",
      address: "১২৩ ওয়াচ স্ট্রিট, ঢাকা, বাংলাদেশ",
      phone: "+৮৮০ ১২৩৪-৫৬৭৮৯০",
      email: "info@watchstore.com",
      hours: "ব্যবসার সময়",
      hoursText: "শনিবার - বৃহস্পতিবার: সকাল ৯:০০ - রাত ৮:০০",
      friday: "শুক্রবার: দুপুর ২:০০ - রাত ৮:০০",
    },
  }

  const t = content[language]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(language === "en" ? "Message sent successfully!" : "বার্তা সফলভাবে পাঠানো হয়েছে!")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-muted flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{t.title}</h1>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">{t.nameLabel}</Label>
                    <Input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.namePlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">{t.emailLabel}</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">{t.phoneLabel}</Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.phonePlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">{t.messageLabel}</Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.messagePlaceholder}
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    {t.submitButton}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">{t.contactInfo}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{language === "en" ? "Address" : "ঠিকানা"}</h3>
                      <p className="text-muted-foreground">{t.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{language === "en" ? "Phone" : "ফোন"}</h3>
                      <p className="text-muted-foreground">{t.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{language === "en" ? "Email" : "ইমেইল"}</h3>
                      <p className="text-muted-foreground">{t.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">{t.hours}</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>{t.hoursText}</p>
                  <p>{t.friday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
