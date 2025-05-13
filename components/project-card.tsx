import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  id: string
  title: string
  client: string
  category: string
  description: string
  image: string
  year: number
}

export default function ProjectCard({ id, title, client, category, description, image, year }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="relative h-56 w-full">
        <Image
          src={image || `/placeholder.svg?height=400&width=600&query=${title} project image`}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-sm font-medium">{year}</div>
      </div>
      <CardContent className="flex-1 flex flex-col p-6 bg-white">
        <div className="mb-3">
          <span className="card-subtitle">{category}</span>
          <h3 className="card-title mt-1">{title}</h3>
          <p className="text-gray-500 text-sm">Cliente: {client}</p>
        </div>
        <p className="card-description mb-4 flex-1 line-clamp-3">{description}</p>
        <Button asChild variant="outline" className=" bg-white w-full mt-auto group border-red-600 text-red-600 ">
          <Link href={`/proyectos/${id}`} className="flex items-center justify-center">
            Ver Proyecto
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
