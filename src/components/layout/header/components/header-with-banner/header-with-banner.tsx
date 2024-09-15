import { ComponentProps } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui'
import { HeaderProps } from '../../header-props'
import styles from './header-with-banner.module.scss'

type HeaderWithImageProps = ComponentProps<'div'> &
  Pick<HeaderProps, 'title' | 'description' | 'imageUrl'>

export const HeaderWithImage = ({
  title = '',
  description = '',
  imageUrl = '',
  ...rest
}: HeaderWithImageProps) => {
  const navigate = useNavigate()

  return (
    <div {...rest} className={styles.heading}>
      <div className={styles.heading__text}>
        <h1>{title}</h1>
        <h2>{description}</h2>

        <Button text="Quero Anunciar" onClick={() => navigate('/advertise')} />
      </div>

      <div className={styles.heading__image}>
        <img alt={title} src={imageUrl} />
      </div>
    </div>
  )
}
