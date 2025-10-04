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
    <section id="nosotros" className="py-20 px-4 lg:px-8 bg-card/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="text-primary">Nosotros</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos una empresa de desarrollo de software especializada en crear soluciones tecnológicas a medida que
              impulsan la transformación digital de las empresas.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Con más de 10 años de experiencia en el mercado, hemos ayudado a empresas de diversos sectores a optimizar
              sus procesos, mejorar su eficiencia y alcanzar sus objetivos de negocio a través de la tecnología.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro equipo multidisciplinario combina experiencia técnica con una profunda comprensión de los desafíos
              empresariales, lo que nos permite entregar soluciones que realmente marcan la diferencia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
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
