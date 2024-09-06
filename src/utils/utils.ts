import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format, parseISO } from 'date-fns';


export interface WritingMetadata {
    title: string;
    subtitle: string;
    date: string;
    formatDate: string;
    slug: string;
  }

export default function getWritingsMetadata(basePath: string, limit?: number): WritingMetadata[] {
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith('.mdx'))

    // get the file data
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        const date = matterResult.data.date;
        return {
            title: matterResult.data.title,
            subtitle: matterResult.data.subtitle,
            date,
            formatDate: formatDate(date),
            slug: filename.replace('.mdx', '')
        }
    })
    
    const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    if (limit && limit < sortedPosts.length) {
      return sortedPosts.slice(0, limit);
    }

    return sortedPosts;
}

export async function getWritingBySlug(slug: string) {
    const fullPath = path.join(process.cwd(), `data/writings/${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    const { data, content } = matter(fileContents);
  
    return {
      slug,
      content,
      title: data.title,
      subtitle: data.subtitle,
      formatDate: formatDate(data.date)
    };
}

function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'd MMM yyyy').toLowerCase();
}

export const generateRandomGradient = () => {
  // Function to generate a random color in a specific range
  const getRandomColor = (minBase: number, maxBase: number) => {
    const base = Math.floor(Math.random() * (maxBase - minBase + 1)) + minBase;
    return `rgb(${base}, ${base}, ${base})`;
  };

  const darkerColor = getRandomColor(230, 240);

  const lighterColor = getRandomColor(240, 255);

  // Generate 0-2 additional middle range colors
  const middleColors = [];
  const numMiddleColors = Math.floor(Math.random() * 2); // 0 to 2 additional colors
  for (let i = 0; i < numMiddleColors; i++) {
    middleColors.push(getRandomColor(230, 250));
  }

  // Combine all colors and shuffle them
  const allColors = [darkerColor, ...middleColors, lighterColor];
  for (let i = allColors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allColors[i], allColors[j]] = [allColors[j], allColors[i]];
  }

  // Generate a random angle (0-360 degrees)
  const angle = Math.floor(Math.random() * 360);

  // Construct the gradient string
  const gradient = `linear-gradient(${angle}deg, ${allColors.join(', ')})`;

  return gradient;
};

