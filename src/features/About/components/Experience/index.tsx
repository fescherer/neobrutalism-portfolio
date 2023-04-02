import { ExperienceTranslation } from '@/@types/translations/AboutTranslation'
import { Experience as ExperienceType } from '@/@types/translations/AboutTranslation'
import { getDateFormated } from '@/util/functions/getDateFormated'

type ExperienceProps = {
  translation: ExperienceTranslation
}

type ExperienceData = {
  id: string
  info: ExperienceType
  date_start: string
  date_end: string
}

export default function Experience({ translation }: ExperienceProps) {
  const data: ExperienceData[] = [
    {
      id: 'central-info-itatiba-aprendice',
      info: translation.central_informatica_aprendice,
      date_start: '2016-04-01T13:00:00.000Z',
      date_end: '2016-04-01T13:00:00.000Z'
    },
    {
      id: 'central-info-itatiba',
      info: translation.central_informatica,
      date_start: '2016-04-01T13:00:00.000Z',
      date_end: '2016-04-01T13:00:00.000Z'
    },
    {
      id: 'sports-at',
      info: translation.playscores_aprendice,
      date_start: '2023-03-10T17:31:38.778Z',
      date_end: '2023-03-10T17:31:38.778Z'
    },
    {
      id: 'sports-at',
      info: translation.playscores,
      date_start: '2023-03-10T17:31:38.778Z',
      date_end: '2023-03-10T17:31:38.778Z'
    }
  ]

  return (
    <div className="flex flex-col gap-5">
      {data.map((experience) => (
        <div key={experience.id} className="">
          <div className="flex flex-col">
            <h4 className="tex-3xl font-extrabold uppercase">
              {experience.info.title}
            </h4>
            <div className="flex gap-3">
              <span>
                {`${getDateFormated(experience.date_start)} - ${getDateFormated(
                  experience.date_end
                )}`}
              </span>
              <span>|</span>
              <span>{experience.info.job}</span>
            </div>
          </div>

          <p className="text-base font-bold">{experience.info.short_desc}</p>
        </div>
      ))}
    </div>
  )
}
