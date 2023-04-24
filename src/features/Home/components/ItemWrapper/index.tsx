import ButtonNextItem from '../ButtonNextItem'
import HomeTitle from '../HomeTile'

type ItemWrapperProps = {
  children: React.ReactNode
  title: string
  buttonNextItem: string
  aria: string
  id: string
}

export default function ItemWrapper({
  children,
  title,
  buttonNextItem,
  aria,
  id
}: ItemWrapperProps) {
  return (
    <div className="flex justify-center items-center h-screen w-full" id={id}>
      <div className="flex flex-col gap-5 px-20 items-center max-w-project m-auto w-full">
        <HomeTitle>{title}</HomeTitle>
        {children}
        <ButtonNextItem aria={aria} nextItem={buttonNextItem} />
      </div>
    </div>
  )
}
