import { useAppDispatch, useAppSelector } from '@/store/hooks/useRedux'
import {
  changeCartAction,
  changeQuantityAction,
  resetCart,
} from '@/store/reducers/cart'
import { changeFavorite } from '@/store/reducers/items'

type CartProductProps = { id?: string }

export const useCartProduct = ({ id }: CartProductProps) => {
  const dispatch = useAppDispatch()

  const isCart = useAppSelector(state =>
    state.cart.some(item => item.id === id)
  )

  const handleFavorite = () => {
    dispatch(changeFavorite(id))
  }

  const handleAddToCart = () => {
    dispatch(changeCartAction(id))
  }

  const decrementQuantity = ({ quantity }: { quantity: number }) => {
    if (quantity! >= 1) {
      dispatch(changeQuantityAction({ id, quantity: -1 }))
    }
  }
  const incrementQuantity = () => {
    dispatch(changeQuantityAction({ id, quantity: +1 }))
  }

  const handleResetCart = () => {
    dispatch(resetCart())
  }

  return {
    isCart,
    handleFavorite,
    handleAddToCart,
    incrementQuantity,
    decrementQuantity,
    handleResetCart,
  }
}
