import ItemWrapper from '../components/ItemWrapper'

export default function Projects() {
  return (
    <ItemWrapper
      buttonNextItem="last"
      aria={'translation.aria_next_item'}
      title={'Projects'}
      id="projects"
    >
      <div className="grid grid-cols-5 m-10" />
    </ItemWrapper>
  )
}
