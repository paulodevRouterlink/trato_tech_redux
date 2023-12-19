import { useRoutes } from 'react-router-dom'
import { HomeRoutes } from './HomeRoutes'
import { ProductRoutes } from './ProductRoutes'

export const MappedRoutes = () => {
  const routes = useRoutes([HomeRoutes, ProductRoutes])

  return routes
}
