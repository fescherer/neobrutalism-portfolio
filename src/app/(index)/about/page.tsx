import ReactIcon from '@/Icons/React'
import Image from 'next/image'

export default function About() {
  return (
    <div className="flex flex-col gap-5 w-100 px-4 py-2 max-w-[1000px] m-auto">
      <h1 className="text-6xl font-bold -rotate-2">About me</h1>

      <div className="flex md:flex-row flex-col gap-12 mb-6">
        <Image
          src="https://user-images.githubusercontent.com/62115215/221433922-02ebc877-4a47-44f4-8f3c-fd97ca2b1058.png"
          width={296}
          height={350}
          alt="profile-image"
          className="hidden md:block drop-shadow-neo-5 border-primary-dark border-4 rounded-sm"
        />

        <div className="font-bold">
          <h2 className="text-4xl">Felipe Scherer</h2>

          <p className="text-base">
            Sed sit amet ipsum eu orci placerat blandit ac efficitur neque.
            Praesent nec auctor odio. Suspendisse in ipsum lorem. Nulla auctor
            elit non risus pretium facilisis. Proin eleifend rhoncus nisi, ut
            Nulla auctor elit non risus pretium facilisis.Sed sit amet ipsum eu
            orci placerat blandit ac efficitur neque. Praesent nec auctor odio.
            Suspendisse in ipsum lorem. Nulla auctor elit non risus pretium
            facilisis. Proin eleifend rhoncus nisi, ut Nulla auctor elit non
            risus pretium facilisis. Proin eleifend rhoncus nisi, ut Sed sit
            amet ipsum eu orci placerat blandit ac efficitur neque. Praesent nec
            auctor odio. Suspendisse in ipsum lorem. Nulla auctor elit non risus
            pretium facilisis. Proin eleifend rhoncus nisi, ut Nulla auctor elit
            non risus pretium facilisis. Proin eleifend rhoncus nisi, ut Proin
            eleifend rhoncus nisi, ut
          </p>

          <div className="flex justify-evenly font-extrabold uppercase underline underline-offset-3 w-100 mt-10">
            <span>Skills and Experience</span>
            <span>My History</span>
          </div>
        </div>

        <Image
          src="https://user-images.githubusercontent.com/62115215/221433922-02ebc877-4a47-44f4-8f3c-fd97ca2b1058.png"
          width={296}
          height={350}
          alt="profile-image"
          className="md:hidden block drop-shadow-neo-5 border-primary-dark border-4 rounded-sm"
        />
      </div>

      {/* Skills and Experience */}
      <div className="block md:grid grid-cols-2 gap-20">
        <div className="flex flex-col gap-6">
          <h2 className="text-6xl font-bold leading-12 -rotate-2 mb-7">
            Skills and experience
          </h2>

          <p className="font-bold text-base">
            Sed sit amet ipsum eu orci placerat blandit ac efficitur neque.
            Praesent nec auctor odio. Suspendisse in ipsum lorem. Nulla auctor
            elit non risus pretium facilisis. Proin eleifend rhoncus nisi, ut
            Nulla auctor elit non risus pretium (COLOCAR UMA CITAÇÃO)
          </p>

          <div className="flex flex-col gap-5">
            <h3 className="text-5xl font-bold">SKILLS</h3>
            <div className="flex flex-row flex-wrap justify-evenly gap-7">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
                <div
                  key={id}
                  className="flex flex-col gap-2 items-center font-bold tex-3xl uppercase "
                >
                  <div className="rounded-full bg-primary drop-shadow-neo-3">
                    <ReactIcon />
                  </div>
                  <span>React</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-5xl font-bold">Experience</h3>
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="">
              <h4 className="tex-3xl font-extrabold uppercase">experience</h4>
              <p className="text-base font-bold">
                Sed sit amet ipsum eu orci placerat blandit ac efficitur neque.
                Praesent nec auctor odio. Suspendisse in ipsum lorem. Nulla
                auctor elit non risus pretium facilisis. Proin eleifend rhoncus
                nisi, ut Nulla auctor elit non risus pretium (COLOCAR UMA
                CITAÇÃO)
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        {[
          'My History',
          'Itatiba, São Paulo, Brasil',
          'High School, College',
          'My Future Plans'
        ].map((title, index) => (
          <div key={title} className="flex md:flex-row flex-col gap-12 mb-6">
            <Image
              src="https://user-images.githubusercontent.com/62115215/221433922-02ebc877-4a47-44f4-8f3c-fd97ca2b1058.png"
              width={296}
              height={350}
              alt="profile-image"
              className={`${
                index % 2 === 0 ? '' : 'md:block'
              } hidden drop-shadow-neo-5 border-primary-dark border-4 rounded-sm`}
            />

            <div className="font-bold">
              <h2 className="text-4xl">{title}</h2>

              <p className="text-base">
                Sed sit amet ipsum eu orci placerat blandit ac efficitur neque.
                Praesent nec auctor odio. Suspendisse in ipsum lorem. Nulla
                auctor elit non risus pretium facilisis. Proin eleifend rhoncus
                nisi, ut Nulla auctor elit non risus pretium facilisis.Sed sit
                amet ipsum eu orci placerat blandit ac efficitur neque. Praesent
                nec auctor odio. Suspendisse in ipsum lorem. Nulla auctor elit
                non risus pretium facilisis. Proin eleifend rhoncus nisi, ut
                Nulla auctor elit non risus pretium facilisis. Proin eleifend
                rhoncus nisi, ut Sed sit amet ipsum eu orci placerat blandit ac
                efficitur neque. Praesent nec auctor odio. Suspendisse in ipsum
                lorem. Nulla auctor elit non risus pretium facilisis. Proin
                eleifend rhoncus nisi, ut Nulla auctor elit non risus pretium
                facilisis. Proin eleifend rhoncus nisi, ut Proin eleifend
                rhoncus nisi, ut
              </p>
            </div>

            <Image
              src="https://user-images.githubusercontent.com/62115215/221433922-02ebc877-4a47-44f4-8f3c-fd97ca2b1058.png"
              width={296}
              height={350}
              alt="profile-image"
              className={`${
                index % 2 === 0 ? '' : 'md:hidden block'
              } drop-shadow-neo-5 border-primary-dark border-4 rounded-sm`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
