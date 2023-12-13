import { ReactNode } from 'react'
import { TitleWithoutImage } from './TitleWithoutImage'
import { HeaderProps } from './HeaderProps'

import styles from './styles.module.scss'

type HeaderType = {
  props: HeaderProps
  children?: ReactNode
}

export const Header = ({ props, children }: HeaderType) => {
  const { title, description, image } = props

  return (
    <header className={styles.header}>
      {title && !image && <TitleWithoutImage props={{ title, description }} />}
      {title && image && children}
    </header>
  )
}
