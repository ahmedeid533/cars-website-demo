import { CarModelYear } from '@/types'
import { apiClient } from '@/util/axois'

export const getCarYear = async (
  model_id: number
): Promise<CarModelYear[] | undefined> => {
  try {
    const response = await apiClient().get(`/cars/years?model_id=${model_id}`)
    return response.data.data
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message)
  }
}
