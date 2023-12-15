import { SelectHTMLAttributes } from 'react'

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  categories: {
    id: string
    name: string
  }[]
}

export const SelectField = ({ categories, ...props }: SelectFieldProps) => (
  <select {...props}>
    <option value="" disabled>
      Selecione a categoria
    </option>
    {categories.map(props => (
      <option key={props.id} value={props.id}>
        {props.name}
      </option>
    ))}
  </select>
)
