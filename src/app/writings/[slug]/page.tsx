import { notFound } from "next/navigation";
import { getPostBySlug } from "@/src/utils/utils";
import { MDXRemote } from "next-mdx-remote/rsc";


export default async function Post({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);
  
    return (
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <p className="text-xl text-gray-500 mb-4">{post.subtitle}</p>
        <div className="text-sm text-gray-400 mb-8">{post.date}</div>
        <MDXRemote source={post.content} />
      </article>
    );
}