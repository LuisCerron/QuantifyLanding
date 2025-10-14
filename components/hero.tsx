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
    <section 
      id="inicio" 
      className="relative pt-32 pb-20 px-4 lg:px-8 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 0.1), transparent 80%)'
        }}
      />

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          
          <div 
            className="
              inline-flex items-center gap-2 px-4 py-2 rounded-full 
              bg-card border border-border mb-8
              animate-in fade-in slide-in-from-top-4 duration-500 ease-in-out
            "
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">Desarrollo de Software a Medida</span>
          </div>

          <h1 
            className="
              text-5xl md:text-7xl font-bold mb-6 text-balance
              animate-in fade-in slide-in-from-top-8 duration-700 delay-100 ease-in-out
            "
          >
            Transformamos tus{" "}
            <span 
              className="
                bg-gradient-to-r from-primary to-primary/70 
                bg-clip-text text-transparent
              "
            >
              ideas
            </span> 
            {" "}en{" "}
            <span className="text-primary">soluciones digitales</span>
          </h1>

          <p 
            className="
              text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed
              animate-in fade-in slide-in-from-top-12 duration-700 delay-200 ease-in-out
            "
          >
            Creamos software personalizado que impulsa el crecimiento de tu negocio. Desde aplicaciones web hasta
            sistemas empresariales complejos.
          </p>

          {/* CAMBIO: Animación de entrada para el grupo de botones */}
          <div 
            className="
              flex flex-col sm:flex-row gap-4 justify-center
              animate-in fade-in slide-in-from-top-16 duration-700 delay-300 ease-in-out
            "
          >
            <Button
              size="lg"
              className="
                group text-lg px-8 shadow-lg shadow-primary/20 
                hover:shadow-xl hover:shadow-primary/30 /* Sombra elevada */
                transition-all duration-300
              "

              onClick={() => scrollToSection("contacto")}
            >
              Comenzar Proyecto
              {/* CAMBIO: Micro-interacción en la flecha */}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="
                text-lg px-8 border-border 
                hover:bg-accent hover:border-accent-foreground /* Mejor hover */
                transition-colors duration-300
              "
              onClick={() => scrollToSection("portafolio")}
            >
              Ver Portafolio
            </Button>
          </div>

          {/* CAMBIO: Stats más cerca (mt-16) y con animación */}
          <div 
            className="
              mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4
              animate-in fade-in slide-in-from-top-20 duration-700 delay-400 ease-in-out
            "
          >
            {/* CAMBIO: Contenedor con hover para cada stat */}
            <div className="group rounded-lg p-2 -m-2 transition-colors duration-300 hover:bg-card/50">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                Proyectos Completados
              </div>
            </div>
            <div className="group rounded-lg p-2 -m-2 transition-colors duration-300 hover:bg-card/50">
              {/* CAMBIO: 'text-secondary' a 'text-primary' por consistencia */}
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                Satisfacción Cliente
              </div>
            </div>
            <div className="group rounded-lg p-2 -m-2 transition-colors duration-300 hover:bg-card/50">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                Años Experiencia
              </div>
            </div>
            <div className="group rounded-lg p-2 -m-2 transition-colors duration-300 hover:bg-card/50">
              {/* CAMBIO: 'text-secondary' a 'text-primary' por consistencia */}
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                Soporte Técnico
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}