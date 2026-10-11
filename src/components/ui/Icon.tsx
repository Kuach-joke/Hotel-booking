type IconProps = {
  src: string
  width: number
  height: number
  alt?: string
  className?: string
}

export function Icon({ src, width, height, alt = '', className }: IconProps) {
  return <img src={src} width={width} height={height} alt={alt} className={className} />
}
