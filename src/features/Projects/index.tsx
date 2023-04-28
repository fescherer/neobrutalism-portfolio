'use client'

import { ProjectMetadata } from '@/@types/Metadata'
import ProjectCard from '@/components/ProjectCard'
import { useEffect, useState } from 'react'
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
  const [filteredData, setFilteredData] = useState(data)

  const allTags = getAllTags(data)

  useEffect(() => {
    const newData = filterData(data, tagFilter, searchFilter)
    setFilteredData(newData)
  }, [data, tagFilter, searchFilter])

  return (
    <div className="m-auto flex max-w-project flex-col gap-5 p-1">
      <div className="flex justify-between">
        <TagFilter
          tagFilter={tagFilter}
          setTagFilter={setTagFilter}
          allTags={allTags}
        />

        <SearchFilter setSearchFilter={setSearchFilter} />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {filteredData.map((project) => (
          <ProjectCard key={project.slug} card={project} />
        ))}
      </div>
    </div>
  )
}
