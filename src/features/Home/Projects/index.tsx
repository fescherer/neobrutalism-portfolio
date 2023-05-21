import ItemWrapper from '../components/ItemWrapper'

export default function Projects() {
  return (
    <ItemWrapper
      buttonNextItem="last"
      aria={'translation.aria_next_item'}
      title={'Projects'}
      id="projects"
      href="projects"
    >
      <div className="m-10 grid grid-cols-5" />
    </ItemWrapper>
  )
}
