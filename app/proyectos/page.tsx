import type { Metadata } from "next"
import ProjectCard from "@/components/project-card"
import projects from "@/data/projects.json"

export const metadata: Metadata = {
  title: "Proyectos | OfflineImpacto - Agencia de Marketing Offline",
  description:
    "Explora nuestros proyectos de marketing offline: campañas publicitarias, eventos, material promocional y más.",
}

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Proyectos</h1>
            <p className="text-xl text-gray-600">
              Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos a través de estrategias de
              marketing offline efectivas.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                client={project.client}
                category={project.category}
                description={project.description}
                image={project.images[0]}
                year={project.year}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
