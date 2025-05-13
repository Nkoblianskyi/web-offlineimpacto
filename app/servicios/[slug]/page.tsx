import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import services from "@/data/services.json"
import * as LucideIcons from "lucide-react"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata(props: ServicePageProps): Promise<Metadata> {
  const { slug } = await props.params // ✅ обов'язкове await

  const service = services.find((service) => service.id === slug)

  if (!service) {
    return {
      title: "Servicio no encontrado | OfflineImpacto",
    }
  }

  return {
    title: `${service.title} | OfflineImpacto - Marketing Offline`,
    description: service.shortDescription,
  }
}


export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params // ✅ обов'язкове `await`
  const service = services.find((service) => service.id === slug)

  if (!service) {
    notFound()
  }

  // Función para obtener iconos dinámicamente
  const getIcon = (iconName: string) => {
    if (!iconName) return null
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons]
    return Icon ? <Icon size={64} className="text-red-600" /> : null
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">{getIcon(service.icon)}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{service.title}</h1>
            <p className="text-xl text-gray-700">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Descripción del Servicio</h2>
              <p className="text-gray-700 mb-8">{service.description}</p>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Características</h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/contacto" className="flex items-center">
                  Solicitar Presupuesto
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src={service.image || `/placeholder.svg?height=800&width=1200&query=${service.title} service`}
                alt={service.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Servicios Relacionados</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Descubre otros servicios que podrían complementar tu estrategia de marketing offline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <div key={relatedService.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    {getIcon(relatedService.icon)}
                    <h3 className="text-xl font-bold text-gray-900">{relatedService.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{relatedService.shortDescription}</p>
                  <Button asChild variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                    <Link href={`/servicios/${relatedService.id}`} className="flex items-center justify-center">
                      Ver Detalles
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-red-600 text-white rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">
              ¿Interesado en nuestro servicio de {service.title.toLowerCase()}?
            </h2>
            <p className="text-lg mb-8 text-white">
              Contáctanos hoy mismo para discutir cómo podemos ayudarte a implementar este servicio en tu estrategia de
              marketing.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/contacto">Solicitar Presupuesto</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
