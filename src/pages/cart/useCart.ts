import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartProduct } from '@/hooks/useCartProduct'
import { useAppSelector } from '@/store/hooks/useRedux'

export const useCart = () => {
  const { cart, totalPrice } = useCartProduct()
  const items = useAppSelector((state) => state.items)
  const navigate = useNavigate()

  const productsCart = useMemo(() => {
    return cart.map((props) => {
      const product = items.find((product) => product.id === props.id)

      return {
        id: props.id,
        title: product?.title || '',
        description: product?.description || '',
        photoUrl: product?.photoUrl || '',
        favorite: product?.favorite || false,
        price: product?.price || 0,
        category: product?.category || '',
        quantity: props.quantity,
      }
    })
  }, [])

  return {
    productsCart,
    totalPrice,
    navigate,
  }
}
