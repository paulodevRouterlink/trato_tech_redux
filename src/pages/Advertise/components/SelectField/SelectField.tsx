import { ReactNode } from 'react'
import classNames from 'classnames'
import { Alert } from '@/components/Alert'

import styles from './styles.module.scss'

type SelectFieldProps = {
  errors: string | undefined
  children: ReactNode
}

export const SelectField = ({ errors, children }: SelectFieldProps) => (
  <>
    <div
      className={classNames(styles['select-field'], {
        [styles['select-error']]: errors,
      })}
    >
      {children}
    </div>
    {errors && <Alert props={{ error: errors }} />}
  </>
)
