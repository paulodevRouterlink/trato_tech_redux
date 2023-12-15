import { useAppSelector } from '@/store/hooks/useRedux'
import { Button } from '@/components/Button'
import { SelectField } from '../SelectField'

import styles from './styles.module.scss'

export const Form = () => {
  const categories = useAppSelector(state =>
    state.categories.map(({ id, name }) => ({ id, name }))
  )

  return (
    <form className={styles.form}>
      <input type="text" placeholder="Nome do produto" />
      <input type="text" placeholder="Descrição do produto" />

      <input type="text" placeholder="URL da imagem do produto" />
      <input type="number" placeholder="Preço do produto" />

      <SelectField categories={categories} />

      <div className={styles['form-action']}>
        <Button type="submit" props={{ label: 'Cadastrar produto' }} />
      </div>
    </form>
  )
}
