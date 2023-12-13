import { Link, useLocation } from 'react-router-dom'
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri'
import classNames from 'classnames'
import { Icon } from '../Icon'
import { SearchField } from '../SearchField'
import Logotipo from '@/assets/logo.svg'
import style from './styles.module.scss'

export const NavBar = () => {
  const location = useLocation()

  return (
    <nav className={style.nav_bar}>
      <div className={style.nav_bar__logo}>
        <img src={Logotipo} alt="Logotipo Trato-Tech" />
      </div>

      <div className={style.nav_bar__links}>
        <Link
          to="/"
          className={classNames(style.link, {
            [style['link--selected']]: location.pathname === '/',
          })}
        >
          Pagina Inicial
        </Link>
      </div>

      <div className={style.nav_bar__search}>
        <SearchField />

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
