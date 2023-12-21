import { useMemo } from 'react'
import { CartType } from '@/@types/CartProps'
import { useAppDispatch, useAppSelector } from '@/store/hooks/useRedux'
import {
  changeCartAction,
  changeQuantityAction,
  resetCart,
} from '@/store/reducers/cart'
import { changeFavorite, deleteItem } from '@/store/reducers/items'

type CartProductProps = { id?: string }

export const useCartProduct = ({ id }: CartProductProps) => {
  const dispatch = useAppDispatch()
  const carts = useAppSelector(state => state.cart)
  const product = useAppSelector(state => state.items)
  const search = useAppSelector(state => state.search)

  const { cart, allItem } = useMemo(() => {
    let allItem = 0
    const regexp = new RegExp(search, 'i')

    const cartReducer: CartType[] = carts.reduce((items, itemCart) => {
      const item = product.find(item => item.id === itemCart.id)
      allItem += item!.price * itemCart.quantity

      if (item!.title.match(regexp)) {
        items.push({ ...item, quantity: itemCart.quantity })
      }

      return items
    }, [])

    return { cart: cartReducer, allItem }
  }, [carts, search, product])

  const isCart = useAppSelector(state =>
    state.cart.some(item => item.id === id)
  )

  const handleDelete = () => {
    dispatch(deleteItem(id))
  }

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
    cart,
    allItem,
    handleDelete,
    handleFavorite,
    handleAddToCart,
    incrementQuantity,
    decrementQuantity,
    handleResetCart,
  }
}
