import { TypeMyHistory } from '@/@types/translations/AboutTranslation'
import Image from 'next/image'

type HistoryProps = {
  translation: TypeMyHistory
}

export default function History({ translation }: HistoryProps) {
  const my_history = [
    {
      title: translation.my_history.title,
      text: translation.my_history.text
    },
    {
      title: translation.born.title,
      text: translation.born.text
    },
    {
      title: translation.studies.title,
      text: translation.studies.text
    },
    {
      title: translation.future.title,
      text: translation.future.text
    }
  ]

  return (
    <>
      {my_history.map((data, index) => (
        <div key={data.title} className="flex md:flex-row flex-col gap-12 mb-6">
          <Image
            src="https://user-images.githubusercontent.com/62115215/221433922-02ebc877-4a47-44f4-8f3c-fd97ca2b1058.png"
            width={296}
            height={350}
            alt="profile-image"
            className={`${
              index % 2 === 0 ? '' : 'md:block'
            } hidden drop-shadow-neo-5 border-primary-dark border-4 rounded-sm`}
          />

          <div className="font-bold">
            <h2 className="text-4xl">{data.title}</h2>

            <p className="text-base">{data.text}</p>
          </div>

          <Image
            src="https://user-images.githubusercontent.com/62115215/221433922-02ebc877-4a47-44f4-8f3c-fd97ca2b1058.png"
            width={296}
            height={350}
            alt="profile-image"
            className={`${
              index % 2 === 0 ? '' : 'md:hidden block'
            } drop-shadow-neo-5 border-primary-dark border-4 rounded-sm`}
          />
        </div>
      ))}
    </>
  )
}
