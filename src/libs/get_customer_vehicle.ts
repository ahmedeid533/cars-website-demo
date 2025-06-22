import { CustomerVehicle } from '@/types'
import { apiClient } from '@/util/axois'
import { fstat } from 'fs'

export const get_customer_vehicle = async (token: string): Promise<
  CustomerVehicle[] | undefined
> => {
	if (token) {
    try {
      const response = await apiClient(token).get('/customer-vehicles')
      return response.data.data
    } catch (error: any) {
			console.error('Error:', await error.response?.data || error.message)
    }
  } else {
    return []
  }
}
