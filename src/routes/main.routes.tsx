import { RouteObject } from 'react-router-dom'
import { Advertise, Categories, Home } from '@/pages'
import { RootLayout } from '@/layout'

export const MainRoutes: RouteObject = {
  path: '/',
  element: <RootLayout />,
  children: [
    { path: 'home', element: <Home /> },
    { path: 'categories', element: <Categories /> },
    { path: 'advertise', element: <Advertise /> },
  ],
}
