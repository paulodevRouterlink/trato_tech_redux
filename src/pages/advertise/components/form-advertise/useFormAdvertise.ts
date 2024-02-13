import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCategories } from '@/hooks/useCategories'
import { SchemaFormProps, schemaForm } from '@/schemas/schema-form'
import { useAppDispatch } from '@/store/hooks/useRedux'
import { createItem } from '@/store/reducers/items'

export const useFormAdvertise = () => {
  const { CATEGORIES } = useCategories()
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
    console.log({ data })
    dispatch(createItem(data))
  }

  const optionsCategory = useMemo(() => {
    const data = CATEGORIES.map((props) => ({
      id: props.id,
      name: props.name,
    }))

    return data
  }, [CATEGORIES])

  return {
    register,
    handleSubmit,
    createdProduct,
    errors,
    optionsCategory,
  }
}
