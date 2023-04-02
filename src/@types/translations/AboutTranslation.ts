export type AboutTranslation = {
  title: string
  first_description: string
  introduction: IntroductionAboutTranslation
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

export type SkillsTranslation = {
  title: string
}

export type ExperienceTranslation = {
  central_informatica_aprendice: Experience
  central_informatica: Experience
  playscores_aprendice: Experience
  playscores: Experience
}

export type Experience = {
  title: string
  short_desc: string
  desc: string
  job: string
}
