import ButtonNextItem from '../ButtonNextItem'
import HomeTitle from '../HomeTile'

type ItemWrapperProps = {
  children: React.ReactNode
  title: string
  buttonNextItem: string
  aria: string
  id: string
  href: string
}

export default function ItemWrapper({
  children,
  title,
  buttonNextItem,
  aria,
  id,
  href
}: ItemWrapperProps) {
  return (
    <div
      className="flex min-h-screen w-full items-center justify-center h-full"
      id={id}
    >
      <div className="m-auto flex w-full max-w-project flex-col items-center gap-5 px-20">
        <HomeTitle href={href}>{title}</HomeTitle>
        {children}
        <ButtonNextItem aria={aria} nextItem={buttonNextItem} />
      </div>
    </div>
  )
}
