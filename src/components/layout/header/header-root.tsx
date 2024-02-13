import { ReactNode } from 'react'
import styles from './header-root.module.scss'

type HeaderType = {
  children: ReactNode
}

export const HeaderRoot = ({ children }: HeaderType) => (
  <header className={styles.header}>{children}</header>
)
