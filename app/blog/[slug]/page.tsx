import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarIcon, User, Tag, ArrowLeft, ArrowRight } from "lucide-react"
import blog from "@/data/blog.json"
import BlogCard from "@/components/blog-card"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const slug = params.slug
  const post = blog.find((post) => post.id === slug)

  if (!post) {
    return {
      title: "Artículo no encontrado | OfflineImpacto",
    }
  }

  return {
    title: `${post.title} | OfflineImpacto - Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blog.map((post) => ({
    slug: post.id,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const slug = params.slug
  const post = blog.find((post) => post.id === slug)

  if (!post) {
    notFound()
  }
  // Find post index to get previous and next posts
  const postIndex = blog.findIndex((p) => p.id === post.id)
  const prevPost = postIndex > 0 ? blog[postIndex - 1] : null
  const nextPost = postIndex < blog.length - 1 ? blog[postIndex + 1] : null

  // Format content with paragraphs and headings
  const formatContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => {
      if (paragraph.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl font-bold mt-10 mb-6 text-gray-900">
            {paragraph.replace("# ", "")}
          </h1>
        )
      } else if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            {paragraph.replace("## ", "")}
          </h2>
        )
      } else if (paragraph.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-bold mt-6 mb-3 text-gray-800">
            {paragraph.replace("### ", "")}
          </h3>
        )
      } else if (paragraph.startsWith("- ")) {
        return (
          <ul key={index} className="list-disc pl-6 my-4">
            {paragraph.split("\n").map((item, i) => (
              <li key={i} className="mb-2 text-gray-700">
                {item.replace("- ", "")}
              </li>
            ))}
          </ul>
        )
      } else {
        return (
          <p key={index} className="mb-4 text-gray-700">
            {paragraph}
          </p>
        )
      }
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Blog
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <CalendarIcon size={14} className="mr-1" />
                <span>{post.date}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{post.title}</h1>

            <div className="flex items-center mb-8">
              <User size={18} className="text-gray-400 mr-2" />
              <span className="text-gray-600">Por {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white" >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">{formatContent(post.content)}</article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center flex-wrap gap-2">
                <Tag size={18} className="text-gray-400 mr-1" />
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Post Navigation */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost && (
                <Link href={`/blog/${prevPost.id}`} className="group">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-red-200 transition-colors">
                    <div className="flex items-center text-red-600 mb-2">
                      <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                      <span className="text-sm font-medium">Artículo Anterior</span>
                    </div>
                    <h3 className="font-medium line-clamp-2 text-gray-800">{prevPost.title}</h3>
                  </div>
                </Link>
              )}

              {nextPost && (
                <Link href={`/blog/${nextPost.id}`} className="group md:ml-auto">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-red-200 transition-colors">
                    <div className="flex items-center justify-end text-red-600 mb-2">
                      <span className="text-sm font-medium">Artículo Siguiente</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h3 className="font-medium text-right line-clamp-2 text-gray-800">{nextPost.title}</h3>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Artículos Relacionados</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">Más contenido que podría interesarte.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blog
              .filter(
                (p) =>
                  p.id !== post.id && (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag))),
              )
              .slice(0, 3)
              .map((relatedPost) => (
                <BlogCard
                  key={relatedPost.id}
                  id={relatedPost.id}
                  title={relatedPost.title}
                  excerpt={relatedPost.excerpt}
                  date={relatedPost.date}
                  category={relatedPost.category}
                  image={relatedPost.image}
                  author={relatedPost.author}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
