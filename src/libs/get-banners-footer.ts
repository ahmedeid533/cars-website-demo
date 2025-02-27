'use server'
import { BannerFooter } from '@/types'
import { apiClient } from '@/util/axois'

export const getBannersFooter = async (): Promise<BannerFooter[] | undefined> => {
  try {
    const response = await apiClient().get('/footer')
    return response.data.data
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message)
  }
}
