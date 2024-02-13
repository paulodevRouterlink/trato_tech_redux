import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/store/hooks/useRedux'
import { useState } from 'react'
import { ItemProps } from '@/components/types/items-props'

export const useProducts = () => {
  const params = useParams()
  const items = useAppSelector((state) => state.items)
  const item = items.find((item) => item.id === params.id)
  const [product, setProduct] = useState<ItemProps>({} as ItemProps)

  return { item, items, product, setProduct }
}
