import { QuoteTranslation } from './Translation'

export type AboutTranslation = {
  title: string
  first_description: string
  introduction: IntroductionAboutTranslation
  skills_experience: SkillsExprienceTranslation
  skills: SkillsTranslation
  my_history: TypeMyHistory
  experience: ExperienceTranslation
}

export type IntroductionAboutTranslation = {
  skills_experience: string
  my_history: string
  alt_image: string
}

export type TypeMyHistory = {
  my_history: TextBlock
  born: TextBlock
  studies: TextBlock
  future: TextBlock
}

export type TextBlock = {
  title: string
  text: string
}

export type SkillsExprienceTranslation = {
  title: string
  description: string
  quote: QuoteTranslation
}

export type SkillsTranslation = {
  title: string
  description: string
}

export type ExperienceTranslation = {
  title: string
  dialog: DialogExperienceTranslation
  jobs: Experience[]
}

export type DialogExperienceTranslation = {
  company_name: string
  contribution_period: string
  role: string
  company_about: string
}

export type Experience = {
  title: string
  short_desc: string
  desc: string[]
  job: string
}
