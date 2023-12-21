import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/store/hooks/useRedux'

export const useEditItems = () => {
  const params = useParams()
  const items = useAppSelector(state => state.items)
  const item = items.find(item => item.id === Number(params.id))
  const product = item!

  return product
}
