import { FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="py-16 grid md:grid-cols-4 gap-12">

          {/* Columna de Logo y Descripción */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logoSinFondo.png"
                alt="Logo de Quantify"
                width={180} 
                height={40} 
                className="object-contain"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Transformamos ideas en soluciones digitales innovadoras. Tu socio tecnológico de confianza para el
              desarrollo de software a medida.
            </p>
          </div>

          {/* Columna de Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#servicios"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out hover:translate-x-1 inline-block"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#portafolio"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out hover:translate-x-1 inline-block"
                >
                  Portafolio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out hover:translate-x-1 inline-block"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out hover:translate-x-1 inline-block"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Conéctate con Nosotros
            </h3>
            <div className="flex gap-4">
              
              <a
                href="https://www.linkedin.com/in/quantify-tech-93245438a/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-10 w-10 rounded-full
                  bg-card border border-border
                  flex items-center justify-center
                  shadow-md
                  text-foreground /* CAMBIO: Color base definido en el padre */
                  hover:bg-primary hover:text-primary-foreground hover:shadow-lg
                  transform hover:scale-110 /* CAMBIO: Efecto de escala */
                  transition-all duration-300 ease-in-out
                "
                aria-label="LinkedIn"
              >
                
                <FaLinkedin className="h-5 w-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/quantify_tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-10 w-10 rounded-full
                  bg-card border border-border
                  flex items-center justify-center
                  shadow-md
                  text-foreground
                  hover:bg-primary hover:text-primary-foreground hover:shadow-lg
                  transform hover:scale-110
                  transition-all duration-300 ease-in-out
                "
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@quantify_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-10 w-10 rounded-full
                  bg-card border border-border
                  flex items-center justify-center
                  shadow-md
                  text-foreground
                  hover:bg-primary hover:text-primary-foreground hover:shadow-lg
                  transform hover:scale-110
                  transition-all duration-300 ease-in-out
                "
                aria-label="TikTok"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background/50 border-t border-border py-6">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Quantify. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}