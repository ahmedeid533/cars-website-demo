import {CustomerVehicle} from '@/types'
import {apiClient} from '@/util/axois'
import {fstat} from 'fs'

export const get_customer_vehicle = async (token : string) : Promise < CustomerVehicle[] | undefined > => {
	if (token) {
		try {
			const response = await apiClient(token).get('/customer-vehicles')

			// is_primary

			const is_primary_first = (a : CustomerVehicle, b : CustomerVehicle) => {
				if (a.is_primary && !b.is_primary) {
					return -1
				}
				if (!a.is_primary && b.is_primary) {
					return 1
				}
				return 0
			}

			return response.data.data.sort(is_primary_first)
		} catch (error : any) {
			console.error('Error:', await error.response ?. data || error.message)
		}
	} else {
		return []
	}
}
