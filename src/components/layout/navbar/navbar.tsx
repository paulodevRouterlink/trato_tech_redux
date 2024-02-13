import { Link, useLocation } from 'react-router-dom'
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri'
import { NavItem } from './nav-item'
import { Icon, Search } from '@/components/ui'
import Logotipo from '@/assets/logo.svg'
import style from './navbar.module.scss'

export const NavBar = () => {
  const location = useLocation()

  return (
    <nav className={style.nav_bar}>
      <div className={style.nav_bar__logo}>
        <img src={Logotipo} alt="Logotipo Trato-Tech" />
      </div>

      <div className={style.nav_bar__links}>
        <NavItem props={{ label: 'Pagina Inicial', path: '/home' }} />
        <NavItem props={{ label: 'Categorias', path: '/categories' }} />
      </div>

      <div className={style.nav_bar__search}>
        <Search />

        <Link to="/cart">
          {location.pathname === '/cart' ? (
            <Icon icon={RiShoppingCartFill} size={24} />
          ) : (
            <Icon icon={RiShoppingCart2Line} size={24} />
          )}
        </Link>
      </div>
    </nav>
  )
}
