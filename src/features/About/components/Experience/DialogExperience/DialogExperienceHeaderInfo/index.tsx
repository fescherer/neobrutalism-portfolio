import { ExperienceData } from '@/@types/About'
import { DialogExperienceTranslation } from '@/@types/translations/AboutTranslation'
import { getDateFormated } from '@/util/functions/getDateFormated'
import { Buildings, Calendar, UserSquare } from 'phosphor-react'

type DialogExperienceHeaderInfoProps = {
  data: ExperienceData
  dialogTranslation: DialogExperienceTranslation
}

export function DialogExperienceHeaderInfo({
  data,
  dialogTranslation
}: DialogExperienceHeaderInfoProps) {
  return (
    <div className="flex flex-col gap-3 py-4">
      <div className="flex items-center gap-2 leading-tight text-2xl">
        <Buildings size={32} className="border rounded-full p-1 opacity-60" />

        <div className="flex flex-col ">
          <span className="text-base">{`${dialogTranslation.company_name}`}</span>
          <strong>{data.info.title}</strong>
        </div>
      </div>

      <div className="flex items-center gap-2 leading-tight text-2xl">
        <Calendar size={32} className="border rounded-full p-1 opacity-60" />

        <div className="flex flex-col ">
          <span className="text-base">{`${dialogTranslation.contribution_period}`}</span>
          <strong>
            {getDateFormated(data.date_start) +
              ' - ' +
              getDateFormated(data.date_end)}
          </strong>
        </div>
      </div>

      <div className="flex items-center gap-2 leading-tight text-2xl">
        <UserSquare size={32} className="border rounded-full p-1 opacity-60" />

        <div className="flex flex-col">
          <span className="text-base">{`${dialogTranslation.role}`}</span>
          <strong>{data.info.job}</strong>
        </div>
      </div>
    </div>
  )
}
