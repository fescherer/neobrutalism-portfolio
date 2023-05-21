import * as Select from '@radix-ui/react-select'
import clsx from 'clsx'
import { CaretDown, CaretUp, XCircle } from 'phosphor-react'
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
    <div
      className={clsx('flex gap-1 items-center justify-center ', {
        'text-primary': tagFilter,
        'text-foreground': !tagFilter
      })}
    >
      <Select.Root onValueChange={(tag) => filter(tag)} value={tagFilter}>
        <Select.Trigger className="items-center w-full px-[15px] text-[13px] leading-none h-[35px] gap-2 bg-background  data-[placeholder]: outline-none p-4 min-w-[200px] flex justify-between border-2 rounded-full btn-base">
          {!tagFilter && <span className="font-bold">Filtro de tag...</span>}
          <Select.Value />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="overflow-hidden bg-background rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-background text-primary cursor-default">
              <CaretUp size={32} />
            </Select.ScrollUpButton>

            <Select.Viewport>
              {allTags.map((item) => (
                <Select.Item
                  value={item}
                  key={item}
                  className="text-[13px] leading-none text-primary rounded-sm flex items-center h-[25px] px-5 mx-1 relative select-none data-[disabled]:text-primary-dark data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary data-[highlighted]:text-background"
                >
                  <Select.ItemText>{item}</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-primary cursor-default">
              <CaretDown size={32} />
            </Select.ScrollDownButton>

            <Select.Arrow />
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      {tagFilter && (
        <button className="btn-base" onClick={() => filter('')}>
          <XCircle size={28} />
        </button>
      )}
    </div>
  )
}
