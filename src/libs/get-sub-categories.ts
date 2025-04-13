import {SubCategory} from '@/types'
import {apiClient} from '@/util/axois'


export const getSubCategories = async (category_id : number) : Promise < SubCategory[] | undefined > => {
	try {
		const response = await apiClient().get(`/categories/subcategories/list?category_id=${category_id}`)
		return response.data.subcategories
	} catch (error : any) {
		console.error('Error:', error.response ?. data || error.message)
	}

}
