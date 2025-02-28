import { SubCategory } from '@/types'
import { apiClient } from '@/util/axois'

export const getTopCategories = async (
): Promise<SubCategory[] | undefined> => {
  try {
    const response = await apiClient().get(
      `/categories/top/list`
    )
    return response.data.data
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message)
  }
}
