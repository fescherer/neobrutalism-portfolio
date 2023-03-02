import { Children } from '@/@types/Util'

export default function HomeTitle({ children }: Children) {
  return <h2 className="text-5xl font-bold uppercase self-start">{children}</h2>
}
