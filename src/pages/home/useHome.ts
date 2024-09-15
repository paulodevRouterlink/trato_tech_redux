import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { loadCategories } from '@/store/ducks/categories'
import { useAppDispatch, useAppSelector } from '@/store/hooks/useRedux'

export const useHome = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const categories = useAppSelector((state) => state.categories)

  useEffect(() => {
    dispatch(loadCategories())
  }, [dispatch])

  return {
    navigate,
    categories,
  }
}
