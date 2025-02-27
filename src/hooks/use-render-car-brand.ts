import { getCarBrands } from '@/libs/get-car-brands'
import { CarBrand } from '@/types'
import { useEffect, useState } from 'react'

const useRenderCarBrand = () => {
  const [carBrandState, setCarBrandState] = useState<CarBrand[]>([])
  const [carBrandValue, setCarBrandValue] = useState<number>(NaN)
  
  const handleCarBrandChange = (value: number) => {
    setCarBrandValue(value)
  }
  useEffect(() => {
    const fetchCarBrands = async () => {
      const response = (await getCarBrands()) as CarBrand[]
      if (response.length > 0) {
        setCarBrandValue(response[0].id);
      }
      setCarBrandState(response)
    }
    fetchCarBrands()
  }, [])


  return { carBrandState, carBrandValue,handleCarBrandChange }
}

export default useRenderCarBrand
