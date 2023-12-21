import styles from './styles.module.scss'

type LoaderProps = {
  label: string
}

const Spinner = (
  <div className={styles.spinner}>
    <span className={styles.spinner__loader} />
  </div>
)

const Loader = ({ label }: LoaderProps) => (
  <div className={styles.loading}>
    {Spinner}
    {label}
  </div>
)

export { Loader }
