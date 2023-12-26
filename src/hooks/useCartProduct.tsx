import { useMemo } from 'react'
import { CartType } from '@/@types/CartProps'
import { useAppDispatch, useAppSelector } from '@/store/hooks/useRedux'
import { changeCart, changeQuantity, resetCart } from '@/store/reducers/cart'
import { changeFavorite, deleteItem } from '@/store/reducers/items'

type CartProductProps = { id?: string }

export const useCartProduct = ({ id }: CartProductProps) => {
  const dispatch = useAppDispatch()
  const carts = useAppSelector(state => state.cart)
  const product = useAppSelector(state => state.items)
  const search = useAppSelector(state => state.search)

  const { cart, allItem } = useMemo(() => {
    const regexp = new RegExp(search, 'i')

    const cartReducer: CartType[] = carts.data?.reduce((items, itemCart) => {
      const item = product.find(item => item.id === Number(itemCart.id))

      if (item!.title.match(regexp)) {
        items.push({ ...item, quantity: itemCart.quantity })
      }

      return items
    }, [])

    return { cart: cartReducer, allItem: carts.all }
  }, [carts, search, product])

  const isCart = useAppSelector(
    state => state.cart.data?.some(item => item.id === id)
  )

  const handleDelete = () => {
    dispatch(deleteItem(id))
  }

  const handleFavorite = () => {
    dispatch(changeFavorite(id))
  }

  const handleAddToCart = () => {
    dispatch(changeCart(id))
  }

  const decrementQuantity = ({ quantity }: { quantity: number }) => {
    if (quantity! >= 1) {
      dispatch(changeQuantity({ id, quantity: -1 }))
    }
  }

  const incrementQuantity = () => {
    dispatch(changeQuantity({ id, quantity: +1 }))
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
