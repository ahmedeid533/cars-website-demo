import { initialValues } from "@/forms/signup/initialValues";
import { AuthResponse } from "@/types";
import { apiClient} from "@/util/axois";

export const register = async (data: typeof initialValues): Promise<AuthResponse | undefined>  => {
    const responseData = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        password: data.password,
        phone: data.phone,
        date_of_birth: data.dateOfBirth
    }
    try {
      const response = await apiClient().post('/customers/register', responseData);
      return response.data; 
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      throw error.response?.data
    }
  };