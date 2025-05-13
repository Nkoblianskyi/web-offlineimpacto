import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight, CheckCircle, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import ProjectCard from "@/components/project-card"
import BlogCard from "@/components/blog-card"
import FAQAccordion from "@/components/faq-accordion"

// Importar datos
import services from "@/data/services.json"
import projects from "@/data/projects.json"
import blog from "@/data/blog.json"
import faq from "@/data/faq.json"

// Importar iconos dinámicamente
import * as LucideIcons from "lucide-react"

export const metadata: Metadata = {
  title: "OfflineImpacto - Agencia de Marketing Offline en España",
  description:
    "Agencia especializada en marketing offline: vallas publicitarias, publicidad en transporte, material promocional, folletos y eventos en toda España.",
}

export default function Home() {
  // Función para obtener iconos dinámicamente
  const getIcon = (iconName: string) => {
    if (!iconName) return null
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons]
    return Icon ? <Icon size={28} /> : null
  }

  // Filtrar datos para mostrar solo algunos en la página principal
  const featuredServices = services.slice(0, 3)
  const featuredProjects = projects.slice(0, 3)
  const featuredPosts = blog.slice(0, 3)
  const featuredFAQs = faq.slice(0, 4)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Marketing Offline"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Marketing Offline con Impacto Real
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Creamos experiencias de marca memorables en el mundo físico. Vallas publicitarias, publicidad en
              transporte, material promocional y eventos que conectan con tu audiencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg bg-red-600 hover:bg-red-700">
                <Link href="/servicios">Nuestros Servicios</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="/contacto">Solicitar Presupuesto</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Sobre OfflineImpacto</h2>
              <p className="text-gray-700 mb-6">
                Somos una agencia de marketing offline con sede en Madrid y operaciones en toda España. Nos
                especializamos en crear experiencias de marca tangibles que generan un impacto duradero en tu audiencia.
              </p>
              <p className="text-gray-700 mb-6">
                En un mundo cada vez más digital, el marketing offline ofrece oportunidades únicas para conectar con los
                consumidores de forma memorable y diferencial. Nuestro enfoque combina creatividad estratégica con
                ejecución impecable para maximizar el retorno de tu inversión publicitaria.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Más de 10 años de experiencia en el sector",
                  "Equipo multidisciplinar de especialistas",
                  "Cobertura en toda España",
                  "Enfoque orientado a resultados medibles",
                  "Compromiso con la sostenibilidad",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/nosotros" className="flex items-center">
                  Conoce Más Sobre Nosotros
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/about.jpg"
                alt="Equipo de OfflineImpacto"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-white ">Nuestros Servicios</h2>
            <p className="section-description">
              Ofrecemos una amplia gama de servicios de marketing offline para ayudarte a conectar con tu audiencia de
              forma efectiva y memorable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
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
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              <Link href="/servicios" className="flex items-center mx-auto">
                Ver Todos los Servicios
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Proyectos Destacados</h2>
            <p className="section-description">
              Descubre algunos de nuestros trabajos más recientes y cómo hemos ayudado a nuestros clientes a alcanzar
              sus objetivos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              <Link href="/proyectos" className="flex items-center mx-auto">
                Ver Todos los Proyectos
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Últimos Artículos</h2>
            <p className="section-description">
              Mantente al día con las últimas tendencias y estrategias en marketing offline a través de nuestro blog.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                image={post.image}
                author={post.author}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              <Link href="/blog" className="flex items-center mx-auto">
                Ver Todos los Artículos
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Preguntas Frecuentes</h2>
            <p className="section-description">Resolvemos tus dudas sobre nuestros servicios de marketing offline.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={featuredFAQs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">¿Listo para dar el siguiente paso?</h2>
            <p className="text-xl mb-8 text-white">
              Contáctanos hoy mismo para discutir cómo podemos ayudarte a crear una estrategia de marketing offline
              efectiva para tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="/servicios">Explorar Servicios</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Link href="/contacto" className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contactar Ahora
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
