import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch, useAppSelector } from '@/store/hooks/useRedux'
import { createItem } from '@/store/ducks/items'
import { schemaForm, SchemaFormProps } from './schema-form-advertise'

export const useFormAdvertise = () => {
  const categories = useAppSelector((state) => state.categories)
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaFormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaForm),
  })

  const createdProduct = (data: SchemaFormProps) => {
    dispatch(createItem({ ...data, favorite: false }))
  }

  const optionsCategory = categories.map(({ id, name }) => ({ id, name }))

  return {
    register,
    handleSubmit,
    createdProduct,
    errors,
    optionsCategory,
  }
}
