import fs from 'fs'
import matter from 'gray-matter'
import { ProjectMetadata } from '@/@types/Metadata'
import { projectsTypes } from '../projectTypes'
import { i18n } from './i18n/i18n-config'

const getProjectsMetadata = (folder: string): ProjectMetadata[] => {
  const files = fs.readdirSync(folder)
  const markdownProjects = files.filter((file) => file.endsWith('.md'))

  const projects = markdownProjects.map((fileName) => {
    const fileContent = fs.readFileSync(`${folder}/${fileName}`, 'utf-8')
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
      slug: matterResults.data.slug
    }
  })

  return projects
}

export function getAllProjects() {
  let projects: ProjectMetadata[] = []

  i18n.locales.map((locale) => {
    projectsTypes.map((item) => {
      const folder = getProjectsMetadata(`projects/${locale}/${item}`)
      projects = [...projects, ...folder]
    })
  })

  return projects
}
