import { FC, InputHTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// InputField.tsx
import './InputField.scss'

const schema = z.object({
  name: z.string().min(5, { message: 'name invalid' }),
  email: z.string().email('email invalid'),
  price: z
    .number({
      required_error: 'Campo preço é obrigatório',
      invalid_type_error: 'Digite um preço válido',
    })
    .min(1, { message: 'price invalid' }),
})

type FormValues = z.infer<typeof schema>

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

const InputField: FC<InputFieldProps> = ({ label, ...props }) => (
  <div className="input-field">
    <label>{label}</label>
    <input {...props} />
  </div>
)

export const Teste: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  console.log('Errors ==> ', errors)

  const onSubmit = handleSubmit((data: FormValues) => {
    console.log('Dados do formulário', { data })
  })

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <InputField label="Username" type="text" {...register('name')} />
        {errors.name?.message && <span>{errors.name.message}</span>}

        <InputField label="Email" type="email" {...register('email')} />
        {errors.email?.message && <span>{errors.email.message} </span>}

        <InputField
          label="Price"
          type="number"
          {...register('price', { valueAsNumber: true })}
        />
        {errors.price?.message && <span>{errors.price.message} </span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
