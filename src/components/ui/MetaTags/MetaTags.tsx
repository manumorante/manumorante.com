type Props = {
  title?: string
  description?: string
  image?: string
  imageWidth?: string
  imageHeight?: string
}

export default function MetaTags({
  title = 'Manu Morante',
  description = 'Portfolio of Manu Morante, a web developer',
  image = '/og/manumorante.jpg',
  imageWidth = '1200',
  imageHeight = '630',
}: Props) {
  return (
    <>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
    </>
  )
}
