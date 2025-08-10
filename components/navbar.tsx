"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

// آیتم‌های منوی ناوبری
const navItems = [
  { name: "خانه", path: "/" },
  { name: "درباره من", path: "/#about" },
  { name: "پروژه‌ها", path: "/#projects" },
  { name: "مهارت‌ها", path: "/#skills" },
  { name: "تجربه کاری", path: "/#experiences" },
  { name: "ارتباط با من", path: "/#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  // بررسی اسکرول برای اعمال استایل متفاوت
  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 rtl",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* <Link
            href="/"
            className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
          >
            نمونه‌کار من
          </Link> */}

          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative text-base font-bold transition-colors hover:text-primary",
                  pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 right-0 left-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 space-x-reverse">
            {/* دکمه تغییر تم */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="تغییر حالت روشن/تاریک"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* دکمه منوی موبایل */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* منوی موبایل */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
        }}
        className={cn(
          "absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg md:hidden",
          !isMobileMenuOpen && "hidden"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "block py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
