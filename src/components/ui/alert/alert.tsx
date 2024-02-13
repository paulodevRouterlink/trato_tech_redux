import styles from './alert.module.scss'

export const Alert = ({ props }: { props: { error: string } }) => (
  <span className={styles['message-error']}>{props.error}</span>
)
