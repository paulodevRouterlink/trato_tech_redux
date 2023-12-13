import { RouteObject } from 'react-router-dom'
import { CartLayout } from '../layout/Cart'
import { Cart } from '../pages/Cart'
import { Category } from '../pages/Category'

export const CartRoutes: RouteObject = {
  path: '/',
  element: <CartLayout />,
  children: [
    {
      path: 'cart',
      element: <Cart />,
    },
    {
      path: 'category/:id',
      element: <Category />,
    },
  ],
}
