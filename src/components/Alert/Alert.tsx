import styles from './styles.module.scss'

export const Alert = ({ props }: { props: { error: string } }) => (
  <span className={styles['message-error']}>{props.error}</span>
)
