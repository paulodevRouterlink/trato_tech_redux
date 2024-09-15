import { CardsProps } from '@/components/types'
import instance from '@/config/api'

const cardsService = {
  getByUserId: async (userId: number) => {
    const response = await instance.get<CardsProps[]>(`/cards?userId=${userId}`)

    return response.data
  },
}

export default cardsService
