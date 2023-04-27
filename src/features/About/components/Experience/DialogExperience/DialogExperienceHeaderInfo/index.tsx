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
      <div className="flex items-center gap-2 text-2xl leading-tight">
        <Buildings size={32} className="rounded-full border p-1 opacity-60" />

        <div className="flex flex-col ">
          <span className="text-base">{`${dialogTranslation.company_name}`}</span>
          <strong>{data.info.title}</strong>
        </div>
      </div>

      <div className="flex items-center gap-2 text-2xl leading-tight">
        <Calendar size={32} className="rounded-full border p-1 opacity-60" />

        <div className="flex flex-col ">
          <span className="text-base">{`${dialogTranslation.contribution_period}`}</span>
          <strong>
            {getDateFormated(data.date_start) +
              ' - ' +
              getDateFormated(data.date_end)}
          </strong>
        </div>
      </div>

      <div className="flex items-center gap-2 text-2xl leading-tight">
        <UserSquare size={32} className="rounded-full border p-1 opacity-60" />

        <div className="flex flex-col">
          <span className="text-base">{`${dialogTranslation.role}`}</span>
          <strong>{data.info.job}</strong>
        </div>
      </div>
    </div>
  )
}
