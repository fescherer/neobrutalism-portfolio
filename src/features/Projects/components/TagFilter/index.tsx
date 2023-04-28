import { Dispatch, SetStateAction } from 'react'

type TagFilterProps = {
  tagFilter: string
  setTagFilter: Dispatch<SetStateAction<string>>
  allTags: string[]
}

export function TagFilter({
  setTagFilter,
  allTags,
  tagFilter
}: TagFilterProps) {
  function filter(tag: string) {
    if (tagFilter === tag) setTagFilter('')
    else setTagFilter(tag)
  }

  return (
    <div className="flex gap-3">
      {allTags.map((tag) => (
        <button key={tag} onClick={() => filter(tag)}>
          {tag}
        </button>
      ))}
    </div>
  )
}
