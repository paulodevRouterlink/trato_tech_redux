import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(3).max(20).nonempty('fsdf'),
  email: z.string().email('fdsf'),
  price: z
    .number()
    .min(0)
    .refine(value => value > 0, {
      message: 'Price must be a positive number',
      path: ['price'],
    }),
})

type FormValues = z.infer<typeof schema>

const App: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = handleSubmit((data: FormValues) => {
    console.log(data)
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label>Email</label>
          <input {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Price</label>
          <input type="number" {...register('price')} />
          {errors.price && <span>{errors.price.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
