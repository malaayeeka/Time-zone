"use client"

import { useState, useEffect } from "react"
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

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import { auth } from "@/lib/firebase"

import { Eye, EyeOff } from "lucide-react"

export function LoginModal({ open, onOpenChange, onSuccess }) {
  const { language, login } = useApp()
  const t = translations[language]

  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)

  useEffect(() => {
    const email = formData.email
    const password = formData.password

    const emailValid = email.includes("@") && email.endsWith(".com")
    setIsEmailValid(emailValid)

    // Password validation only for SIGNUP
    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
      password
    )
    setIsPasswordValid(passwordValid)
  }, [formData.email, formData.password])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      let userCredential

      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        )
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        )
      }

      const user = userCredential.user

      login({
        name: formData.name || user.email.split("@")[0],
        email: user.email,
        uid: user.uid,
      })

      onOpenChange(false)
      onSuccess?.()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Button enable rules:
  const canSubmit =
    isEmailValid &&
    (isLogin
      ? formData.password.length > 0 // login: just not empty
      : isPasswordValid) // signup: strong password

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
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={
                  language === "en" ? "Enter your name" : "আপনার নাম লিখুন"
                }
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
              placeholder={
                language === "en"
                  ? "Enter your email"
                  : "আপনার ইমেইল লিখুন"
              }
            />
            {!isEmailValid && formData.email.length > 0 && (
              <p className="text-xs text-red-500">
                Invalid email. Must contain @ and .com
              </p>
            )}
          </div>

          <div className="space-y-2 relative">
            <Label htmlFor="modal-password">{t.password}</Label>
            <Input
              id="modal-password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={handleChange}
              placeholder={
                language === "en"
                  ? "Enter your password"
                  : "আপনার পাসওয়ার্ড লিখুন"
              }
            />

            {/* Eye icon */}
            <button
              type="button"
              className="absolute right-3 top-10 z-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>

            {!isLogin && !isPasswordValid && formData.password.length > 0 && (
              <p className="text-xs text-red-500">
                Password must be 8-15 chars and include uppercase, lowercase,
                number & symbol.
              </p>
            )}
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <DialogFooter className="flex-col gap-2 sm:flex-col">
            <Button type="submit" className="w-full" disabled={!canSubmit || loading}>
              {loading
                ? language === "en"
                  ? "Please wait..."
                  : "অপেক্ষা করুন..."
                : isLogin
                ? t.login
                : t.signupTitle}
            </Button>

            <Button
              type="button"
              variant="link"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm"
            >
              {isLogin ? t.dontHaveAccount : t.alreadyHaveAccount}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
