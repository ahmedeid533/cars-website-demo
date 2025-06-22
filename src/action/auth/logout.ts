import {apiClient} from "@/util/axois";

export const logout = async (token : string) : Promise < {
	message: string
} | undefined > => {
	try {
		const response = await apiClient(token).post('/customers/logout');
		return response.data;
	} catch (error : any) {
		console.error("Error:", error.response ?. data || error.message);
		throw error.response ?. data
	}
};
