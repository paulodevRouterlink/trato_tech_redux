import { HTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui'
import { HeaderProps } from '../../header-props'
import styles from './header-with-banner.module.scss'

type HeaderWithImageProps = HTMLAttributes<HTMLDivElement> & {
  props: Pick<HeaderProps, 'title' | 'description' | 'imageUrl'>
}

export const HeaderWithImage = ({ props, ...rest }: HeaderWithImageProps) => {
  const navigate = useNavigate()

  return (
    <div {...rest} className={styles.heading}>
      <div className={styles.heading__text}>
        <h1>{props?.title}</h1>
        <h2>{props?.description}</h2>
        <Button
          props={{ label: 'Quero Anunciar' }}
          onClick={() => navigate('/advertise')}
        />
      </div>
      <div className={styles.heading__image}>
        <img alt={props?.title} src={props.imageUrl} />
      </div>
    </div>
  )
}
