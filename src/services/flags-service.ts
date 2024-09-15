import { FlagsProps } from '@/components/types/flags-props'
import instance from '@/config/api'

const flagsService = {
  getByIds: async (flagsIds: number[]) => {
    const query = new URLSearchParams()
    flagsIds.forEach((id) => {
      query.append('id', String(id))
    })
    const response = await instance.get<FlagsProps>(
      `/flags?${query.toString()}`,
    )

    return response.data
  },
}

export default flagsService
