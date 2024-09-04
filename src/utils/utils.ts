import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';


export interface WritingMetadata {
    title: string;
    subtitle: string;
    date: string;
    slug: string;
  }

export default function getWritingsMetadata(basePath: string) {
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith('.mdx'))

    // get the file data
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            subtitle: matterResult.data.subtitle,
            date: matterResult.data.date,
            slug: filename.replace('.mdx', '')
        }
    })
    return posts
}

export async function getPostBySlug(slug: string) {
    const fullPath = path.join(process.cwd(), `data/writings/${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    const { data, content } = matter(fileContents);
  
    return {
      slug,
      content,
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
    };
  }

