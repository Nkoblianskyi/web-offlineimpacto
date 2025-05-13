import type { Metadata } from "next"
import ServiceCard from "@/components/service-card"
import * as LucideIcons from "lucide-react"
import services from "@/data/services.json"

export const metadata: Metadata = {
  title: "Servicios | OfflineImpacto - Agencia de Marketing Offline",
  description:
    "Descubre nuestros servicios de marketing offline: vallas publicitarias, publicidad en transporte, material promocional, folletos y eventos.",
}

export default function ServicesPage() {
  // Función para obtener iconos dinámicamente
  const getIcon = (iconName: string) => {
    if (!iconName) return null
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons]
    return Icon ? <Icon size={28} /> : null
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-gray-600">
              Ofrecemos soluciones completas de marketing offline para ayudarte a conectar con tu audiencia de forma
              efectiva y memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.shortDescription}
                image={service.image}
                icon={getIcon(service.icon)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Proceso</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Trabajamos con una metodología clara para asegurar el éxito de cada proyecto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Análisis y Estrategia",
                description:
                  "Estudiamos tu marca, objetivos y audiencia para desarrollar una estrategia personalizada.",
              },
              {
                number: "02",
                title: "Conceptualización Creativa",
                description: "Creamos conceptos impactantes que transmiten tu mensaje de forma efectiva y memorable.",
              },
              {
                number: "03",
                title: "Producción e Implementación",
                description: "Gestionamos todos los aspectos técnicos y logísticos para una ejecución impecable.",
              },
              {
                number: "04",
                title: "Medición y Optimización",
                description:
                  "Evaluamos los resultados y optimizamos continuamente para maximizar el retorno de inversión.",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-red-600 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
