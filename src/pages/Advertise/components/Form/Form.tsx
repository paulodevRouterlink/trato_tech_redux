import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAppSelector } from '@/store/hooks/useRedux'
import { Button } from '@/components/Button'
import { SelectField } from '../SelectField'
import { InputField } from '../InputField'
import { Options } from '../Options'

import styles from './styles.module.scss'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(4, 'Digite o nome do produto'),
  description: z.string().min(15, 'Digite a descrição do produto'),
  image: z.string().url('Digite uma URL válida'),
  categories: z.string().nonempty('Selecione uma categoria válida'),
  price: z.string().min(1, { message: 'Por favor digite um preço válido' }),
})

type SchemaFormProps = z.infer<typeof schema>

export const Form = () => {
  const [output, setOutput] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
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
    setOutput(JSON.stringify(data, null, 2))
  }

  const categories = useAppSelector(state =>
    state.categories.map(({ id, name }) => ({ id, name }))
  )

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(createdAdvertise)}>
        <InputField errors={errors.name?.message}>
          <input
            {...register('name')}
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

        <InputField errors={errors.image?.message}>
          <input
            {...register('image')}
            type="text"
            placeholder="URL da imagem do produto"
          />
        </InputField>

        <InputField errors={errors.price?.message}>
          <input
            {...register('price')}
            type="number"
            placeholder="Preço do produto"
          />
        </InputField>

        <SelectField errors={errors.categories?.message}>
          <select {...register('categories')}>
            <Options label="Selecione uma categoria" options={categories} />
          </select>
        </SelectField>

        <div className={styles['form-action']}>
          <Button type="submit" props={{ label: 'Cadastrar produto' }} />
        </div>
      </form>

      <pre
        style={{
          margin: '2rem auto',
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
