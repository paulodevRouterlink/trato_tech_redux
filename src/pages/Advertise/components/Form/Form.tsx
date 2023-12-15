import { useAppSelector } from '@/store/hooks/useRedux'
import { Button } from '@/components/Button'

import styles from './styles.module.scss'

export const Form = () => {
  const categories = useAppSelector(state =>
    state.categories.map(({ id, name }) => ({ id, name }))
  )

  console.log('categories ==> ', categories)

  return (
    <form className={styles.form}>
      <input type="text" placeholder="Nome do produto" />
      <input type="text" placeholder="Descrição do produto" />
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

      <input type="number" placeholder="Preço do produto" />

      <div className={styles['form-action']}>
        <Button type="submit" props={{ label: 'Cadastrar produto' }} />
      </div>
    </form>
  )
}
