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
    <section id="servicios" className="py-20 px-4 lg:px-8 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos soluciones tecnológicas integrales adaptadas a las necesidades específicas de tu empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
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
