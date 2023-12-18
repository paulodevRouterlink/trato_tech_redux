import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import * as Form from './Inputs'
import { Button } from '@/components/Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(4, { message: 'Digite o nome do produto' }),
  age: z.string().min(1, { message: 'Por favor informe um preço!' }),
})

type SchemaProps = z.infer<typeof schema>

export const FormTeste = () => {
  const [output, setOutput] = useState('')

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      age: '',
    },
  })

  console.log('  ==> ', errors)

  const onSubmit: SubmitHandler<SchemaProps> = data => {
    console.log({ data })
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          margin: '2rem auto',
          maxWidth: '990px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Form.Input
              {...field}
              type="text"
              placeholder="Name"
              error={errors.name?.message}
            />
          )}
        />
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <Form.Input
              {...field}
              type="number"
              placeholder="Age"
              error={errors.age?.message}
            />
          )}
        />

        <Button type="submit" props={{ label: 'submit' }} />
      </form>

      <pre style={{ fontSize: '2.2rem' }}>{output}</pre>
    </>
  )
}
