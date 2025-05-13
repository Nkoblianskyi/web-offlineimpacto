import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import portfolio from "@/data/portfolio.json"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trabajos | OfflineImpacto - Agencia de Marketing Offline",
  description:
    "Descubre nuestros proyectos de marketing offline: campañas en metro, vallas publicitarias, branding corporativo y más.",
}

export default function WorksPage() {
  // Group projects by category
  const categories = [...new Set(portfolio.map((item) => item.category))]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Trabajos</h1>
            <p className="text-xl text-gray-600">
              Descubre algunos de nuestros proyectos más destacados y cómo hemos ayudado a nuestros clientes a alcanzar
              sus objetivos de marketing offline.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {categories.map((category) => (
            <div key={category} className="mb-20">
              <h2 className="text-3xl font-bold mb-8">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolio
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <Card
                      key={project.id}
                      className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="relative h-64">
                        <Image
                          src={
                            project.images[0] ||
                            `/placeholder.svg?height=500&width=800&query=${project.title} marketing project`
                          }
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="text-sm text-red-600 mb-2">{project.client}</div>
                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                        <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
                        <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                          <Link href={`/trabajos/${project.id}`} className="flex items-center justify-center">
                            Ver Proyecto <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Quieres ser nuestro próximo caso de éxito?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a crear campañas de marketing offline que generen
            resultados reales para tu negocio.
          </p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            <Link href="/contacto">Solicitar Presupuesto Gratuito</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
