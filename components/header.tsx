"use client"
import Image from 'next/image';
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2 } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/logoSinFondo.png"
              alt="Logo de Quantify"
              width={150} 
              height={32} 
              className="object-contain" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("portafolio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("portafolio")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Nosotros
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
            >
              Contacto
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
