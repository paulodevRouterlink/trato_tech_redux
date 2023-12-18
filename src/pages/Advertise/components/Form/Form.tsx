import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/Button'
import { SelectField } from '../SelectField'
import { InputField } from '../InputField'
import { Options } from '../Options'
import { useCategories } from '@/hooks/useCategories'
import { useAppDispatch } from '@/store/hooks/useRedux'
import { createItem } from '@/store/reducers/items'
import styles from './styles.module.scss'

const schema = z.object({
  title: z.string().min(4, 'Digite o nome do produto'),
  description: z.string().min(15, 'Digite a descrição do produto'),
  photoUrl: z.string().url('Digite uma URL válida'),
  categories: z.string().nonempty('Selecione uma categoria válida'),
  price: z
    .number({
      required_error: 'Digite o preço',
      invalid_type_error: 'Digite o preço do produto',
    })
    .positive('Por favor digite um preço válido'),
  // price: z.number().min(0, { message: 'Por favor digite um preço válido' }),
})

type SchemaFormProps = z.infer<typeof schema>

export const Form = () => {
  const [output, setOutput] = useState('')
  const { CATEGORIES } = useCategories()
  const dispatch = useAppDispatch()
  // const items = useAppSelector(state => state.items)

  // console.log('ITEMS - cadastrado ==> ', items)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaFormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      categories: '',
    },
  })

  console.log('Errors ==> ', errors)

  const createdAdvertise = (data: SchemaFormProps) => {
    console.log({ data })
    setOutput(JSON.stringify(data, null, 2))

    dispatch(createItem(data))
  }

  const optionsCategory = useMemo(() => {
    const data = CATEGORIES.map(props => ({
      id: props.id,
      name: props.name,
    }))

    return data
  }, [CATEGORIES])

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(createdAdvertise)}>
        <InputField errors={errors.title?.message}>
          <input
            {...register('title')}
            type="text"
            placeholder="Nome do produto"
          />
        </InputField>

        <InputField errors={errors.description?.message}>
          <input
            {...register('description')}
            type="text"
            placeholder="Descrição do produto"
          />
        </InputField>

        <InputField errors={errors.photoUrl?.message}>
          <input
            {...register('photoUrl')}
            type="text"
            placeholder="URL da imagem do produto"
          />
        </InputField>

        <InputField errors={errors.price?.message}>
          <input
            {...register('price', {
              required: 'Este campo é obrigatório',
              min: {
                value: 1,
                message: 'O preço deve ser maior que 1',
              },
              valueAsNumber: true,
            })}
            type="number"
            placeholder="Preço do produto"
            min={0}
          />
        </InputField>

        <SelectField errors={errors.categories?.message}>
          <select {...register('categories')}>
            <Options
              label="Selecione uma categoria"
              options={optionsCategory}
            />
          </select>
        </SelectField>

        <div className={styles['form-action']}>
          <Button type="submit" props={{ label: 'Cadastrar produto' }} />
        </div>
      </form>

      <pre
        style={{
          margin: '2rem auto',
          paddingInline: '2rem',
          display: 'flex',
          alignItems: 'center',
          fontSize: '2rem',
        }}
      >
        {output}
      </pre>
    </>
  )
}
