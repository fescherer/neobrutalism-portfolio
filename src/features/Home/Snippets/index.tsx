import Image from 'next/image'
import HomeTitle from '../components/HomeTile'

export default function Snippets() {
  return (
    <div className="flex items-center gap-10">
      <div>
        <HomeTitle>Snippets</HomeTitle>

        <span className="font-bold text-2xl">Find all my snippets</span>
      </div>

      <Image
        src="https://user-images.githubusercontent.com/62115215/221433922-02ebc877-4a47-44f4-8f3c-fd97ca2b1058.png"
        width={296}
        height={350}
        alt="profile-image"
        className="drop-shadow-neo-5 border-primary-dark border-4 rounded-sm"
      />
    </div>
  )
}
