import { Link, useLocation } from 'react-router-dom'
import { ShoppingCartIcon } from 'lucide-react'
import classNames from 'classnames'
import { NavItem } from './nav-item'
import { Icon } from '@/components/ui'
import { Search } from './components'
import Logotipo from '@/assets/logo.svg'
import styles from './navbar.module.scss'

export const NavBar = () => {
  const location = useLocation()

  return (
    <nav className={styles.nav_bar}>
      <div className={styles.nav_bar__logo}>
        <img src={Logotipo} alt="Logotipo Trato-Tech" />
      </div>

      <div className={styles.nav_bar__links}>
        <NavItem label="Pagina Inicial" path="/home" />
      </div>

      <div className={styles.nav_bar__search}>
        <Search />

        <Link to="/cart">
          {location.pathname === '/cart' ? (
            <ShoppingCartIcon
              className={classNames(styles.cart__icon, {
                [styles.cart__icon_selected]: location.pathname === '/cart',
              })}
            />
          ) : (
            <Icon icon={ShoppingCartIcon} size={24} />
          )}
        </Link>
      </div>
    </nav>
  )
}
