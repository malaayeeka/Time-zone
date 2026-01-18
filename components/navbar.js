"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useApp } from "@/lib/app-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Search,
  Menu,
  ShoppingCart,
  LogOut,
  Sun,
  Moon,
  Globe,
  DollarSign,
} from "lucide-react"

export function Navbar() {
  const {
    language,
    currency,
    theme,
    user,
    cart,
    toggleLanguage,
    toggleCurrency,
    toggleTheme,
    logout,
  } = useApp()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const t = translations[language]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-xl font-bold">⌚</span>
            </div>
            <span className="text-xl font-bold tracking-tight">TimeZone</span>
          </Link>

          {/* Search - Hidden on mobile */}
          <div className="hidden flex-1 max-w-md mx-8 md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder={t.search} className="w-full pl-10" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Menu Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="mr-2 h-4 w-4" />
                  {t.menu}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/about">{t.about}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact">{t.contact}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/shipping">{t.shipping}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/returns">{t.returns}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Settings Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  {theme === "light" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={toggleTheme}>
                  {theme === "light" ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={toggleLanguage}>
                  <Globe className="mr-2 h-4 w-4" />
                  {language === "en" ? "বাংলা" : "English"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={toggleCurrency}>
                  <DollarSign className="mr-2 h-4 w-4" />
                  {currency === "usd" ? "BDT (৳)" : "USD ($)"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User/Login */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    {t.logout}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">
                  {t.login}
                </Link>
              </Button>
            )}

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-4 w-4" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {cart.length}
                  </span>
                )}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-4 w-4" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {cart.length}
                  </span>
                )}
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-4 mt-8">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input type="search" placeholder={t.search} className="pl-10" />
                  </div>

                  {user ? (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">{user.name}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={logout}
                        className="w-full bg-transparent"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        {t.logout}
                      </Button>
                    </div>
                  ) : (
                    <Button asChild>
                      <Link href="/login">{t.login}</Link>
                    </Button>
                  )}

                  <div className="h-px bg-border" />

                  <Link href="/about" className="text-sm font-medium">
                    {t.about}
                  </Link>
                  <Link href="/contact" className="text-sm font-medium">
                    {t.contact}
                  </Link>
                  <Link href="/shipping" className="text-sm font-medium">
                    {t.shipping}
                  </Link>
                  <Link href="/returns" className="text-sm font-medium">
                    {t.returns}
                  </Link>

                  <div className="h-px bg-border" />

                  <Button variant="outline" size="sm" onClick={toggleTheme}>
                    {theme === "light" ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                  </Button>
                  <Button variant="outline" size="sm" onClick={toggleLanguage}>
                    <Globe className="mr-2 h-4 w-4" />
                    {language === "en" ? "বাংলা" : "English"}
                  </Button>
                  <Button variant="outline" size="sm" onClick={toggleCurrency}>
                    <DollarSign className="mr-2 h-4 w-4" />
                    {currency === "usd" ? "BDT (৳)" : "USD ($)"}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
