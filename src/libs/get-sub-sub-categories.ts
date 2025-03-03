import { SubCategory } from '@/types'
import { apiClient } from '@/util/axois'

export const getSub_subCategories = async (
  category_id: number
): Promise<SubCategory[] | undefined> => {
  try {
    const response = await apiClient().get(
      `/categories/sub-subcategories/${category_id}`
    )
    return response.data.data
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message)
  }
}
