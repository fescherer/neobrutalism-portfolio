import { Experience } from './translations/AboutTranslation'
import { ImageProps } from './Util'

export type ExperienceData = {
  id: string
  info: Experience
  date_start: string
  date_end: string
  link: string
  img_showcase: ImageProps[]
  logo: string
}
