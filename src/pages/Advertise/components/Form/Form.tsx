import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAppSelector } from '@/store/hooks/useRedux'
import { Button } from '@/components/Button'

import styles from './styles.module.scss'
import select from '../SelectField/styles.module.scss'

const schema = z
  .object({
    name: z.string().nonempty('Digite o nome do produto'),
    description: z.string().nonempty('Digite a descrição do produto'),
    image: z.string().url('Digite uma URL válida'),
    categories: z.string().refine(value => value.length, {
      message: 'Price must be a positive number',
      path: ['categories'],
    }),
    price: z
      .number({
        errorMap: () => {
          return { message: 'Digite uma preço válido' }
        },
      })
      .positive('Digite um número maior que 0'),
  })
  .refine(fields => fields.categories.length, {
    path: ['categories'],
    message: 'Selecione uma categoria',
  })

type SchemaFormProps = z.infer<typeof schema>

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SchemaFormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      categories: '',
    },
  })

  console.log('Errors ==> ', errors)

  const createdAdvertise = (data: SchemaFormProps) => {
    console.log({ data })
  }

  const categories = useAppSelector(state =>
    state.categories.map(({ id, name }) => ({ id, name }))
  )

  return (
    <form className={styles.form} onSubmit={handleSubmit(createdAdvertise)}>
      <input
        {...register('name')}
        type="text"
        placeholder="Nome do produto"
        // aria-invalid={errors.name?.message ? 'true' : 'false'}
      />
      {errors.name?.message && (
        <span className={styles['message-error']}>{errors.name?.message}</span>
      )}

      <input
        {...register('description')}
        type="text"
        placeholder="Descrição do produto"
      />
      {errors.description?.message && (
        <span className={styles['message-error']}>
          {errors.description?.message}
        </span>
      )}

      <input
        {...register('image')}
        type="text"
        placeholder="URL da imagem do produto"
      />
      {errors.image?.message && (
        <span className={styles['message-error']}>{errors.image?.message}</span>
      )}

      <input
        {...(register('price'),
        { setValueAs: (value: string) => parseInt(value, 10) })}
        type="number"
        placeholder="Preço do produto"
        onChange={e => setValue('price', parseInt(e.target.value))}
      />
      {errors.price?.message && (
        <span className={styles['message-error']}>{errors.price?.message}</span>
      )}

      <div className={select['select-field']}>
        <select {...register('categories')}>
          <option value="">Selecione a categoria</option>
          {categories.map(props => (
            <option key={props.id} value={props.id}>
              {props.name}
            </option>
          ))}
        </select>
      </div>
      {errors.categories?.message && (
        <span className={styles['message-error']}>
          {errors.categories?.message}
        </span>
      )}

      <div className={styles['form-action']}>
        <Button type="submit" props={{ label: 'Cadastrar produto' }} />
      </div>
    </form>
  )
}
