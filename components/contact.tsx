"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const FORM_ID = "https://formspree.io/f/xpwylwwy";
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 2. Hacemos la petición directamente al endpoint de Formspree
      const response = await fetch(FORM_ID, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Formspree acepta directamente los datos del formulario
        body: JSON.stringify(formData),
      });

      // 3. Formspree responde con un código 200 (OK) o 201 (Created) al éxito.
      if (response.ok) {
        console.log("[v2] Formulario enviado con éxito a Formspree.");
        alert("¡Mensaje enviado! Gracias por contactarnos. Te responderemos pronto.");

        // Limpiar el formulario
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        // Manejar errores (Formspree devuelve errores si hay validación, spam, etc.)
        const errorData = await response.json(); // Leemos la respuesta de error de Formspree
        console.error("[v2] Error al enviar a Formspree:", errorData);

        // Muestra un mensaje de error más específico si es posible
        if (errorData.error) {
          alert(`Error al enviar: ${errorData.error}`);
        } else {
          alert("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
        }
      }
    } catch (error) {
      // Manejar errores de red
      console.error("[v2] Error de conexión:", error);
      alert("Hubo un error de conexión. Por favor, verifica tu internet.");
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Contacta</span> con Nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            ¿Tienes un proyecto en mente? Estamos listos para ayudarte a hacerlo realidad
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
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
                        className="bg-background border-border text-foreground"
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
                        className="bg-background border-border text-foreground"
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
                      className="bg-background border-border text-foreground"
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
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Enviar Mensaje
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-card-foreground">Email</h3>
                    <p className="text-muted-foreground">luismedina@quantify.net.pe</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-card-foreground">Teléfono</h3>
                    <p className="text-muted-foreground">+51 965 665 045</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-card-foreground">Oficina</h3>
                    <p className="text-muted-foreground">
                      Huancayo
                      <br />
                      Perú
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
