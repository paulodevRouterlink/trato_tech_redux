import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/store/hooks/useRedux'

export const useEditItems = () => {
  const params = useParams()

  const item = useAppSelector(state =>
    state.items.find(props => props.id === params.id)
  )

  const product = item!

  return { product }
}
