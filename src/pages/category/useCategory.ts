import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks/useRedux'
import { loadOneCategory } from '@/store/ducks/categories'

export const useCategory = () => {
  const { categoryId } = useParams()
  const { categories, items, search } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (categoryId) {
      dispatch(loadOneCategory({ categoryId }))
    }
  }, [dispatch, categoryId])

  const { loadCategory, loadProducts } = useMemo(() => {
    const regexp = new RegExp(search, 'i')

    return {
      loadCategory: categories.find((category) => category.id === categoryId),
      loadProducts: items.filter(
        (item) => item.category === categoryId && item.title.match(regexp),
      ),
    }
  }, [categories, items, search, categoryId])

  return {
    categories,
    loadCategory,
    loadProducts,
  }
}
