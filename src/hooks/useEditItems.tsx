import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/store/hooks/useRedux'

export const useEditItems = () => {
  const params = useParams()

  const items = useAppSelector(state => state.items)

  const item = items.filter(props => props.id === params.id)
  const itemInfo = item.find(props => props.id === params.id)

  console.log('item ', item)
  console.log('infoInfo ', itemInfo)

  const product = itemInfo!
  console.log('product ==> ', product)

  return product
}
