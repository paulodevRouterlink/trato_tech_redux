import { CategoryProps } from '@/components/types'
import instance from '@/config/api'

const categoriesService = {
  get: async () => {
    const response = await instance.get<CategoryProps[]>('/categories')

    return response.data
  },
  getOneCategory: async (categoryId: string) => {
    const response = await instance.get<CategoryProps>(
      `/categories/${categoryId}`,
    )

    return response.data
  },
}

export default categoriesService
