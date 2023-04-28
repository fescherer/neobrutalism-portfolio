import { Dispatch, SetStateAction } from 'react'

type SearchFilterProps = {
  setSearchFilter: Dispatch<SetStateAction<string>>
}
export function SearchFilter({ setSearchFilter }: SearchFilterProps) {
  return (
    <div>
      <input
        onChange={(event) => setSearchFilter(event.target.value)}
        type="text"
      />
    </div>
  )
}
