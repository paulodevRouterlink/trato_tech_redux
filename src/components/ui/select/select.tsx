import { ComponentProps, forwardRef } from 'react'
import classNames from 'classnames'
import { Alert } from '@/components/ui'
import styles from './select.module.scss'

type SelectProps = ComponentProps<'select'> & {
  placeholder?: string
  errors?: string | undefined
  options: {
    id: string
    name: string
  }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, errors, placeholder, ...props }, ref) => (
    <div
      className={classNames(styles['select-field'], {
        [styles['select-error']]: errors,
      })}
    >
      <select {...props} ref={ref}>
        <option value="">{placeholder}</option>
        {options.map((props, index) => (
          <option key={`${index}${props.id}`} value={props.id}>
            {props.name}
          </option>
        ))}
      </select>
      {errors && <Alert props={{ error: errors }} />}
    </div>
  ),
)

Select.displayName = 'Select'
