import { useEffect, ChangeEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@/store/hooks/useRedux'
import { resetSearching, changeSearchingAction } from '@/store/ducks/search'

export const useSearch = () => {
  const search = useAppSelector((state) => state.search)
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  useEffect(() => {
    dispatch(resetSearching())
  }, [pathname, dispatch])

  const handleChangeSearching = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchingAction(event.target.value))
  }

  return { handleChangeSearching, search }
}
