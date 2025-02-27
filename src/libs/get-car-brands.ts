import { CarBrand } from '@/types'
import { apiClient } from '@/util/axois'

export const getCarBrands = async (): Promise<CarBrand[] | undefined> => {
  try {
    const response = await apiClient().get('/cars/brands')
    return response.data.data
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message)
  }
}
