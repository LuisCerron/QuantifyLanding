import { Code2, Github, Linkedin, Twitter } from "lucide-react"
import Image from 'next/image';
export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                            src="/logoSinFondo.png"
                            alt="Logo de Quantify"
                            width={150} 
                            height={32} 
                            className="object-contain" 
                          />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Transformamos ideas en soluciones digitales innovadoras. Tu socio tecnológico de confianza para el
              desarrollo de software a medida.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portafolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
              >
                <Twitter className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Quantify. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
