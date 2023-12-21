import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/store/hooks/useRedux'

export const useCategories = () => {
  const params = useParams()

  const CATEGORIES = useAppSelector(state => state.categories)

  const { category, items } = useAppSelector(state => {
    const regexp = new RegExp(state.search, 'i')

    return {
      category: state.categories.find(category => category.id === params.id),
      items: state.items.filter(
        item => item.category === params.id && item.title.match(regexp)
      ),
    }
  })

  return { CATEGORIES, category, items }
}
