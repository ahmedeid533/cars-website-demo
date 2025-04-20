import {Category} from '@/types'
import {apiClient} from '@/util/axois'

export const getCategories = async () : Promise < Category[] | undefined > => {
	try {
		const response = await apiClient().get('/categories')
		return response.data.data
	} catch (error : any) {
		console.error('Error:', error.response ?. data || error.message)
	}
}
