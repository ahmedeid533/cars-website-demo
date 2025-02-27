import { CarModelBrand } from '@/types'
import { apiClient } from '@/util/axois'

export const getCarModel = async (
  brand_id: number
): Promise<CarModelBrand[] | undefined> => {
  try {
    const response = await apiClient().get(`/cars/models?brand_id=${brand_id}`)
    return response.data.data
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message)
  }
}
