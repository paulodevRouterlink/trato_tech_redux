import { UserProps } from '@/components/types/user-props'
import instance from '@/config/api'

const userService = {
  getById: async (id: number) => {
    const response = await instance.get<UserProps>(`/user/${id}`)

    return response.data
  },
}

export default userService
