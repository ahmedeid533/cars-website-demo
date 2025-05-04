import { initialValues } from "@/forms/login/initialValues";
import { AuthResponse } from "@/types";
import { apiClient } from "@/util/axois";

export const login = async (data: typeof initialValues): Promise<AuthResponse | undefined>  => {
   
    try {
      const response = await apiClient().post('/customers/login', data);
      console.log("response login==> ", response);
      return response.data; 
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      throw error.response?.data
    }
  };