import { RouteObject } from 'react-router-dom'
import { ProductLayout } from '@/layout/product/product'
import { Cart, Category, ItemDetail } from '@/pages'

export const ProductRoutes: RouteObject = {
  path: '/',
  element: <ProductLayout />,
  errorElement: <h1>not found</h1>,
  children: [
    { path: 'cart', element: <Cart /> },
    { path: 'category/:id', element: <Category /> },
    { path: 'category/:id/item/:id', element: <ItemDetail /> },
    // { path: 'payment', element: <Payment /> },
  ],
}
