"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

type FormStatus = "idle" | "loading" | "success" | "error"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  
  const [status, setStatus] = useState<FormStatus>("idle")
  const [formMessage, setFormMessage] = useState("")

  const FORM_ID = "https://formspree.io/f/xpwylwwy"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading") 
    setFormMessage("")

    try {
      const response = await fetch(FORM_ID, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log("[v2] Formulario enviado con éxito a Formspree.")
        setStatus("success") 
        setFormMessage("¡Mensaje enviado! Gracias por contactarnos.")
        setFormData({ name: "", email: "", phone: "", message: "" }) // Limpiar formulario
      } else {
        const errorData = await response.json()
        console.error("[v2] Error al enviar a Formspree:", errorData)
        setStatus("error") 
        setFormMessage(errorData.error || "Hubo un error al enviar el formulario.")
      }
    } catch (error) {
      console.error("[v2] Error de conexión:", error)
      setStatus("error") 
      setFormMessage("Hubo un error de conexión. Verifica tu internet.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-24 px-4 lg:px-8">
      <div className="container mx-auto">
        
        
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-12 duration-500 ease-in-out">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Hablemos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-primary">Contacta</span> con Nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            ¿Tienes un proyecto en mente? Estamos listos para ayudarte a hacerlo realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="lg:col-span-2 animate-in fade-in slide-in-from-left-12 duration-500 delay-100 ease-in-out">
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Nombre Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+51 000 000 000"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu proyecto..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group" 
                    disabled={status === "loading"} 
                  >
                    {status === "loading" ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
                
                {status === "success" && (
                  <div className="mt-4 text-center text-sm text-green-600 font-medium">
                    {formMessage}
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-4 text-center text-sm text-red-600 font-medium">
                    {formMessage}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="animate-in fade-in slide-in-from-right-12 duration-500 delay-100 ease-in-out">
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <a 
                  href="mailto:luismedina@quantify.net.pe" 
                  className="flex items-start gap-4 group p-2 -m-2 rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-card-foreground">Email</h3>
                    <p className="text-muted-foreground transition-colors group-hover:text-foreground">luismedina@quantify.net.pe</p>
                  </div>
                </a>
                
                {/* CAMBIO: Item de Teléfono interactivo */}
                <a 
                  href="tel:+51965665045" 
                  className="flex items-start gap-4 group p-2 -m-2 rounded-lg hover:bg-accent transition-colors"
                >
                  {/* CAMBIO: Icono a 'primary' por consistencia */}
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-card-foreground">Teléfono</h3>
                    <p className="text-muted-foreground transition-colors group-hover:text-foreground">+51 965 665 045</p>
                  </div>
                </a>

                {/* CAMBIO: Item de Oficina (no interactivo, pero con estilo) */}
                <div className="flex items-start gap-4 p-2 -m-2">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-card-foreground">Oficina</h3>
                    <p className="text-muted-foreground">
                      Huancayo<br />Perú
                    </p>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}