import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const RootLayout = () => {
  const { pathname } = useLocation()
  if (pathname === '/') return <Navigate to="/home" />

  return (
    <div>
      <Outlet />
    </div>
  )
}
