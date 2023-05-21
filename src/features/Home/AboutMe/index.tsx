import { AboutMeHomeTranslation } from '@/@types/translations/HomeTranslation'
import Image from 'next/image'
import Link from 'next/link'
import ItemWrapper from '../components/ItemWrapper'

type AboutMeProps = {
  translation: AboutMeHomeTranslation
}

function getYearsOld() {
  //https://stackoverflow.com/questions/10008050/get-age-from-birthdate
  const birthdate = new Date('2000/05/11').getTime()
  const today = new Date().getTime()
  return Math.floor((today - birthdate) / 31557600000) //Divide by 1000*60*60*24*365.25
}

export default function AboutMe({ translation }: AboutMeProps) {
  return (
    <ItemWrapper
      buttonNextItem="projects"
      aria={translation.aria_next_item}
      title={translation.title}
      id="about-me"
      href="about"
    >
      <div className="flex w-full flex-col items-center justify-between md:flex-row ">
        <div className="flex flex-col items-center gap-5">
          <span className="w-[270px] rounded border-2 border-primary-dark bg-foreground py-1 px-2 text-3xl font-bold drop-shadow-neo-3">
            {translation.author}
          </span>

          <span className="w-[270px] rounded border-2 border-primary-dark bg-foreground py-1 px-2 text-3xl font-bold drop-shadow-neo-3">
            {`${getYearsOld()} ${translation.years_old}`}
          </span>

          <span className="w-[270px] rounded border-2 border-primary-dark bg-foreground py-1 px-2 text-3xl font-bold drop-shadow-neo-3">
            {translation.college_course}
          </span>

          <span className="w-[270px] rounded border-2 border-primary-dark bg-foreground py-1 px-2 text-3xl font-bold drop-shadow-neo-3">
            {translation.profession}
          </span>

          <Link
            href="/about"
            className="w-[270px] rounded border-2 text-primary-dark hover:scale-110 transition-all border-primary-dark bg-foreground py-1 px-2 text-3xl font-bold drop-shadow-neo-3 uppercase tracking-widest"
          >
            {translation.more}
          </Link>
        </div>

        <Link href="/about" className="hover:scale-110 transition-all">
          <Image
            src="https://user-images.githubusercontent.com/62115215/233803111-83a50ab6-a510-4f92-9591-3adb410fd409.png"
            width={296}
            height={350}
            alt={translation['alt_image']}
            className="hidden rounded-sm border-4 border-primary-dark bg-primary drop-shadow-neo-5 md:block"
          />
        </Link>
      </div>
    </ItemWrapper>
  )
}
