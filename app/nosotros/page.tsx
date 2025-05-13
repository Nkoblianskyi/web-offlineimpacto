import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Trophy, Lightbulb, Target, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre Nosotros | OfflineImpacto - Agencia de Marketing Offline",
  description:
    "Conoce a OfflineImpacto, tu agencia de marketing offline en España. Nuestro equipo, valores y trayectoria en el sector publicitario.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl text-gray-600">
              Somos OfflineImpacto, una agencia de marketing offline comprometida con crear experiencias de marca
              memorables en el mundo físico.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                OfflineImpacto nació en 2015 con una visión clara: revitalizar el marketing offline en la era digital.
                Fundada por un grupo de profesionales con amplia experiencia en publicidad tradicional, nuestra agencia
                surgió como respuesta a la creciente digitalización del marketing, que dejaba un espacio de oportunidad
                en el mundo físico.
              </p>
              <p className="text-gray-600 mb-4">
                Comenzamos como una pequeña agencia especializada en vallas publicitarias en Madrid, y rápidamente
                expandimos nuestros servicios para incluir publicidad en transporte, material promocional, folletos y
                organización de eventos en toda España.
              </p>
              <p className="text-gray-600 mb-4">
                A lo largo de los años, hemos trabajado con cientos de clientes, desde pequeñas empresas locales hasta
                grandes corporaciones nacionales, ayudándoles a crear conexiones significativas con sus audiencias a
                través de experiencias tangibles y memorables.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
              <Image
                src="/about.jpg"
                alt="Historia de OfflineImpacto"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Estos principios guían todas nuestras decisiones y acciones como agencia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-10 w-10 text-brand-600" />,
                title: "Creatividad Estratégica",
                description:
                  "Creemos que la mejor creatividad es aquella que responde a objetivos claros. Cada idea que desarrollamos está alineada con la estrategia global de nuestros clientes.",
              },
              {
                icon: <Target className="h-10 w-10 text-brand-600" />,
                title: "Resultados Medibles",
                description:
                  "Nos comprometemos a generar impacto real y medible. Implementamos métricas claras para evaluar el éxito de cada campaña y optimizar constantemente.",
              },
              {
                icon: <Users className="h-10 w-10 text-brand-600" />,
                title: "Colaboración",
                description:
                  "Trabajamos en estrecha colaboración con nuestros clientes, convirtiéndonos en una extensión de sus equipos. Creemos que las mejores ideas surgen del trabajo conjunto.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-brand-600" />,
                title: "Excelencia",
                description:
                  "Nos esforzamos por la excelencia en cada detalle. Desde la conceptualización hasta la implementación, mantenemos los más altos estándares de calidad.",
              },
              {
                icon: <Trophy className="h-10 w-10 text-brand-600" />,
                title: "Innovación Constante",
                description:
                  "Aunque trabajamos en medios tradicionales, nuestro enfoque es innovador. Constantemente exploramos nuevas técnicas y tecnologías para mejorar el impacto del marketing offline.",
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-brand-600" />,
                title: "Sostenibilidad",
                description:
                  "Estamos comprometidos con reducir el impacto ambiental de nuestras campañas. Promovemos materiales sostenibles y prácticas responsables en todas nuestras acciones.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Años de Experiencia" },
              { number: "500+", label: "Proyectos Completados" },
              { number: "200+", label: "Clientes Satisfechos" },
              { number: "15", label: "Premios del Sector" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">¿Listo para trabajar juntos?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Descubre cómo podemos ayudarte a crear campañas de marketing offline que generen un impacto real para tu
              marca.
            </p>
            <Button asChild size="lg">
              <Link href="/contacto" className="flex items-center justify-center">
                Contáctanos Hoy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
