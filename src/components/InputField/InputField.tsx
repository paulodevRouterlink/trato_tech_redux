import { InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import { Alert } from '@/components/Alert'
import styles from './styles.module.scss'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  errors: string | undefined
}

export const InputField = ({ errors, ...props }: InputFieldProps) => {
  return (
    <div
      className={classNames(styles['input-field'], {
        [styles['input-error']]: errors,
      })}
    >
      <input {...props} />

      {errors && <Alert props={{ error: errors }} />}
    </div>
  )
}
