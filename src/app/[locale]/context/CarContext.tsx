import { delete_vehicle } from '@/action/customer_vehicle/delete'
import { add_vehicle } from '@/action/customer_vehicle/post'
import { set_primary } from '@/action/customer_vehicle/set_primary'
import { get_customer_vehicle } from '@/libs/get_customer_vehicle'
import { CustomerVehicle, CustomerVehicleRequest } from '@/types'
import displayErrorMessages from '@/util/displayErrorMessages'
import { makeNotification } from '@/util/makeNotification'
import { useLocale } from 'next-intl'
import React, { createContext, useEffect, useState } from 'react'
import Cookies from 'universal-cookie'

interface CarsContext {
  cars: CustomerVehicle[]
  addCar: (car: CustomerVehicleRequest) => void
  deleteCarById: (id: number) => void
  setPrimaryCar: (id: number) => void
  // deleteAllCars: () => void;
}

export const CarContext = createContext<CarsContext | null>(null)

const CarContextProvider = ({ children }: { children: React.ReactNode }) => {
  const cookie = new Cookies()
  const token = cookie.get('token')
  const [cars, setCars] = useState<CustomerVehicle[]>([])
  const locale = useLocale()

  useEffect(() => {
    const fetchData = async () => {
			if (!token || token === '') return
			try {
				const res = (await get_customer_vehicle(token)) as CustomerVehicle[]
				if (res.length > 0) {
					setCars(res)
				}
			} catch (error) {
				console.error('Error fetching customer vehicles:', error)
			}
    }
    fetchData()
  }, [])

  const addCar = async (car: CustomerVehicleRequest) => {
    if (!token || token === '') return
    await add_vehicle(token, car)
      .then(res => {
        makeNotification(
          'success',
          locale === 'en'
            ? 'New car added to your search history'
            : 'تمت إضافة سيارة جديدة إلى سجل بحثك'
        )
        setCars(prev => [res as CustomerVehicle, ...prev])
      })
      .catch(err => {
        displayErrorMessages(err?.errors as Record<string, string[]>)
      })
  }

  const deleteCarById = async (id: number) => {
    if (!token || token === '') return
    await delete_vehicle(token, id)
      .then(() => {
        setCars(prev => prev.filter(car => car.id !== id))
        makeNotification(
          'success',
          locale === 'en'
            ? `Car number ${id} is deleted from your search history`
            : `تم حذف السيارة رقم ${id} من سجل بحثك`
        )
      })
      .catch(err => {
        displayErrorMessages(err?.errors as Record<string, string[]>)
      })
  }

  // const deleteAllCars = () => setCars([]);

  const setPrimaryCar = async (id: number) => {
    if (!token || token === '') return
    await set_primary(token, id)
      .then(res => {
        setCars(prev => [
          res as CustomerVehicle,
          ...prev.filter(car => car.id !== id)
        ])
        makeNotification(
          'success',
          locale === 'en'
            ? `Car number ${id} is your primary car`
            : `السيارة رقم ${id} هي سيارتك الأساسية`
        )
      })
      .catch(err => {
        displayErrorMessages(err?.errors as Record<string, string[]>)
      })
  }

  return (
    <CarContext.Provider value={{ cars, addCar, deleteCarById, setPrimaryCar }}>
      {children}
    </CarContext.Provider>
  )
}

export default CarContextProvider
