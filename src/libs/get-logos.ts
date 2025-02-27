'use server'
import { Logo } from '@/types'
import { apiClient } from '@/util/axois'

export const getLogos = async (): Promise<Logo[] | undefined> => {
  try {
    const response = await apiClient().get('/logos')
    return response.data.data
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message)
  }
}
