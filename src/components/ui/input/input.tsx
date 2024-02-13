import { InputHTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'
import { Alert } from '..'
import styles from './input.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errors: string | undefined
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errors, ...props }, ref) => (
    <div
      className={classNames(styles['input-field'], {
        [styles['input-error']]: errors,
      })}
    >
      <input {...props} ref={ref} />

      {errors && <Alert props={{ error: errors }} />}
    </div>
  ),
)

Input.displayName = 'Input'
