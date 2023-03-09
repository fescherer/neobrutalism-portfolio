import fs from 'fs'
import matter from 'gray-matter'
import { ProjectMetadata } from '@/@types/Metadata'

const getProjectsMetadata = (): ProjectMetadata[] => {
  const folder = 'projects/'
  const files = fs.readdirSync(folder)
  const markdownProjects = files.filter((file) => file.endsWith('.md'))

  const projects = markdownProjects.map((fileName) => {
    const fileContent = fs.readFileSync(`projects/${fileName}`, 'utf-8')
    const matterResults = matter(fileContent)
    return {
      title: matterResults.data.title,
      id: matterResults.data.id,
      type: matterResults.data.type,
      image: matterResults.data.image,
      description: matterResults.data.description,
      date: matterResults.data.date,
      github: matterResults.data.github,
      tags: matterResults.data.tags,
      slug: fileName.replace('.md', '')
    }
  })

  return projects
}

export default getProjectsMetadata
