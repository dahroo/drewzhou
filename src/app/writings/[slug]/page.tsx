import { notFound } from "next/navigation";
import { getWritingBySlug } from "@/src/utils/utils";
import { MDXRemote } from "next-mdx-remote/rsc";


export default async function Post({ params }: { params: { slug: string } }) {
    const post = await getWritingBySlug(params.slug);
    
    if (!post) {
      notFound();
    }
  
    return (
      <article className="mx-auto w-full h-full p-3 prose prose-lg">
        <h1>{post.title}</h1>
        <h2 className="text-xl text-gray-600">{post.formatDate}</h2>
        <MDXRemote source={post.content}/>
      </article>
    );
}