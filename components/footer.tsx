"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">OfflineImpacto</h3>
            <p className="text-gray-300 mb-4">
              Tu agencia de marketing offline en España. Creamos impacto real para tu marca con estrategias innovadoras
              y efectivas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios/vallas-publicitarias"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleNavigation}
                >
                  Vallas Publicitarias
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/publicidad-transporte"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleNavigation}
                >
                  Publicidad en Transporte
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/material-promocional"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleNavigation}
                >
                  Material Promocional
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/folletos-catalogos"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleNavigation}
                >
                  Folletos y Catálogos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/eventos-activaciones"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleNavigation}
                >
                  Eventos y Activaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nosotros"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleNavigation}
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleNavigation}
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleNavigation}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleNavigation}
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-privacidad"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleNavigation}
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-cookies"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleNavigation}
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Calle Gran Vía, 49, 28013 Madrid, España</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-red-500 flex-shrink-0" />
                <a href="tel:+34910421426" className="text-gray-300 hover:text-white transition-colors">
                  +34 910 421 426
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-red-500 flex-shrink-0" />
                <a
                  href="mailto:contact@offlineimpacto.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contact@offlineimpacto.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} OfflineImpacto. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
