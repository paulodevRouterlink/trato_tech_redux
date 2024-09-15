import styles from './loader.module.scss'

type LoaderProps = {
  label: string
}

export const Loader = ({ label }: LoaderProps) => (
  <div className={styles.loading}>
    <div className={styles.spinner}>
      <span className={styles.spinner__loader} />
    </div>

    <p>{label}</p>
  </div>
)
