import styles from './styles.module.scss'

export const SearchField = () => {
  return (
    <div className={styles.search_field}>
      <input type="text" placeholder="O que você procura?" />
    </div>
  )
}
