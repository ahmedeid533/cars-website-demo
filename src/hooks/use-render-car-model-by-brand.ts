import { getCarModel } from '@/libs/get-car-Model'
import { CarModelBrand } from '@/types'
import { useEffect, useState } from 'react'

const useRenderCarModelByBrand = (carBrandValue: number) => {
  const [carModelState, setCarModelState] = useState<CarModelBrand[]>([])
  const [carModelValue, setCarModelValue] = useState<number>(NaN)

  const handleCarModelChange = (value: number) => {
    setCarModelValue(value)
  }
  useEffect(() => {
    setCarModelValue(NaN)
    setCarModelState([])
    if ((carBrandValue)) {
      const fetchCarModels = async () => {
        const response = (await getCarModel(carBrandValue||3)) as CarModelBrand[]
       
        setCarModelState(response)
      }
      fetchCarModels()
    }
  }, [carBrandValue])

  return { carModelState, carModelValue, handleCarModelChange }
}

export default useRenderCarModelByBrand
