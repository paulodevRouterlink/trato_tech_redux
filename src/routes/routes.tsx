import { useRoutes } from 'react-router-dom'
import { ProductRoutes } from './product.routes'
import { MainRoutes } from './main.routes'

export const MappedRoutes = () => {
  const routes = useRoutes([MainRoutes, ProductRoutes])

  return routes
}
