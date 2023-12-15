import { ChangeEvent, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks/useSelectRedux'
import { changeSearchingAction, resetSearching } from '@/store/reducers/search'
import styles from './styles.module.scss'

export const SearchField = () => {
  const search = useAppSelector(state => state.search)
  const dispatch = useAppDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(resetSearching())
  }, [location.pathname, dispatch])

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
