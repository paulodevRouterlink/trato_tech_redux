/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from '@/config/api'

const cardsService = {
  getByUserId: async (userID: any) => {
    const response = await instance.get(`/cards?userId=${userID}`)

    return response.data
  },
}

export default cardsService
