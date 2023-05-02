import { MagnifyingGlass } from 'phosphor-react'
import { Dispatch, SetStateAction } from 'react'
import clsx from 'clsx'

type SearchFilterProps = {
  setSearchFilter: Dispatch<SetStateAction<string>>
  filter: string
}
export function SearchFilter({ filter, setSearchFilter }: SearchFilterProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-1 w-full min-h-[35px] bg-background rounded-full font-semibold px-3 ring-2 focus-within:ring-primary outline-none transition-all md:w-auto',
        {
          'text-foreground ring-foreground': !filter,
          'text-primary ring-primary': filter
        }
      )}
    >
      <MagnifyingGlass />
      <input
        onChange={(event) => setSearchFilter(event.target.value)}
        type="text"
        placeholder="Procurar..."
        className="w-full bg-background outline-none placeholder:text-foreground"
      />
    </div>
  )
}
