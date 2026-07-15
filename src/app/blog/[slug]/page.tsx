import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">{post.category}</p>
      <h1 className="font-display text-5xl tracking-wide mb-4">{post.title}</h1>
      <p className="text-light/40 text-sm mb-8">
        By {post.author} &middot;{" "}
        {new Date(post.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <div className="relative h-80 rounded-2xl overflow-hidden mb-8">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
      <p className="text-light/70 leading-relaxed">{post.excerpt}</p>
      <p className="text-light/50 leading-relaxed mt-4">
        Replace this placeholder body with your real article content — pull it from
        an MDX file, a headless CMS (Sanity, Contentful), or a Prisma `Post` model,
        depending on how often your team publishes.
      </p>
    </article>
  );
}
