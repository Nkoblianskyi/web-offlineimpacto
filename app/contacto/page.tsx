import type { Metadata } from "next"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"
import FAQAccordion from "@/components/faq-accordion"
import faq from "@/data/faq.json"

export const metadata: Metadata = {
  title: "Contacto | OfflineImpacto - Agencia de Marketing Offline",
  description:
    "Ponte en contacto con OfflineImpacto para consultas, presupuestos o información sobre nuestros servicios de marketing offline.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl text-gray-600">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta o para solicitar un
              presupuesto personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Envíanos un mensaje</h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible. Todos los campos marcados
                con * son obligatorios.
              </p>

              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Información de contacto</h2>
              <p className="text-gray-600 mb-8">
                Puedes contactarnos directamente a través de los siguientes medios o visitar nuestras oficinas en
                Madrid.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Teléfono</h3>
                    <p className="text-gray-600">+34 910 421 426</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600">contact@offlineimpacto.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Dirección</h3>
                    <p className="text-gray-600">Calle Gran Vía, 49, 28013 Madrid, España</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-brand-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Horario</h3>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image src="/9a2c6a5ba07bf226f89ccced69c7fc4c.jpg" alt="Mapa de ubicación" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faq.slice(0, 5)} />
          </div>
        </div>
      </section>
    </>
  )
}
