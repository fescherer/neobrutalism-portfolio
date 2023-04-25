import { Children } from '@/@types/Util'

export default function HomeTitle({ children }: Children) {
  return <h2 className="self-start text-5xl font-bold uppercase">{children}</h2>
}
