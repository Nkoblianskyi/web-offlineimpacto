import type { Metadata } from "next"
import BlogCard from "@/components/blog-card"
import blog from "@/data/blog.json"

export const metadata: Metadata = {
  title: "Blog | OfflineImpacto - Agencia de Marketing Offline",
  description:
    "Artículos y recursos sobre marketing offline, publicidad exterior, branding y estrategias de comunicación.",
}

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Blog</h1>
            <p className="text-xl text-gray-700">
              Artículos, consejos y tendencias sobre marketing offline y estrategias de comunicación efectivas.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blog.map((post) => (
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
        </div>
      </section>
    </>
  )
}
