import { RouteObject } from 'react-router-dom'
import { HomeLayout } from '@/layout/Home'
import { Home } from '@/pages/Home'
import { Advertise } from '@/pages/Advertise'

export const HomeRoutes: RouteObject = {
  path: '/',
  element: <HomeLayout />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'advertise',
      element: <Advertise />,
    },
  ],
}
