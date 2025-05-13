import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface BlogCardProps {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  author: string
}

export default function BlogCard({ id, title, excerpt, date, category, image, author }: BlogCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={image || `/placeholder.svg?height=400&width=600&query=${title} blog post`}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Movemos la etiqueta de categoría a una posición absoluta en la esquina superior izquierda */}
        <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium z-10">
          {category}
        </div>
      </div>
      <CardContent className="flex-1 flex flex-col p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 flex-1 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-gray-500">Por: {author}</span>
          <Button asChild variant="ghost" size="sm" className="group text-red-600 hover:text-red-700 hover:bg-red-50">
            <Link href={`/blog/${id}`} className="flex items-center">
              Leer más
              <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
