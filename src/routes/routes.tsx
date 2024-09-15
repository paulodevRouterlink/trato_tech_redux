import { useRoutes } from 'react-router-dom'
import { RootLayout } from '@/layout'
import * as Page from '@/pages'

export const MappedRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: 'home', element: <Page.Home /> },
        { path: 'advertise', element: <Page.Advertise /> },
        { path: 'cart', element: <Page.Cart /> },
        { path: 'category/:categoryId', element: <Page.Category /> },
        {
          path: 'category/:categoryId/item/:itemId',
          element: <Page.ItemDetail />,
        },
        { path: 'payment', element: <Page.Payment /> },
      ],
    },
  ])
}
