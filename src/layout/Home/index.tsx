import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/Header'
import { TitleWithImage } from '@/components/Header/TitleWithImage'

import Clock from '@/assets/inicial.png'

export const HomeLayout = () => {
  const location = useLocation()

  const HeadingProps = {
    title: 'Classificados Tech',
    description: 'Compre diversos tipos de produtos no melhor site do Brasil!',
    image: Clock,
  }

  return (
    <div>
      {location.pathname !== '/advertise' && (
        <Header props={HeadingProps}>
          <TitleWithImage
            props={HeadingProps}
            imageUrl={HeadingProps.image}
            style={{ paddingBottom: '25rem' }}
          />
        </Header>
      )}

      <Outlet />
    </div>
  )
}
