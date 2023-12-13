import { RouteObject } from 'react-router-dom'
import { HomeLayout } from '../layout/Home'
import { Home } from '../pages/Home'

export const HomeRoutes: RouteObject = {
  path: '/',
  element: <HomeLayout />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
  ],
}
