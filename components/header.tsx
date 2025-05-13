"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  {
    name: "Servicios",
    href: "/servicios",
    submenu: [
      { name: "Vallas Publicitarias", href: "/servicios/vallas-publicitarias" },
      { name: "Publicidad en Transporte", href: "/servicios/publicidad-transporte" },
      { name: "Material Promocional", href: "/servicios/material-promocional" },
      { name: "Folletos y Catálogos", href: "/servicios/folletos-catalogos" },
      { name: "Eventos y Activaciones", href: "/servicios/eventos-activaciones" },
    ],
  },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    handleNavigation()
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-gray-50 py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={handleNavigation}>
          <span className="text-2xl font-bold text-red-700">
            Offline<span className="text-red-500">Impacto</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) =>
            item.submenu ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-gray-800 hover:text-red-600 transition-colors font-medium">
                    {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {item.submenu.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link
                        href={subItem.href}
                        className="w-full text-gray-700 hover:text-red-600"
                        onClick={handleNavigation}
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-red-600 transition-colors font-medium"
                onClick={handleNavigation}
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/contacto" onClick={handleNavigation}>
              Solicitar Presupuesto
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div className="flex flex-col space-y-2">
                    <span className="font-medium text-gray-900">{item.name}</span>
                    <div className="pl-4 flex flex-col space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="text-gray-700 hover:text-red-600 transition-colors"
                          onClick={closeMenu}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-800 hover:text-red-600 transition-colors font-medium"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white">
              <Link href="/contacto" onClick={closeMenu}>
                Solicitar Presupuesto
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
