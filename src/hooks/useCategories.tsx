import { CategoryListProps } from '@/@types/CategoryProps'
import { useAppSelector } from '@/store/hooks/useSelectRedux'
import { useSelector } from 'react-redux'

export const useCategories = () => {
  const CATEGORIES = useAppSelector(state => state.categories)
  const category = useSelector((state: CategoryListProps) => state.categories)

  return { CATEGORIES, category }
}
