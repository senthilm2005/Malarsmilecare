"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">Naga Dental Clinic</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          <Button asChild>
            <Link href="/appointment">Book Appointment</Link>
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className={cn("h-6 w-6", isMenuOpen ? "hidden" : "block")} />
          <X className={cn("h-6 w-6", isMenuOpen ? "block" : "hidden")} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      <div className={cn("container md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="flex flex-col space-y-4 py-4">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
            <Link href="/appointment">Book Appointment</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
