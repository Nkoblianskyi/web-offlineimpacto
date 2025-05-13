import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Quote } from "lucide-react"
import portfolio from "@/data/portfolio.json"
import type { Metadata } from "next"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = portfolio.find((project) => project.id === params.slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado | OfflineImpacto",
    }
  }

  return {
    title: `${project.title} | OfflineImpacto - Agencia de Marketing Offline`,
    description: project.description.substring(0, 160),
  }
}

export async function generateStaticParams() {
  return portfolio.map((project) => ({
    slug: project.id,
  }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = portfolio.find((project) => project.id === slug)

  if (!project) {
    notFound()
  }

  // Find related projects (same category, excluding current one)
  const relatedProjects = portfolio.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/trabajos" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Trabajos
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{project.title}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </div>
              <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {project.client}
              </div>
              <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{project.date}</div>
            </div>
            <p className="text-xl text-gray-700">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project Images Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={
                    image || `/placeholder.svg?height=800&width=1200&query=${project.title} project image ${index + 1}`
                  }
                  alt={`${project.title} - Imagen ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">El Desafío</h2>
                <p className="text-gray-700">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Nuestra Solución</h2>
                <p className="text-gray-700">{project.solution}</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Resultados</h2>
              <p className="text-gray-700">{project.results}</p>
            </div>

            {project.testimonial && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <Quote className="h-10 w-10 text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 italic mb-4">"{project.testimonial}"</p>
                    <p className="font-medium text-gray-800">- {project.client}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Used Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Servicios Utilizados</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.services.map((service, index) => (
                <div key={index} className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg text-center">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Proyectos Relacionados</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Descubre otros proyectos similares que hemos realizado en la categoría de{" "}
                {project.category.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <div key={relatedProject.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="relative h-48">
                    <Image
                      src={
                        relatedProject.images[0] ||
                        `/placeholder.svg?height=400&width=600&query=${relatedProject.title || "/placeholder.svg"} project`
                      }
                      alt={relatedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{relatedProject.title}</h3>
                    <p className="text-gray-700 mb-4 line-clamp-2">{relatedProject.description}</p>
                    <Button asChild variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                      <Link href={`/trabajos/${relatedProject.id}`}>Ver Proyecto</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">¿Te gustaría un proyecto similar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Contáctanos hoy mismo y cuéntanos sobre tu proyecto. Nuestro equipo desarrollará una propuesta adaptada a
            tus necesidades específicas.
          </p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            <Link href="/contacto">Solicitar Presupuesto Gratuito</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
