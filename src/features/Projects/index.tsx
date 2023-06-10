'use client'

import { ProjectMetadata } from '@/@types/Metadata'
import ProjectCard from '@/components/ProjectCard'
import { useState } from 'react'
import { SearchFilter } from './components/SearchFilter'
import { TagFilter } from './components/TagFilter'

type ProjectsProps = {
  data: ProjectMetadata[]
}

function filterData(
  data: ProjectMetadata[],
  tagFilter: string,
  searchFilter: string
): ProjectMetadata[] {
  if (!tagFilter && !searchFilter) return data

  const filteredByTags = tagFilter
    ? data.filter((item) => item.tags.includes(tagFilter))
    : data
  const rg = new RegExp(`^(?=.*\\b${searchFilter}).*$`, 'gmi')

  return filteredByTags.filter(
    (item) => item.slug.match(rg) || item?.title.match(rg)
  )
}

function getAllTags(data: ProjectMetadata[]) {
  const tags: string[] = []
  data.map((item) =>
    item.tags.map((tag) => tags.indexOf(tag) === -1 && tags.push(tag))
  )
  return tags
}

export default function Projects({ data }: ProjectsProps) {
  const [tagFilter, setTagFilter] = useState('')
  const [searchFilter, setSearchFilter] = useState('')

  const allTags = getAllTags(data)

  const filteredData = filterData(data, tagFilter, searchFilter)

  return (
    <div className="m-auto flex max-w-project flex-col gap-5 p-1">
      <div className="flex-col-reverse gap-4 px-5 px:mx-0 flex md:flex-row justify-between w-full">
        <TagFilter
          tagFilter={tagFilter}
          setTagFilter={setTagFilter}
          allTags={allTags}
        />

        <SearchFilter setSearchFilter={setSearchFilter} filter={searchFilter} />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {filteredData.map((project) => (
          <ProjectCard key={project.slug} card={project} />
        ))}
      </div>
    </div>
  )
}
