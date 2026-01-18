"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/app-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const router = useRouter()
  const { language, login } = useApp()
  const t = translations[language]
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isLogin) {
      // Simple login - in real app, validate against database
      login({ name: formData.email.split("@")[0], email: formData.email })
    } else {
      // Simple signup - in real app, save to database
      login({ name: formData.name, email: formData.email })
    }

    // Redirect to home or return URL
    const returnUrl = new URLSearchParams(window.location.search).get("returnUrl") || "/"
    router.push(returnUrl)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">{isLogin ? t.loginTitle : t.signupTitle}</CardTitle>
          <CardDescription className="text-center">
            {isLogin ? t.dontHaveAccount : t.alreadyHaveAccount}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">{t.name}</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={language === "en" ? "Enter your name" : "আপনার নাম লিখুন"}
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">{t.email}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={language === "en" ? "Enter your email" : "আপনার ইমেইল লিখুন"}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t.password}</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder={language === "en" ? "Enter your password" : "আপনার পাসওয়ার্ড লিখুন"}
              />
            </div>
            <Button type="submit" className="w-full">
              {isLogin ? t.login : t.signupTitle}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="link" onClick={() => setIsLogin(!isLogin)} className="text-sm">
            {isLogin ? t.dontHaveAccount : t.alreadyHaveAccount}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
