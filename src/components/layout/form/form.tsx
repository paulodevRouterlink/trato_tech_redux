// import { useEffect, useMemo } from 'react'
// import { useLocation, useParams } from 'react-router-dom'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useCategories } from '@/hooks/useCategories'
// import { useAppDispatch } from '@/store/hooks/useRedux'
// import { createItem, fetchItems, updateItem } from '@/store/reducers/items'
// import { useProducts } from '@/hooks/useProducts'
// import { SchemaFormProps, schemaForm } from '@/schemas/schema-form'
// import { Button, Input, Select } from '@/components/ui'
// import styles from './form.module.scss'

// export const Form = () => {
//   const { CATEGORIES } = useCategories()
//   const { item } = useProducts()
//   const { pathname } = useLocation()
//   const dispatch = useAppDispatch()
//   const params = useParams()
//   const id = Number(params.id)
//   const path = pathname === `/category/${item?.category}/item/${params.id}`

//   useEffect(() => {
//     if (path) {
//       dispatch(fetchItems())
//     }
//   }, [dispatch, path])

//   const formDefault: SchemaFormProps = {
//     title: item?.id === id ? item?.title : '',
//     description: item?.id === id ? item?.description : '',
//     price: item?.id === id ? item?.price : 0,
//     category: item?.id === id ? item?.category : '',
//     photoUrl: item?.id === id ? item?.photoUrl : '',
//   }

//   const {
//     setValue,
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SchemaFormProps>({
//     resolver: zodResolver(schemaForm),
//     defaultValues: {
//       title: formDefault.title,
//       description: formDefault.description,
//       price: formDefault.price,
//       category: formDefault.category,
//       photoUrl: formDefault.photoUrl,
//     },
//   })

//   useEffect(() => {
//     const formDefault: SchemaFormProps = {
//       title: id === product?.id ? product?.title : '',
//       description: id === product?.id ? product?.description : '',
//       price: id === product?.id ? product?.price : 0,
//       category: id === product?.id ? product?.category : '',
//       photoUrl: id === product?.id ? product?.photoUrl : '',
//     }

//     setValue('title', formDefault.title)
//     setValue('description', formDefault.description)
//     setValue('price', formDefault.price)
//     setValue('photoUrl', formDefault.photoUrl)
//     setValue('category', formDefault.category)
//   }, [setValue, id, product])

//   const createdProduct = (data: SchemaFormProps) => {
//     console.log({ data })
//     dispatch(createItem(data))
//   }

//   const updatedProduct = (data: SchemaFormProps) => {
//     const id = item?.id
//     const dataItem = {
//       id: item?.id,
//       title: data.title,
//       description: data.description,
//       price: data.price,
//       category: data.category,
//       photoUrl: item?.photoUrl,
//       favorite: item?.favorite,
//     }

//     console.log('data updated ==> ', dataItem)
//     dispatch(updateItem({ id, item: dataItem }))
//   }

//   const optionsCategory = useMemo(() => {
//     const data = CATEGORIES.map((props) => ({
//       id: props.id,
//       name: props.name,
//     }))

//     return data
//   }, [CATEGORIES])

//   const isEditItem = path
//     ? handleSubmit(updatedProduct)
//     : handleSubmit(createdProduct)

//   return (
//     <form className={styles.form} onSubmit={isEditItem}>
//       <Input
//         {...register('title')}
//         type="text"
//         placeholder="Nome do produto"
//         errors={errors.title?.message}
//       />
//       <Input
//         {...register('description')}
//         type="text"
//         placeholder="Descrição do produto"
//         errors={errors.description?.message}
//       />
//       <Input
//         {...register('photoUrl')}
//         type="text"
//         placeholder="URL da imagem do produto"
//         errors={errors.photoUrl?.message}
//       />
//       <Input
//         {...register('price', {
//           required: 'Este campo é obrigatório',
//           min: {
//             value: 1,
//             message: 'O preço deve ser maior que 1',
//           },
//           valueAsNumber: true,
//         })}
//         type="number"
//         placeholder="Preço do produto"
//         min={0}
//         errors={errors.price?.message}
//       />

//       <Select
//         {...register('category')}
//         options={optionsCategory}
//         errors={errors.category?.message}
//       />

//       <div className={styles['form-action']}>
//         <Button type="submit" props={{ label: 'Cadastrar produto' }} />
//       </div>
//     </form>
//   )
// }
