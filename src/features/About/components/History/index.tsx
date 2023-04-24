import { TypeMyHistory } from '@/@types/translations/AboutTranslation'
import Image from 'next/image'

type HistoryProps = {
  translation: TypeMyHistory
}

export default function History({ translation }: HistoryProps) {
  const my_history = [
    {
      title: translation.my_history.title,
      text: translation.my_history.text,
      image:
        'https://user-images.githubusercontent.com/62115215/221433922-02ebc877-4a47-44f4-8f3c-fd97ca2b1058.png'
    },
    {
      title: translation.born.title,
      text: translation.born.text,
      image:
        'https://user-images.githubusercontent.com/62115215/233803114-cf934dac-baa2-48c4-a93f-420a40d009bf.png'
    },
    {
      title: translation.studies.title,
      text: translation.studies.text,
      image:
        'https://user-images.githubusercontent.com/62115215/233803113-895fd886-3580-4a49-bb3e-af791783f787.png'
    },
    {
      title: translation.future.title,
      text: translation.future.text,
      image:
        'https://user-images.githubusercontent.com/62115215/233803117-8feaf453-3589-47ff-8f4d-43f7a2005684.png'
    }
  ]

  return (
    <>
      {my_history.map((data, index) => (
        <div
          key={data.title}
          className="flex md:flex-row flex-col items-center gap-12 mb-6"
        >
          <Image
            src={data.image}
            width={296}
            height={350}
            alt="profile-image"
            className={`${
              index % 2 === 0 ? '' : 'md:block'
            } hidden bg-primary drop-shadow-neo-5 border-primary-dark border-4 rounded-sm`}
          />

          <div className="font-bold">
            <h2 className="text-4xl">{data.title}</h2>

            <p className="text-base indent-8 text-justify">{data.text}</p>
          </div>

          <Image
            src={data.image}
            width={296}
            height={350}
            alt="profile-image"
            className={`${
              index % 2 === 0 ? '' : 'md:hidden block'
            } bg-primary drop-shadow-neo-5  border-primary-dark border-4 rounded-sm`}
          />
        </div>
      ))}
    </>
  )
}
