"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/app-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function LoginModal({ open, onOpenChange, onSuccess }) {
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
      login({ name: formData.email.split("@")[0], email: formData.email })
    } else {
      login({ name: formData.name, email: formData.email })
    }

    onOpenChange(false)
    if (onSuccess) {
      onSuccess()
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isLogin ? t.loginTitle : t.signupTitle}</DialogTitle>
          <DialogDescription>
            {isLogin
              ? language === "en"
                ? "Login to purchase products"
                : "পণ্য কিনতে লগইন করুন"
              : language === "en"
                ? "Create an account to get started"
                : "শুরু করতে একটি অ্যাকাউন্ট তৈরি করুন"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="modal-name">{t.name}</Label>
              <Input
                id="modal-name"
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
            <Label htmlFor="modal-email">{t.email}</Label>
            <Input
              id="modal-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={language === "en" ? "Enter your email" : "আপনার ইমেইল লিখুন"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="modal-password">{t.password}</Label>
            <Input
              id="modal-password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder={language === "en" ? "Enter your password" : "আপনার পাসওয়ার্ড লিখুন"}
            />
          </div>
          <DialogFooter className="flex-col gap-2 sm:flex-col">
            <Button type="submit" className="w-full">
              {isLogin ? t.login : t.signupTitle}
            </Button>
            <Button type="button" variant="link" onClick={() => setIsLogin(!isLogin)} className="text-sm">
              {isLogin ? t.dontHaveAccount : t.alreadyHaveAccount}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
