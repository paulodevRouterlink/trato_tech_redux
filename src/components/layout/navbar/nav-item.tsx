import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import styles from './navbar.module.scss'

type NavItemProps = {
  path: string
  label: string
}

export const NavItem = ({ path, label }: NavItemProps) => {
  const { pathname } = useLocation()

  return (
    <Link
      to={path}
      className={classNames(styles.link, {
        [styles['link--selected']]: pathname === path,
      })}
    >
      {label}
    </Link>
  )
}
