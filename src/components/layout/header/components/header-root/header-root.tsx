import { ComponentProps } from 'react'
import styles from './header-root.module.scss'

export const HeaderRoot = ({ ...props }: ComponentProps<'header'>) => (
  <header {...props} className={styles.header} />
)
