import { useMemo } from 'react'
import { CartType } from '@/@types/CartProps'
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

  const { cart, allItem } = useAppSelector(state => {
    let allItem = 0
    const regexp = new RegExp(state.search, 'i')

    const cartReducer: CartType[] = state.cart.reduce((items, itemCart) => {
      const item = state.items.find(item => item.id === itemCart.id)
      allItem += item!.price * itemCart.quantity

      if (item!.title.match(regexp)) {
        items.push({ ...item, quantity: itemCart.quantity })
      }

      return items
    }, [])

    return { cart: cartReducer, allItem }
  })

  const itemInCart = useMemo(() => ({ cart, allItem }), [cart, allItem])

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
    itemInCart,
    handleFavorite,
    handleAddToCart,
    incrementQuantity,
    decrementQuantity,
    handleResetCart,
  }
}
