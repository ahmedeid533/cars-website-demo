import axios from 'axios'

export const apiClient = (token? : string) => {
	return axios.create({
		baseURL: `${process.env.NEXT_PUBLIC_API}/api`,
		headers: {
			'Content-Type': 'application/json',
// 'Access-Control-Allow-Origin' : '*',
			Accept: 'application/json',
			...(token && {
				Authorization: `Bearer ${token}`
			})
		},
		withCredentials: true
	})
}

// EXAMPLES
// const fetchPublicData = async () => {
// try {
//     const response = await apiClient().get('/public-endpoint')
//     console.log('Public Data:', response.data)
// } catch (error) {
//     console.error('Error:', error.response?.data || error.message)
// }
// }

// const fetchPrivateData = async () => {
// const token = 'YOUR_ACCESS_TOKEN' // Replace with actual token

// try {
//     const response = await apiClient(token).get('/private-endpoint')
//     console.log('Private Data:', response.data)
// } catch (error) {
//     console.error('Error:', error.response?.data || error.message)
// }
// }

// ✅ EXAMPLES
// Public POST request
// postData('/public-endpoint', { name: 'John', age: 30 })
// .then(response => console.log('Public Response:', response))
// .catch(error => console.error('Public Error:', error));

// Private POST request with Token
// const token = 'YOUR_ACCESS_TOKEN';
// postData('/private-endpoint', { key: 'value' }, token)
// .then(response => console.log('Private Response:', response))
// .catch(error => console.error('Private Error:', error));
