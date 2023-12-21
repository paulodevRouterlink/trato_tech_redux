import { RouteObject } from 'react-router-dom'
import { HomeLayout } from '@/layout/Home'
import { Home } from '@/pages/Home'
import { Category } from '@/pages/[Category]'
import { Categories } from '@/pages/Categories'

export const HomeRoutes: RouteObject = {
  path: '/',
  element: <HomeLayout />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'categories',
      element: <Categories />,
    },
    {
      path: 'category/:id',
      element: <Category />,
    },
  ],
}
