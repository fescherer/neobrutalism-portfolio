export type AboutTranslation = {
  title: string
  first_description: string
  introduction: IntroductionAboutTranslation
  skills: SkillsTranslation
  my_history: TypeMyHistory
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
