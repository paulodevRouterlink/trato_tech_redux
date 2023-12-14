import { ElementType } from 'react'
import { COLORS } from '@/styles/colors'

type IconProps = {
  icon: ElementType
  size: number
}

export const Icon = ({ icon: Icon, size }: IconProps) => {
  const iconStyleProps = {
    color: COLORS.white[50],
    size: size,
  }

  return <Icon {...iconStyleProps} />
}
