import Image from 'next/image'
import ItemWrapper from '../components/ItemWrapper'

export default function AboutMe() {
  return (
    <ItemWrapper buttonNextItem="snippets" title="About Me">
      <div className="flex flex-col md:flex-row justify-between w-full items-center ">
        <div className="flex flex-col gap-5 items-center">
          <span className="bg-foreground rounded w-[270px] py-1 px-2 text-3xl font-bold drop-shadow-neo-3 border-primary-dark border-2">
            Felipe Scherer
          </span>

          <span className="bg-foreground rounded w-[270px] py-1 px-2 text-3xl font-bold drop-shadow-neo-3 border-primary-dark border-2">
            {/* {`${} ${}`} */}
          </span>

          <span className="bg-foreground rounded w-[270px] py-1 px-2 text-3xl font-bold drop-shadow-neo-3 border-primary-dark border-2">
            Ciência da Computação
          </span>

          <span className="bg-foreground rounded w-[270px] py-1 px-2 text-3xl font-bold drop-shadow-neo-3 border-primary-dark border-2">
            Frontend
          </span>
        </div>

        <Image
          src="https://user-images.githubusercontent.com/62115215/221433922-02ebc877-4a47-44f4-8f3c-fd97ca2b1058.png"
          width={296}
          height={350}
          alt="profile-image"
          className="hidden md:block drop-shadow-neo-5 border-primary-dark border-4 rounded-sm"
        />
      </div>
    </ItemWrapper>
  )
}
