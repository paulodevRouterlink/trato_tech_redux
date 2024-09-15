import { SearchIcon } from 'lucide-react'
import styles from './search.module.scss'
import { useSearch } from './useSearch'

export const Search = () => {
  const { search, handleChangeSearching } = useSearch()

  return (
    <div className={styles.search_field}>
      <input
        type="text"
        placeholder="O que você procura?"
        value={search}
        onChange={handleChangeSearching}
      />

      <SearchIcon className={styles.icon__search} />
    </div>
  )
}
