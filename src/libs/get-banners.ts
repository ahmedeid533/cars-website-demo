'use server'
import { Banner } from '@/types'
import { apiClient } from '@/util/axois'

export const getBanners = async (): Promise<Banner[] | undefined> => {
  try {
    const response = await apiClient().get('/banners')
    return response.data.data
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message)
  }
}
