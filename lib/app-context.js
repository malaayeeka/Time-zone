"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AppContext = createContext()

export function AppProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState("en")
  const [currency, setCurrency] = useState("usd")
  const [theme, setTheme] = useState("light")
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])
  useEffect(() => setMounted(true), []);

  // Load saved preferences
  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en"
    const savedCurrency = localStorage.getItem("currency") || "usd"
    const savedUser = localStorage.getItem("user")
    const savedCart = localStorage.getItem("cart")

    setLanguage(savedLang)
    setCurrency(savedCurrency)
    if (savedUser) setUser(JSON.parse(savedUser))
    if (savedCart) setCart(JSON.parse(savedCart))

    // Check system theme preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light")
      if (e.matches) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === "en" ? "bn" : "en"
    setLanguage(newLang)
    localStorage.setItem("language", newLang)
  }

  const toggleCurrency = () => {
    const newCurrency = currency === "usd" ? "bdt" : "usd"
    setCurrency(newCurrency)
    localStorage.setItem("currency", newCurrency)
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const login = (userData) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const addToCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const removeFromCart = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId)
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
  }

  const formatPrice = (price) => {
    if (currency === "usd") {
      return `$${price}`
    } else {
      return `৳${(price * 110).toFixed(0)}`
    }
  }

  return (
    <AppContext.Provider
      value={{
        language,
        currency,
        theme,
        user,
        cart,
        toggleLanguage,
        toggleCurrency,
        toggleTheme,
        login,
        logout,
        addToCart,
        removeFromCart,
        clearCart,
        formatPrice,
      }}
    >
      {mounted ? children : null}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within AppProvider")
  }
  return context
}
