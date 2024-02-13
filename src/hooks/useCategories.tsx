import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/store/hooks/useRedux'

export const useCategories = () => {
  const params = useParams()
  const CATEGORIES = useAppSelector((state) => state.categories)
  const ITEMS = useAppSelector((state) => state.items)
  const search = useAppSelector((state) => state.search)

  const { category, items } = useMemo(() => {
    const regexp = new RegExp(search, 'i')

    return {
      category: CATEGORIES.find((category) => category.id === params.id),
      items: ITEMS.filter(
        (item) => item.category === params.id && item.title.match(regexp),
      ),
    }
  }, [CATEGORIES, ITEMS, search, params])

  const CATEGORY = category!

  return { CATEGORIES, CATEGORY, items }
}
