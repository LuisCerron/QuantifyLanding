import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Smartphone, Cloud, Database, Shield, Zap } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y escalables con las últimas tecnologías.",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma para iOS y Android.",
  },
  {
    icon: Cloud,
    title: "Soluciones Cloud",
    description: "Arquitecturas cloud escalables y seguras en AWS, Azure y GCP.",
  },
  {
    icon: Database,
    title: "Sistemas Empresariales",
    description: "ERP, CRM y sistemas personalizados para optimizar tu negocio.",
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Auditorías de seguridad y protección de datos empresariales.",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Automatización de procesos para aumentar la eficiencia operativa.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 px-4 lg:px-8 bg-secondary">
      <div className="container mx-auto">
        
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-12 duration-500 ease-in-out">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Soluciones
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos soluciones tecnológicas integrales adaptadas a las necesidades específicas de tu empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="
                  bg-card border-border 
                  h-full flex flex-col 
                  group transition-all duration-300
                  
                  /* CAMBIO AQUÍ: Añadido 'hover:border-primary' para combinar los efectos */
                  hover:shadow-xl hover:-translate-y-1.5 hover:border-primary

                  animate-in fade-in slide-in-from-bottom-8 duration-500 ease-in-out
                "
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div 
                    className="
                      h-12 w-12 rounded-lg bg-primary/10 
                      flex items-center justify-center mb-4
                      group-hover:bg-primary/20
                      transition-all duration-300
                    "
                  >
                    <Icon 
                      className="
                        h-6 w-6 text-primary 
                        group-hover:scale-110
                        transition-transform duration-300
                      " 
                    />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}