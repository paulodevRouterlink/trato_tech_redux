import { z } from 'zod'

const schemaForm = z.object({
  title: z.string().min(4, 'Digite o nome do produto'),
  description: z.string().min(15, 'Digite a descrição do produto'),
  photoUrl: z.string().min(2, 'Digite uma URL válida'),
  category: z.string().min(1, { message: 'Selecione uma categoria válida' }),
  price: z
    .number({
      required_error: 'Digite o preço',
      invalid_type_error: 'Digite o preço do produto',
    })
    .positive('Por favor digite um preço válido'),
})

type SchemaFormProps = z.infer<typeof schemaForm>

export { schemaForm }
export type { SchemaFormProps }
