import { useEffect, useMemo, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/Button'
import { useCategories } from '@/hooks/useCategories'
import { useAppDispatch } from '@/store/hooks/useRedux'
import { createItem, fetchItems, updateItem } from '@/store/reducers/items'
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
  const { item } = useEditItems()
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const params = useParams()
  const id = Number(params.id)
  const path = pathname === `/category/${item?.category}/item/${params.id}`

  console.log('ID ==> ', id)
  console.log('ITEM id ==> ', item?.id)
  console.log('ITEM ==> ', item)

  useEffect(() => {
    if (path) {
      dispatch(fetchItems())
    }
  }, [dispatch, path])

  const formDefault: SchemaFormProps = {
    title: item?.id === id ? item?.title : '',
    description: item?.id === id ? item?.description : '',
    price: item?.id === id ? item?.price : 0,
    category: item?.id === id ? item?.category : '',
    photoUrl: item?.id === id ? item?.photoUrl : '',
  }

  console.log('FORM ==> ', formDefault)

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
    const id = item?.id
    const dataItem = {
      id: item?.id,
      title: data.title,
      description: data.description,
      price: data.price,
      category: data.category,
      photoUrl: item?.photoUrl,
      favorite: item?.favorite,
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

  const isEditItem = path
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
