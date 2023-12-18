import React from 'react'
import { useForm, Controller } from 'react-hook-form'

type FormData = {
  firstName: string
}

const YourFormComponent: React.FC = () => {
  const { control, handleSubmit, setValue } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data) // Aqui você pode realizar ações com os dados do formulário
  }

  const updateInputValue = () => {
    setValue('firstName', 'Novo Valor') // Atualiza o valor do campo 'firstName' para 'Novo Valor'
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue="" // Valor inicial do campo
        render={({ field }) => <input {...field} />}
      />
      <button type="button" onClick={updateInputValue}>
        Atualizar Valor
      </button>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default YourFormComponent
