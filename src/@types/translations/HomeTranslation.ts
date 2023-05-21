export type HomeTranslation = {
  introduction: IntroductionTranslation
  aboutme: AboutMeHomeTranslation
  projects: ProjectsHomeTranslation
  snippets: SnippetsTranslation
}

export type IntroductionTranslation = {
  aria_next_item: string
  meet: string
  author: string
  profession: string
  explore: string
  menu: {
    snippets: string
    projects: string
    aboutme: string
  }
  alt_image: string
}

export type AboutMeHomeTranslation = {
  title: string
  author: string
  aria_next_item: string
  years_old: string
  college_course: string
  profession: string
  alt_image: string
  more: string
}

export type ProjectsHomeTranslation = {
  title: string
  aria_next_item: string
  more: string
}

export type SnippetsTranslation = {
  aria_next_item: string
}
