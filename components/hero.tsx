"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="pt-32 pb-20 px-4 lg:px-8 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm text-secondary font-medium">Desarrollo de Software a Medida</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Transformamos tus <span className="text-primary">ideas</span> en{" "}
            <span className="text-secondary">soluciones digitales</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
            Creamos software personalizado que impulsa el crecimiento de tu negocio. Desde aplicaciones web hasta
            sistemas empresariales complejos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
              onClick={() => scrollToSection("contacto")}
            >
              Comenzar Proyecto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-border hover:bg-card bg-transparent"
              onClick={() => scrollToSection("portafolio")}
            >
              Ver Portafolio
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfacción Cliente</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Años Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
