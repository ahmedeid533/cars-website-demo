export interface Banner {
  id: number
  title: string
  banner_type: string
  banner_url: string | null
  image_url: string
  resource_type: string
}

export interface CarBrand {
  id: number
  name: {
    en: string
    ar: string
  }
}

export interface CarModelBrand extends CarBrand {
  brand_id: number
}

export interface CarModelYear {
  id: number
  year: number
  model_id: number
}

export interface Logo {
  id: number
  brand_name: string
  image_url: string
}

export interface BannerFooter {
  id: number
  title: string
  banner_type: string
  banner_url: string
  image_url: string
  resource_type: string
}

export interface Category {
  id: number
  name: {
    en: string
    ar: string
  }
  slug: string
	image_url: string
	parent_category?: {
		id: number
	}

}
export interface SubCategory extends Category {
  appearance_type: string
}

export interface SubCategoryOptionValue {
  id: number;
  value: {
    en: string;
    ar: string;
  };
  priority: number;
}

export interface SubCategoryOption {
  id: number;
  name: {
    en: string;
    ar: string;
  };
  type: string;
  is_required: boolean;
  is_filterable: boolean;
  priority: number;
  values: SubCategoryOptionValue[];
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string; // Add more statuses if needed
}

export interface AuthResponse {
  message: string;
  customer?: Customer;
  token?: string;
  status?: string,
  errors?: {
    [key: string]: string[]; 
  };
}


interface CarModel {
  id: number;
  name: {
    en: string;
    ar: string;
  };
  brand_id: number;
}

interface ModelYear {
  id: number;
  year: number;
  model_id: number;
}

export interface CustomerVehicle {
  id: number;
  customer_id: number;
  is_primary: boolean;
  notes: string | null;
  car_brand: CarBrand;
  car_model: CarModel;
  model_year: ModelYear;
  created_at: string;
  updated_at: string;
}

export interface CustomerVehicleRequest {
  car_brand_id: string;
  car_model_id: string;
  model_year_id: string;
}