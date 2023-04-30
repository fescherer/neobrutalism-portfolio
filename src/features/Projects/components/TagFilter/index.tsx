import * as Select from '@radix-ui/react-select'
import { CaretDown, CaretUp } from 'phosphor-react'
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
    // <div className="flex gap-3">
    //   {allTags.map((tag) => (
    //     <button key={tag} onClick={() => filter(tag)}>
    //       {tag}
    //     </button>
    //   ))}
    // </div>
    <div className="flex gap-1 items-center justify-center">
      <Select.Root onValueChange={(tag) => filter(tag)}>
        <Select.Trigger className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-background text-primary shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-primary outline-none">
          <Select.Value placeholder="Filtro de tag" />
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
                  className="text-[13px] leading-none text-primary rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-primary-dark data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary data-[highlighted]:text-background"
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

      <button onClick={() => filter('')}>Clean</button>
    </div>
  )
}
