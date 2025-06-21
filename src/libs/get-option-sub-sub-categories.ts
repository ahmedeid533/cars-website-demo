import {SubCategoryOption} from '@/types'
import {apiClient} from '@/util/axois'

export const getOptionSubSubCategories = async (sub_sub_category_id : number) : Promise < SubCategoryOption[] | undefined > => {
	try {
		const response = await apiClient().get(`/categories/sub-subcategories/${
			sub_sub_category_id
		}/options`)
		return response.data.data
	} catch (error : any) {
		console.error('Error:', error.response ?. data || error.message)
	}
}
