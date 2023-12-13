import { useRoutes } from 'react-router-dom'
import { HomeRoutes } from './HomeRoutes'
import { CartRoutes } from './CartRoutes'

export const MappedRoutes = () => {
  const routes = useRoutes([HomeRoutes, CartRoutes])

  return routes
}
