type ImageAspectRatiProps = {
  image: string
}

export default function ImageAspectRatio({ image }: ImageAspectRatiProps) {
  return (
    <div className="relative overflow-hidden">
      <div
        role="img"
        className="h-[120px] blur-sm scale-110 relative"
        style={{
          backgroundImage: `url(${image})`
        }}
      />

      <div
        role="img"
        className="w-full bg-contain bg-no-repeat bg-center h-[120px] absolute top-0 right-0 z-10"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
    </div>
  )
}
