import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Quote, CheckCircle } from "lucide-react"
import projects from "@/data/projects.json"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((project) => project.id === params.slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado | OfflineImpacto",
    }
  }

  return {
    title: `${project.title} | OfflineImpacto - Marketing Offline`,
    description: project.description,
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((project) => project.id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{project.title}</h1>
            <p className="text-xl text-gray-700 mb-4">
              Cliente: <span className="text-gray-800">{project.client}</span> | Fecha:{" "}
              <span className="text-gray-800">{project.date}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Imagen ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Descripción del Proyecto</h2>
              <p className="text-gray-700 mb-8">{project.description}</p>

              <h3 className="text-xl font-bold mb-4 text-gray-800">El Desafío</h3>
              <p className="text-gray-700 mb-8">{project.challenge}</p>

              <h3 className="text-xl font-bold mb-4 text-gray-800">Nuestra Solución</h3>
              <p className="text-gray-700 mb-8">{project.solution}</p>

              <h3 className="text-xl font-bold mb-4 text-gray-800">Resultados</h3>
              <p className="text-gray-700 mb-8">{project.results}</p>
            </div>

            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Detalles del Proyecto</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-500 text-sm">Cliente</p>
                    <p className="font-medium text-gray-800">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Categoría</p>
                    <p className="font-medium text-gray-800">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Fecha</p>
                    <p className="font-medium text-gray-800">{project.date}</p>
                  </div>
                </div>
              </div>

              {project.testimonial && (
                <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                  <Quote className="h-8 w-8 text-red-600 mb-4" />
                  <p className="text-gray-700 italic mb-4">"{project.testimonial}"</p>
                  <p className="font-medium text-gray-800">{project.client}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-red-600 text-white rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">¿Te gustaría un proyecto similar?</h2>
            <p className="text-lg mb-8 text-white">
              Contáctanos hoy mismo para discutir cómo podemos ayudarte a crear una campaña de marketing offline
              efectiva para tu negocio.
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

      {/* Related Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Proyectos Relacionados</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">Explora otros proyectos similares que hemos realizado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <div key={relatedProject.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={relatedProject.images[0] || "/placeholder.svg"}
                      alt={relatedProject.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{relatedProject.title}</h3>
                    <p className="text-gray-700 mb-4 line-clamp-2">{relatedProject.description}</p>
                    <Button asChild variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                      <Link href={`/proyectos/${relatedProject.id}`}>Ver Proyecto</Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
