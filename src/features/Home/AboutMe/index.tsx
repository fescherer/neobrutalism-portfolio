import { AboutMeHomeTranslation } from '@/@types/translations/HomeTranslation'
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
      buttonNextItem="snippets"
      aria={translation['aria-next-item']}
      title={translation.title}
      id="about-me"
    >
      <div className="flex flex-col md:flex-row justify-between w-full items-center ">
        <div className="flex flex-col gap-5 items-center">
          <span className="bg-foreground rounded w-[270px] py-1 px-2 text-3xl font-bold drop-shadow-neo-3 border-primary-dark border-2">
            {translation.author}
          </span>

          <span className="bg-foreground rounded w-[270px] py-1 px-2 text-3xl font-bold drop-shadow-neo-3 border-primary-dark border-2">
            {`${getYearsOld()} ${translation['years-old']}`}
          </span>

          <span className="bg-foreground rounded w-[270px] py-1 px-2 text-3xl font-bold drop-shadow-neo-3 border-primary-dark border-2">
            {translation['college-course']}
          </span>

          <span className="bg-foreground rounded w-[270px] py-1 px-2 text-3xl font-bold drop-shadow-neo-3 border-primary-dark border-2">
            {translation.profession}
          </span>
        </div>

        {/* <Image
          src="https://user-images.githubusercontent.com/62115215/221433922-02ebc877-4a47-44f4-8f3c-fd97ca2b1058.png"
          width={296}
          height={350}
          alt={translation['alt-image']}
          className="hidden md:block drop-shadow-neo-5 border-primary-dark border-4 rounded-sm"
        /> */}
      </div>
    </ItemWrapper>
  )
}
