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
