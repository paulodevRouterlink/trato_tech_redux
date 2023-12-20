import { RouteObject } from 'react-router-dom'
import { HomeLayout } from '@/layout/Home'
import { Home } from '@/pages/Home'
import { Category } from '@/pages/[Category]'

export const HomeRoutes: RouteObject = {
  path: '/',
  element: <HomeLayout />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'category/:id',
      element: <Category />,
    },
    {
      path: 'category/:id',
      element: <Category />,
    },
  ],
}
