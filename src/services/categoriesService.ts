import instance from '@/config/api'

const categoriesService = {
  get: async () => {
    const response = await instance.get('/categories')

    return response.data
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getOneCategory: async (categoryId: any) => {
    const response = await instance.get(`/categories/${categoryId}`)

    return response.data
  },
}

export default categoriesService
