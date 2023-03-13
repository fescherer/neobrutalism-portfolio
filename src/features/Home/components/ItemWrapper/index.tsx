import ButtonNextItem from '../ButtonNextItem'
import HomeTitle from '../HomeTile'

type ItemWrapperProps = {
  children: React.ReactNode
  title: string
  buttonNextItem: string
  aria: string
}

export default function ItemWrapper({
  children,
  title,
  buttonNextItem,
  aria
}: ItemWrapperProps) {
  return (
    <div className="flex flex-col gap-5 px-20 items-center">
      <HomeTitle>{title}</HomeTitle>
      {children}
      <ButtonNextItem aria={aria} nextItem={buttonNextItem} />
    </div>
  )
}
