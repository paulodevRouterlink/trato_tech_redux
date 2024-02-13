import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type ScrollTopProps = { children: ReactNode }

export const ScrollTop = ({ children }: ScrollTopProps) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return <>{children}</>
}
