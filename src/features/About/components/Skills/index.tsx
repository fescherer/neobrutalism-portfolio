import { SkillsTranslation } from '@/@types/translations/AboutTranslation'

type SkillsProps = {
  translation: SkillsTranslation
}

import AngularIcon from '@/Icons/brand/AngularIcon'
import CssIcon from '@/Icons/brand/CssIcon'
import FigmaIcon from '@/Icons/brand/FigmaIcon'
import HtmlIcon from '@/Icons/brand/HtmlIcon'
import JavascriptIcon from '@/Icons/brand/JavascriptIcon'
import NextjsIcon from '@/Icons/brand/NextjsIcon'
import PythonIcon from '@/Icons/brand/PythonIcon'
import ReactIcon from '@/Icons/brand/ReactIcon'
import Link from 'next/link'

// https://www.figma.com/community/plugin/1149614463603005908/Simple-Icons---2400%2B-popular-brand-icons

export const data_skills = [
  {
    title: 'html',
    component: <HtmlIcon />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTMLcss'
  },
  {
    title: 'css',
    component: <CssIcon />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    title: 'javascript',
    component: <JavascriptIcon />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    title: 'react',
    component: <ReactIcon />,
    link: 'https://react.dev/'
  },
  {
    title: 'next',
    component: <NextjsIcon />,
    link: 'https://nextjs.org/'
  },
  {
    title: 'figma',
    component: <FigmaIcon />,
    link: 'https://www.figma.com'
  },

  {
    title: 'Python',
    component: <PythonIcon />,
    link: 'https://www.python.org/'
  },

  {
    title: 'angular',
    component: <AngularIcon />,
    link: 'https://angular.io/'
  }
]

export default function Skills({ translation }: SkillsProps) {
  return (
    <div className="flex flex-row flex-wrap justify-evenly gap-7">
      <p className="font-bold text-base indent-8 text-justify">
        {translation.description}
      </p>
      {data_skills.map((skill) => (
        <Link
          target="_blank"
          href={skill.link}
          key={skill.title}
          className="flex flex-col gap-2 items-center font-bold tex-3xl uppercase btn-base"
        >
          <div className="rounded-full bg-primary drop-shadow-neo-3 p-2">
            {skill.component}
          </div>
          <span>{skill.title}</span>
        </Link>
      ))}
    </div>
  )
}
