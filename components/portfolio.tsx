import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Sistema de la Botica Said",
    description: "Software para gestión de ventas, inventario y reportes.",
    image: "/boticaSaid.jpeg",
    tags: ["React", "Next.js", "Spring Boot"],
    category: "Salud",
  },
  {
    title: "CRM Empresarial",
    description: "Sistema de gestión de relaciones con clientes y automatización de ventas.",
    image: "/crm-dashboard-analytics.jpg",
    tags: ["React", "Django", "Redis"],
    category: "Empresarial",
  },
  {
    title: "Panadería Delicia",
    description: "Software a medida creado para la Panaderia Delicia.",
    image: "/PanaderiaDelicia.jpeg",
    tags: ["React", "Next.js", "Spring Boot"],
    category: "Postre",
  },
  {
    title: "Sistema de Planillas DREJ",
    description: "Gestion de boleta personales admninistrativas de la DREJ.",
    image: "/PlanillasDrej.png",
    tags: ["Laravel", "Angular", "PostgreSQL"],
    category: "Empresarial",
  },
  {
    title: "Sistema de Gestión Hospitalaria",
    description: "Plataforma integral para gestión de pacientes, citas y historiales médicos.",
    image: "/hospital-management-dashboard.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "Salud",
  },
  {
    title: "E-commerce Multivendedor",
    description: "Marketplace completo con gestión de inventario, pagos y logística.",
    image: "/ecommerce-marketplace-interface.jpg",
    tags: ["Next.js", "Stripe", "MongoDB"],
    category: "Retail",
  },
  {
    title: "App de Gestión Financiera",
    description: "Aplicación móvil para control de gastos y análisis financiero personal.",
    image: "/financial-management-mobile-app.jpg",
    tags: ["React Native", "Firebase", "Charts"],
    category: "Finanzas",
  },
  {
    title: "Portal Educativo",
    description: "Plataforma de e-learning con cursos, evaluaciones y seguimiento de progreso.",
    image: "/online-learning-platform.png",
    tags: ["Vue.js", "Laravel", "MySQL"],
    category: "Educación",
  },
]

export function Portfolio() {
  return (
    <section id="portafolio" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestro <span className="text-secondary">Portafolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Proyectos exitosos que demuestran nuestra experiencia y compromiso con la excelencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden group hover:border-secondary transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary text-secondary-foreground">{project.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-card-foreground flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="border-border text-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
