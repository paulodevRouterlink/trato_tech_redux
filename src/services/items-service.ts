import instance from '@/config/api'

const itemsService = {
  get: async () => {
    const response = await instance.get('/items')

    return response.data
  },
  getItemsByCategory: async (categoryId: string) => {
    const response = await instance.get(`/items?category=${categoryId}`)

    return response.data
  },
}

export default itemsService
