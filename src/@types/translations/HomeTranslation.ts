export type HomeTranslation = {
  introduction: IntroductionTranslation
  aboutme: AboutMeHomeTranslation
  snippets: SnippetsTranslation
}

export type IntroductionTranslation = {
  'aria-next-item': string
  meet: string
  author: string
  profession: string
  explore: string
  menu: {
    snippets: string
    projects: string
    aboutme: string
  }
  'alt-image': string
}

export type AboutMeHomeTranslation = {
  title: string
  author: string
  'aria-next-item': string
  'years-old': string
  'college-course': string
  profession: string
  'alt-image': string
}

export type SnippetsTranslation = {
  'aria-next-item': string
}
