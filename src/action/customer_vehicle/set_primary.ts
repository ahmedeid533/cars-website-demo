import { CustomerVehicle } from '@/types'
import { apiClient } from '@/util/axois'

export const set_primary = async (
  token: string,
  id: number
): Promise<CustomerVehicle | undefined> => {
  try {
    const response = await apiClient(token).post(`customer-vehicles/${id}/set-primary`)
    return response.data.data
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message)
    throw error.response?.data
  }
}
