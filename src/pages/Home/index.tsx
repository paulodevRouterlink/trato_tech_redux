import { Header } from '@/components/Header'
import { TitleWithImage } from '@/components/Header/TitleWithImage'

import Clock from '@/assets/inicial.png'

export const Home = () => {
  const HeadingProps = {
    title: 'Classificados Tech',
    description: 'Compre diversos tipos de produtos no melhor site do Brasil!',
    image: Clock,
  }

  return (
    <div>
      <Header props={HeadingProps}>
        <TitleWithImage
          props={HeadingProps}
          style={{ paddingBottom: '25rem' }}
        />
      </Header>

      <h1>Home</h1>
    </div>
  )
}
