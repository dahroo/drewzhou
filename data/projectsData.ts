interface Project {
    title: string,
    description: string,
    href?: string,
  }
  
const projectsData: Project[] = [
  {
    title: 'The role of integrity and ability in leadership',
    description: `sole author in a Wiley journal, back in high school when I thought economics held the answer to the meaning of life`,
    href: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/mde.3453',
  },
  {
    title: 'delancey',
    description: `the missing link between your spotify playlist and perfect set.`,
    href: 'https://delancey.vercel.app/',
  },
]

export default projectsData