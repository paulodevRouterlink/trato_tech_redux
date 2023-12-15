import styles from './styles.module.scss'

type SelectFieldProps = {
  categories: {
    id: string
    name: string
  }[]
}

export const SelectField = ({ categories }: SelectFieldProps) => {
  return (
    <div className={styles['select-field']}>
      <select>
        <option value="" disabled>
          Selecione a categoria
        </option>
        {categories.map(props => (
          <option key={props.id} value={props.id}>
            {props.name}
          </option>
        ))}
      </select>
    </div>
  )
}
