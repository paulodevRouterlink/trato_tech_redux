/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from '@/config/api'

type FlagsIDsProps = Array<number>

const flagsService = {
  getByIds: async (flagsIds: FlagsIDsProps): Promise<any> => {
    const query = new URLSearchParams()
    flagsIds.forEach(id => {
      query.append('id', String(id))
    })
    const response = await instance.get(`/flags?${query.toString()}`)

    return response.data
  },
}

export default flagsService
