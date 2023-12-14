import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

import styles from './styles.module.scss'

type NavItemProps = {
  props: {
    path: string
    label: string
  }
}

export const NavItem = ({ props }: NavItemProps) => {
  const location = useLocation()

  return (
    <Link
      to={props.path}
      className={classNames(styles.link, {
        [styles['link--selected']]: location.pathname === props.path,
      })}
    >
      {props.label}
    </Link>
  )
}
