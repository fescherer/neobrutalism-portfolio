import ItemWrapper from '../components/ItemWrapper'

const snippetsColors = ['#ff0000', '#00ff00', '#0000ff', '#ffaa00']

export default function Snippets() {
  return (
    <ItemWrapper buttonNextItem="projects" title="Snippets">
      <span className="font-bold text-2xl">Find all my snippets</span>

      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">01</div>
        <div className="col-span-2">02</div>
        <div className="row-span-2 col-span-2">03</div>
      </div>
    </ItemWrapper>
  )
}
