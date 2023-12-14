import { StateProps } from '@/store'
import { useAppSelector } from '@/store/hooks/useSelectRedux'
import { useSelector } from 'react-redux'

export const useCategories = () => {
  const CATEGORIES = useAppSelector(state => state.categories)
  const category = useSelector((state: StateProps) => state.categories)

  return { CATEGORIES, category }
}
