import { Button, Input, Select } from '@/components/ui'
import { useFormAdvertise } from './useFormAdvertise'
import styles from './form-advertise.module.scss'

export const FormAdvertise = () => {
  const { register, errors, handleSubmit, createdProduct, optionsCategory } =
    useFormAdvertise()

  return (
    <form className={styles.form} onSubmit={handleSubmit(createdProduct)}>
      <Input
        {...register('title')}
        type="text"
        placeholder="Nome do produto"
        errors={errors.title?.message}
      />
      <Input
        {...register('description')}
        type="text"
        placeholder="Descrição do produto"
        errors={errors.description?.message}
      />
      <Input
        {...register('photoUrl')}
        type="text"
        placeholder="URL da imagem do produto"
        errors={errors.photoUrl?.message}
      />
      <Input
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
        errors={errors.price?.message}
      />

      <Select
        {...register('category')}
        options={optionsCategory}
        errors={errors.category?.message}
      />

      <div className={styles['form-action']}>
        <Button type="submit" text="Cadastrar produto" />
      </div>
    </form>
  )
}
