import instance from '@/config/api'

const itemsService = {
  get: async () => {
    const response = await instance.get('/items')

    return response.data
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getItemsByCategory: async (categoryId: any) => {
    const response = await instance.get(`/items?category=${categoryId}`)

    return response.data
  },
}

export default itemsService
