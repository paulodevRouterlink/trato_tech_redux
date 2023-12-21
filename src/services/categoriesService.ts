import instance from "@/config/api"

const categoriesService = {
  get: async () => {
    const response = await instance.get('/categories')

    return response.data
  }
}

export default categoriesService