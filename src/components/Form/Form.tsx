import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/Button'
import { useCategories } from '@/hooks/useCategories'
import { useAppDispatch } from '@/store/hooks/useRedux'
import { createItem, updateItem } from '@/store/reducers/items'
import { useEditItems } from '@/hooks/useEditItems'
import styles from './styles.module.scss'
import { InputField } from '../InputField'
import { SelectField } from '../SelectField'
import { Options } from '../Options'

const schema = z.object({
  title: z.string().min(4, 'Digite o nome do produto'),
  description: z.string().min(15, 'Digite a descrição do produto'),
  photoUrl: z.string().min(2, 'Digite uma URL válida'),
  category: z.string().nonempty('Selecione uma categoria válida'),
  price: z
    .number({
      required_error: 'Digite o preço',
      invalid_type_error: 'Digite o preço do produto',
    })
    .positive('Por favor digite um preço válido'),
})

type SchemaFormProps = z.infer<typeof schema>

export const Form = () => {
  const [output, setOutput] = useState('')
  const { CATEGORIES } = useCategories()
  const dispatch = useAppDispatch()
  const product = useEditItems()
  const params = useParams()

  const formDefault: SchemaFormProps = {
    title: params.id === product?.id ? product?.title : '',
    description: params.id === product?.id ? product?.description : '',
    price: params.id === product?.id ? product?.price : 0,
    category: params.id === product?.id ? product?.category : '',
    photoUrl: params.id === product?.id ? product?.photoUrl : '',
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaFormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: formDefault.title,
      description: formDefault.description,
      price: formDefault.price,
      category: formDefault.category,
      photoUrl: formDefault.photoUrl,
    },
  })

  const createdProduct = (data: SchemaFormProps) => {
    console.log({ data })
    setOutput(JSON.stringify(data, null, 2))
    dispatch(createItem(data))
  }

  const updatedProduct = (data: SchemaFormProps) => {
    const id = product.id
    const dataItem = {
      id: product.id,
      title: data.title,
      description: data.description,
      price: data.price,
      category: data.category,
      photoUrl: product.photoUrl,
      favorite: product.favorite,
    }

    console.log('data updated ==> ', dataItem)
    setOutput(JSON.stringify(dataItem, null, 2))
    dispatch(updateItem({ id, item: dataItem }))
  }

  const optionsCategory = useMemo(() => {
    const data = CATEGORIES.map(props => ({
      id: props.id,
      name: props.name,
    }))

    return data
  }, [CATEGORIES])

  const isEditItem = params.id
    ? handleSubmit(updatedProduct)
    : handleSubmit(createdProduct)

  return (
    <>
      <form className={styles.form} onSubmit={isEditItem}>
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
            disabled={!!formDefault.photoUrl}
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

        <SelectField errors={errors.category?.message}>
          <select {...register('category')}>
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
