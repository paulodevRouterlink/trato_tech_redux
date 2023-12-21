import { ReactNode } from 'react'
import classNames from 'classnames'
import { Alert } from '@/components/Alert'
import styles from './styles.module.scss'

type InputFieldProps = {
  errors: string | undefined
  children: ReactNode
}

export const InputField = ({ children, errors }: InputFieldProps) => (
  <div
    className={classNames(styles['input-field'], {
      [styles['input-error']]: errors,
    })}
  >
    {children}
    {errors && <Alert props={{ error: errors }} />}
  </div>
)
