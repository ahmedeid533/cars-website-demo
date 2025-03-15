import { apiClient } from '@/util/axois'

export const delete_vehicle = async (
  token: string,
  id: number
): Promise<{message: string} | undefined> => {
  try {
    const response = await apiClient(token).delete(`/customer-vehicles/${id}`)
    return response.data.message
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message)
    throw error.response?.data
  }
}
