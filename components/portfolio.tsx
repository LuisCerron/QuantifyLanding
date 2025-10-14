import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image" 

const projects = [
  {
    title: "Sistema para boticas",
    description: "Software para gestión de ventas, inventario y reportes.",
    image: "/boticaSaid.jpeg",
    tags: ["React", "Next.js", "Spring Boot"],
    category: "Salud",
    url: "http://37.60.233.86:6969/",
  },
  {
    title: "Sistema de gestión de restaurantes",
    description: "Sistema para restaurantes(pedidos,caja,reportes,boletas,etc).",
    image: "/quantifyGourmet.png",
    tags: ["React", "Next.js"],
    category: "Empresarial",
    url: "http://37.60.233.86:4000/",
  },
  {
    title: "Panadería Delicia",
    description: "Software a medida creado para la Panaderia Delicia.",
    image: "/PanaderiaDelicia.jpeg",
    tags: ["React", "Next.js", "Spring Boot"],
    category: "Postre",
    url: "http://37.60.233.86:3000/",
  },
  {
    title: "Sistema de Planillas DREJ",
    description: "Gestion de boleta personales admnistrativas de la DREJ.",
    image: "/PlanillasDrej.png",
    tags: ["Laravel", "Angular", "PostgreSQL"],
    category: "Empresarial",
    url: "https://planillas.drej.edu.pe/login",
  },
  {
    title: "App de Gestión Financiera",
    description: "Aplicación móvil para control de gastos y análisis financiero personal.",
    image: "/financial-management-mobile-app.jpg",
    tags: ["React Native", "Firebase", "Charts"],
    category: "Finanzas",
    url: "http://37.60.233.86:3000/",
  },
]

export function Portfolio() {
  return (
    
    <section id="portafolio" className="py-24 px-4 lg:px-8 bg-secondary">
      <div className="container mx-auto">
        
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-12 duration-500 ease-in-out">
          
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Proyectos Recientes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Nuestro <span className="text-primary">Portafolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Proyectos exitosos que demuestran nuestra experiencia y compromiso con la excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              // CAMBIO: 'group' y animación de entrada escalonada
              className="block group animate-in fade-in slide-in-from-bottom-8 duration-500 ease-in-out"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* CAMBIO: 'h-full' y 'flex-col' para tarjetas de altura uniforme */}
              <Card
                className="
                  bg-card border-border overflow-hidden h-full flex flex-col
                  transition-all duration-300
                  group-hover:shadow-xl group-hover:-translate-y-1.5 /* Efecto lift */
                "
              >
                {/* Contenedor de la imagen */}
                <div className="relative overflow-hidden h-48 flex-shrink-0">
                  {/* CAMBIO: Usando Next/Image para optimización */}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4">
                    {/* CAMBIO: 'secondary' a 'primary' y sombra */}
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                {/* CAMBIO: 'flex-grow' y 'justify-between' para alinear tags al fondo */}
                <CardContent className="p-6 flex-grow flex flex-col justify-between">
                  {/* Contenido superior (título, descripción) */}
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground flex items-center justify-between">
                      {project.title}
                      {/* CAMBIO: Micro-interacción de "lanzamiento" */}
                      <ExternalLink 
                        className="
                          h-5 w-5 text-muted-foreground flex-shrink-0
                          group-hover:text-primary 
                          group-hover:translate-x-1 group-hover:-translate-y-1 
                          transition-all duration-300
                        " 
                      />
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Contenido inferior (tags) */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, tagIndex) => (
                      // CAMBIO: Estilo de Badge más moderno
                      <Badge 
                        key={tagIndex} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}