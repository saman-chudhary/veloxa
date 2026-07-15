import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">Our Journal</p>
      <h1 className="font-display text-5xl tracking-wide mb-10">Latest News</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-accent/40 transition-colors"
          >
            <div className="relative h-48">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs text-light/40 mb-2">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                &middot; {post.category}
              </p>
              <h2 className="font-display text-2xl tracking-wide mb-2">{post.title}</h2>
              <p className="text-light/50 text-sm">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
