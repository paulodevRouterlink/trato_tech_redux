import { Outlet, useLocation, useParams } from 'react-router-dom'
import { Header } from '@/components/Header'
import { TitleWithImage } from '@/components/Header/TitleWithImage'

import Clock from '@/assets/inicial.png'

export const HomeLayout = () => {
  const { pathname } = useLocation()
  const params = useParams()

  const HeadingProps = {
    title: 'Classificados Tech',
    description: 'Compre diversos tipos de produtos no melhor site do Brasil!',
    image: Clock,
  }

  const verifyPath = () => {
    switch (pathname) {
      case `/category/${params.id}`:
        return null

      case '/categories':
        return <Header props={{ title: 'Categorias', description: '' }} />

      default:
        return (
          <Header props={HeadingProps}>
            <TitleWithImage
              props={HeadingProps}
              imageUrl={HeadingProps.image}
              style={{ paddingBottom: '25rem' }}
            />
          </Header>
        )
    }
  }

  return (
    <div>
      {verifyPath()}

      <Outlet />
    </div>
  )
}
