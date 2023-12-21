import { RouteObject } from 'react-router-dom'
import { ProductLayout } from '@/layout/Product'
import { Cart } from '@/pages/Cart'
import { Advertise } from '@/pages/Advertise'
import { ItemDetail } from '@/pages/[ItemDetail]'

export const ProductRoutes: RouteObject = {
  path: '/',
  element: <ProductLayout />,
  errorElement: <h1>not found</h1>,
  children: [
    {
      path: 'cart',
      element: <Cart />,
    },
    {
      path: 'advertise',
      element: <Advertise />,
    },
    {
      path: 'category/:id/item/:id',
      element: <ItemDetail />,
    },
  ],
}
