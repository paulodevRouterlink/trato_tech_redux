import { ElementType } from 'react'

type IconProps = {
  icon: ElementType
  size: number
}

export const Icon = ({ icon: Icon, size }: IconProps) => {
  const iconStyleProps = {
    color: 'white',
    size: size,
  }

  return <Icon {...iconStyleProps} />
}
