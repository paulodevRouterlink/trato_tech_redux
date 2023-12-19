import { RouteObject } from 'react-router-dom'
import { ProductLayout } from '@/layout/Product'
import { Cart } from '@/pages/Cart'
import { Category } from '@/pages/Category'
import { Advertise } from '@/pages/Advertise'

export const ProductRoutes: RouteObject = {
  path: '/',
  element: <ProductLayout />,
  children: [
    {
      path: 'cart',
      element: <Cart />,
    },
    {
      path: 'category/:id',
      element: <Category />,
    },
    {
      path: 'category/:id/item/:id',
      element: <Advertise />,
    },
  ],
}
