import { forwardRef } from 'react'
import classNames from 'classnames'
import { Alert } from '..'
import styles from './select.module.scss'

type OptionsProps = {
  options: {
    id: string
    name: string
  }[]
}

type SelectProps = OptionsProps & {
  errors: string | undefined
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, errors }, ref) => (
    <div
      className={classNames(styles['select-field'], {
        [styles['select-error']]: errors,
      })}
    >
      <select ref={ref}>
        <option value="">{'label'}</option>
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
