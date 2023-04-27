type ImageAspectRatiProps = {
  image: string
}

export default function ImageAspectRatio({ image }: ImageAspectRatiProps) {
  return (
    <div className="relative overflow-hidden">
      <div
        role="img"
        className="relative h-[120px] scale-110 blur-sm"
        style={{
          backgroundImage: `url(${image})`
        }}
      />

      <div
        role="img"
        className="absolute top-0 right-0 z-10 h-[120px] w-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
    </div>
  )
}
