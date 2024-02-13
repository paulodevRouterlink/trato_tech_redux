import { useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks/useRedux'
import { changeCart, changeQuantity, resetCart } from '@/store/reducers/cart'
import { favoriteItem, deleteItem } from '@/store/reducers/items'
import { ItemCartProps, QuantityItemProps } from '@/components/types/cart-props'

export const useCartProduct = () => {
  const [isCart, setIsCart] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const carts = useAppSelector((state) => state.cart)
  const product = useAppSelector((state) => state.items)
  const search = useAppSelector((state) => state.search)
  const productCart = useAppSelector((state) => state.cart.itemsCart)

  const { cart, allItem } = useMemo(() => {
    const regexp = new RegExp(search, 'i')

    const cartReducer = carts.itemsCart.reduce(
      (items: ItemCartProps[], itemCart) => {
        const item = product.find((item) => item.id === itemCart.id)

        if (item!.title.match(regexp)) {
          if (item) {
            items.push({
              id: item.id,
              quantity: itemCart.quantity,
            })
          }
        }

        return items
      },
      [],
    ) as ItemCartProps[]

    return { cart: cartReducer, allItem: carts.totalPrice }
  }, [carts, search, product])

  const isCartItem = (id: string) => {
    const itemIsCart = productCart.some((itemCart) => itemCart.id === id)

    return itemIsCart
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

  const decrementQuantityItem = ({ id, quantity }: QuantityItemProps) => {
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
    allItem,
    productCart,
    handleDeleteItem,
    handleFavoriteItem,
    handleItemAddToCart,
    incrementQuantityItem,
    decrementQuantityItem,
    handleResetCart,
    isCartItem,
  }
}
