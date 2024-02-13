import instance from '@/config/api'

const cardsService = {
  getByUserId: async (userId: number) => {
    const response = await instance.get(`/cards?userId=${userId}`)

    return response.data
  },
}

export default cardsService
