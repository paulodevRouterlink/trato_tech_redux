import { ChangeEvent, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks/useRedux'
import { changeSearchingAction, resetSearching } from '@/store/reducers/search'
import styles from './search.module.scss'

export const Search = () => {
  const search = useAppSelector(state => state.search)
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  useEffect(() => {
    dispatch(resetSearching())
  }, [pathname, dispatch])

  const onChangeAction = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchingAction(event.target.value))
  }

  return (
    <div className={styles.search_field}>
      <input
        type="text"
        placeholder="O que você procura?"
        value={search}
        onChange={onChangeAction}
      />
    </div>
  )
}
