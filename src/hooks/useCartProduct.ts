import { useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks/useRedux'
import { changeCart, changeQuantity, resetCart } from '@/store/ducks/cart'
import { favoriteItem, deleteItem } from '@/store/ducks/items'
import { ItemCartProps } from '@/components/types/cart-props'

export const useCartProduct = () => {
  const [isCart, setIsCart] = useState<boolean>(false)
  const { totalPrice, itemsCart } = useAppSelector((state) => state.cart)
  const product = useAppSelector((state) => state.items)
  const search = useAppSelector((state) => state.search)
  const dispatch = useAppDispatch()

  const cart = useMemo(() => {
    const regexp = new RegExp(search, 'i')

    return itemsCart.reduce((items, itemCart) => {
      const item = product.find((item) => item.id === itemCart.id)

      if (item?.title.match(regexp)) {
        items.push({ id: item.id, quantity: itemCart.quantity })
      }

      return items
    }, [] as ItemCartProps[])
  }, [itemsCart, search, product])

  const isCartItem = (id: string) => {
    return itemsCart.some((itemCart) => itemCart.id === id)
  }

  const handleDeleteItem = ({ id }: { id: string }) => {
    dispatch(deleteItem({ id }))
  }

  const handleFavoriteItem = ({ id }: { id: string }) => {
    dispatch(favoriteItem({ id }))
  }

  const handleItemAddToCart = ({ id }: { id: string }) => {
    dispatch(changeCart({ id }))
    setIsCart(!isCart)
  }

  const decrementQuantityItem = ({ id, quantity }: ItemCartProps) => {
    if (quantity >= 1) {
      dispatch(changeQuantity({ id, quantity: -1 }))
    } else {
      dispatch(changeCart({ id }))
    }
  }

  const incrementQuantityItem = ({ id }: { id: string }) => {
    dispatch(changeQuantity({ id, quantity: +1 }))
  }

  const handleResetCart = () => {
    dispatch(resetCart())
  }

  return {
    isCart,
    cart,
    totalPrice,
    itemsCart,
    handleDeleteItem,
    handleFavoriteItem,
    handleItemAddToCart,
    incrementQuantityItem,
    decrementQuantityItem,
    handleResetCart,
    isCartItem,
  }
}
