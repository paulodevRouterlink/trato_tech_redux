import { ItemProps } from '@/components/types'
import instance from '@/config/api'

const itemsService = {
  get: async () => {
    const response = await instance.get<ItemProps[]>('/items')

    return response.data
  },
  getItemsByCategory: async (categoryId: string) => {
    const response = await instance.get<ItemProps[]>(
      `/items?category=${categoryId}`,
    )

    return response.data
  },
}

export default itemsService
