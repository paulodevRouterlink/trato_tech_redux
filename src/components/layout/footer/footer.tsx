import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Icon } from '@/components/ui'
import styles from './footer.module.scss'

export const Footer = () => {
  const FOOTER_ICONS = [
    { id: 1, icon: FaFacebook },
    { id: 2, icon: FaTwitter },
    { id: 3, icon: FaInstagram },
  ]

  return (
    <footer className={styles.footer}>
      <div>
        {FOOTER_ICONS.map(props => (
          <Icon key={props.id} icon={props.icon} size={24} />
        ))}
      </div>
      <span>Create by Weslley</span>
    </footer>
  )
}
