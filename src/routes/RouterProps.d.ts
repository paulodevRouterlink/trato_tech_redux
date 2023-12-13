import { ReactElement } from 'react'
import { RouterObject } from 'react-router-dom'

type RouterProps = {
  path: string
  element: ReactElement
  children?: Array<RouterObject>
  errorElement: ReactElement
}

export type { RouterProps }
