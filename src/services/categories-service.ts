import instance from '@/config/api'

const categoriesService = {
  get: async () => {
    const response = await instance.get('/categories')

    return response.data
  },
  getOneCategory: async (categoryId: string) => {
    const response = await instance.get(`/categories/${categoryId}`)

    return response.data
  },
}

export default categoriesService
