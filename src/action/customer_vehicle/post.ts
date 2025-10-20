import {CustomerVehicle, CustomerVehicleRequest} from '@/types'
import {apiClient} from '@/util/axois'


export const add_vehicle = async (token : string, req : CustomerVehicleRequest) : Promise < CustomerVehicle | undefined > => {
	try {
		const response = await apiClient(token).post('/customer-vehicles', req)

return response.data.data

} catch (error : any) {
console.error('Error:', error.response ?. data || error.message)
throw error.response ?. data}

}
