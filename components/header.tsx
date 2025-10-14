"use client"
import Image from 'next/image';
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    if (id === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
      return;
    }

    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    // CAMBIO VISUAL: Añadido shadow-sm para un sutil efecto de "elevación"
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* CAMBIO FUNCIONAL: El logo ahora es un botón que lleva a "inicio" */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-2 cursor-pointer group"
            aria-label="Ir al inicio"
          >
            <Image
              src="/logoSinFondo.png"
              alt="Logo de Quantify"
              width={150}
              height={32}
              className="object-contain transition-transform duration-300 group-hover:scale-105" // Pequeño extra: zoom al logo
            />
          </button>


          <nav className="hidden md:flex items-center gap-8">

            <button
              onClick={() => scrollToSection("servicios")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("portafolio")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
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
        <nav
          className={`
            md:hidden flex flex-col gap-1 overflow-hidden
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-96 pt-2 pb-4' : 'max-h-0'} 
          `}
          aria-hidden={!isMenuOpen}
        >

          <button
            onClick={() => scrollToSection("servicios")}
            className="text-foreground hover:text-primary transition-colors text-left py-2 text-lg"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("portafolio")}
            className="text-foreground hover:text-primary transition-colors text-left py-2 text-lg"
          >
            Portafolio
          </button>
          <button
            onClick={() => scrollToSection("nosotros")}
            className="text-foreground hover:text-primary transition-colors text-left py-2 text-lg"
          >
            Nosotros
          </button>
          <Button
            onClick={() => scrollToSection("contacto")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2 text-lg py-3 h-auto"
          >
            Contacto
          </Button>
        </nav>
      </div>
    </header>
  )
}