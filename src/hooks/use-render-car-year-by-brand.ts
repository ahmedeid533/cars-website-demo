import { getCarYear } from '@/libs/get-car-year'
import {  CarModelYear } from '@/types'
import { useEffect, useState } from 'react'

const useRenderCarYearByBrand = (carModelValue: number) => {
  const [carYearState, setCarYearState] = useState<CarModelYear[]>([])
  const [carYearValue, setCarYearValue] = useState<number>(NaN)

  const handleCarYearChange = (value: number) => {
    setCarYearValue(value)
  }
  useEffect(() => {
    setCarYearValue(NaN)
    setCarYearState([])
    if ((carModelValue)) {
      const fetchCarYears = async () => {
        const response = (await getCarYear(carModelValue)) as CarModelYear[]
     
        setCarYearState(response)
      }
      fetchCarYears()
    }
  }, [carModelValue])

  return { carYearState, carYearValue,handleCarYearChange }
}

export default useRenderCarYearByBrand
