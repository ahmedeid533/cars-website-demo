import React, { createContext, useEffect, useState } from 'react';

interface CarsStateManagement {
    id: number;
    name: string;
    year: string;
    series: string;
}

interface CarsContext {
    cars: CarsStateManagement[];
    addCar: (car: CarsStateManagement) => void;
    deleteCarById: (id: number) => void;
    deleteAllCars: () => void;
    updateCarById: (id: number) => void;
}

export const CarContext = createContext<CarsContext | null>(null);

const CarContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cars, setCars] = useState<CarsStateManagement[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedCars = localStorage.getItem('cars');
            if (savedCars) {
                setCars(JSON.parse(savedCars));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cars', JSON.stringify(cars));
        }
    }, [cars]);

    const addCar = (car: CarsStateManagement) => {
        setCars(prev => [car, ...prev]);
    };

    const deleteCarById = (id: number) => {
        setCars(prev => prev.filter(car => car.id !== id));
    };

    const deleteAllCars = () => setCars([]);

    const updateCarById = (id: number) => {
        const visitedCar = cars.find(car => car.id === id);
        if (visitedCar) {
            setCars(prev => [visitedCar, ...prev.filter(car => car.id !== id)]);
        }
    };

    return (
        <CarContext.Provider value={{ cars, addCar, deleteCarById, deleteAllCars, updateCarById }}>
            {children}
        </CarContext.Provider>
    );
};

export default CarContextProvider;
