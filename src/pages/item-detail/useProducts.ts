import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/store/hooks/useRedux'

export const useProducts = () => {
  const { itemId } = useParams()
  const items = useAppSelector((state) => state.items)
  const productDetail = items.find((item) => item.id === itemId)

  return {
    productDetail,
  }
}
