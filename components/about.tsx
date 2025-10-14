import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Lightbulb, Award } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Enfoque en Resultados",
    description: "Nos comprometemos a entregar soluciones que generen valor real para tu negocio.",
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Profesionales certificados con amplia experiencia en tecnologías de vanguardia.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "Adoptamos las últimas tecnologías para mantener tu negocio a la vanguardia.",
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Procesos rigurosos de testing y QA para asegurar software de alta calidad.",
  },
]

export function About() {
  return (
    // El fondo 'bg-secondary' y el padding 'py-24' se mantienen
    <section id="nosotros" className="py-24 px-4 lg:px-8 bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna de Texto (Sin cambios) */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Quiénes Somos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Sobre <span className="text-primary">Nosotros</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos una empresa de desarrollo de software especializada en crear soluciones tecnológicas a medida que
              impulsan la transformación digital de las empresas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Con más de 10 años de experiencia, hemos ayudado a empresas de diversos sectores a optimizar
              sus procesos, mejorar su eficiencia y alcanzar sus objetivos de negocio.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro equipo multidisciplinario combina experiencia técnica con una profunda comprensión de los desafíos
              empresariales, entregando soluciones que marcan la diferencia.
            </p>
          </div>

          {/* Columna de Cards (Valores) */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card 
                  key={index} 
                  className="
                    bg-card border-border 
                    group hover:shadow-lg hover:-translate-y-1.5 /* Efecto lift y sombra (sin cambios) */
                    transition-all duration-300 ease-in-out
                  "
                >
                  <CardContent className="p-6">
                    {/* CAMBIO: Interacción de icono modificada */}
                    <div 
                      className="
                        h-12 w-12 rounded-lg bg-primary/10 
                        flex items-center justify-center mb-4
                        group-hover:bg-primary/20 /* 1. Fondo se oscurece ligeramente */
                        transition-all duration-300
                      "
                    >
                      <Icon 
                        className="
                          h-6 w-6 text-primary
                          group-hover:scale-110 /* 2. Icono se agranda (no cambia color) */
                          transition-all duration-300
                        " 
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-card-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}