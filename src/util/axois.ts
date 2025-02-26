import axios from 'axios'

export const apiClient = (token?: string) => {
  return axios.create({
    baseURL: 'https://3arbitk.com/api',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }) // Attach token if provided
    }
  })
}

// EXAMPLES
// const fetchPublicData = async () => {
//   try {
//     const response = await apiClient().get('/public-endpoint')
//     console.log('Public Data:', response.data)
//   } catch (error) {
//     console.error('Error:', error.response?.data || error.message)
//   }
// }

// const fetchPrivateData = async () => {
//   const token = 'YOUR_ACCESS_TOKEN' // Replace with actual token

//   try {
//     const response = await apiClient(token).get('/private-endpoint')
//     console.log('Private Data:', response.data)
//   } catch (error) {
//     console.error('Error:', error.response?.data || error.message)
//   }
// }
