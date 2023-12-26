import instance from '@/config/api'

const userService = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  buscarPorId: async (id: any) => {
    const resposta = await instance.get(`/user/${id}`)

    return resposta.data
  },
}

export default userService
