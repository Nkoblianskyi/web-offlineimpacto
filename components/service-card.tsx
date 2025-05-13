import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  id: string
  title: string
  description: string
  image: string
  icon?: React.ReactNode
}

export default function ServiceCard({ id, title, description, image, icon }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={image || `/placeholder.svg?height=400&width=600&query=${title} marketing service`}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="flex-1 flex flex-col p-6">
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-red-600 flex-shrink-0">{icon}</div>}
          <h3 className="card-title">{title}</h3>
        </div>
        <p className="card-description mb-6 flex-1">{description}</p>
        <Button asChild variant="outline" className="w-full mt-auto group border-red-600 text-red-600 hover:bg-red-50">
          <Link href={`/servicios/${id}`} className="flex items-center justify-center">
            Ver Detalles
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
