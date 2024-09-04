interface Project {
    title: string,
    description: string,
    href?: string,
  }
  
const projectsData: Project[] = [
  {
    title: 'delancey',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    href: 'https://delancey.vercel.app/',
  },
  {
    title: 'delanceyv2',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    href: 'https://delancey.vercel.app/',
  },
]

export default projectsData