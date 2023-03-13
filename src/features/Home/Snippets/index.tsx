import { SnippetsTranslation } from '@/@types/translations/HomeTranslation'
import ItemWrapper from '../components/ItemWrapper'

type SnippetsProps = {
  translation: SnippetsTranslation
}

export default function Snippets({ translation }: SnippetsProps) {
  return (
    <ItemWrapper
      buttonNextItem="projects"
      aria={translation['aria-next-item']}
      title="Snippets"
    >
      <span className="font-bold text-2xl">Find all my snippets</span>

      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">01</div>
        <div className="col-span-2">02</div>
        <div className="row-span-2 col-span-2">03</div>
      </div>
    </ItemWrapper>
  )
}
