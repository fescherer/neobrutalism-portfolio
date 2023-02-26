export default function AboutMe() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-5xl font-bold uppercase">About me</h2>

      <div className="flex flex-col gap-5">
        <span className="bg-foreground rounded w-[270px] py-1 px-2 text-3xl font-bold drop-shadow-neo-3 border-primary-dark border-2">
          Felipe Scherer
        </span>

        <span className="bg-foreground rounded w-[270px] py-1 px-2 text-3xl font-bold drop-shadow-neo-3 border-primary-dark border-2">
          22 anos
        </span>

        <span className="bg-foreground rounded w-[270px] py-1 px-2 text-3xl font-bold drop-shadow-neo-3 border-primary-dark border-2">
          Ciência da Computação
        </span>

        <span className="bg-foreground rounded w-[270px] py-1 px-2 text-3xl font-bold drop-shadow-neo-3 border-primary-dark border-2">
          Frontend
        </span>
      </div>
    </div>
  )
}
