/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from '@/config/api'

const flagsService = {
  getById: async (flagsIds: any[]) => {
    const query = new URLSearchParams()
    flagsIds.forEach(id => query.append('id', id))
    const response = await instance.get(`/flags/${query.toString()}`)

    return response.data
  },
}

export default flagsService
