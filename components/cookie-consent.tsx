"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <h3 className="text-lg font-semibold mb-2">Utilizamos cookies</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Este sitio utiliza cookies para mejorar su experiencia. Al continuar navegando, acepta nuestra{" "}
              <Link href="/politica-cookies" className="text-brand-600 hover:underline">
                política de cookies
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" onClick={declineCookies}>
              Rechazar
            </Button>
            <Button onClick={acceptCookies}>Aceptar</Button>
          </div>
          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Cerrar aviso de cookies"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
