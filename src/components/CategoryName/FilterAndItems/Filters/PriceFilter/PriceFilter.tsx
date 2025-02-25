"use client"
import { useCallback, useState } from 'react';
import './style.css'

const PriceFilter = () => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    const handleMinChange = useCallback((event: any) => {
        const value = Math.min(Number(event.target.value), maxValue - 1);
        setMinValue(value);
    }, [maxValue]);

    const handleMaxChange = useCallback((event: any) => {
        const value = Math.max(Number(event.target.value), minValue + 1);
        setMaxValue(value);
    }, [minValue]);

    return (
        <div className='flex flex-col gap-7'>
            <h2 className='font-bold text-lg '>Price</h2>
            <div className='flex items-center gap-3'>
                <button className='text-custom-black border border-custom-black rounded p-4'>$ Min</button>
                <button className='text-custom-black border border-custom-black rounded p-4'>$ Max</button>
                <button className='text-white border border-custom-blue bg-custom-blue rounded p-4'>Go</button>
            </div>
            <div className="double_range_slider">
                <input
                    type="range"
                    className="min"
                    min="0"
                    max="100"
                    value={minValue}
                    step="1"
                    onChange={handleMinChange}
                />
                <input
                    type="range"
                    className="max"
                    min="0"
                    max="100"
                    value={maxValue}
                    step="1"
                    onChange={handleMaxChange}
                />
            </div>
        </div>
    );
}

export default PriceFilter
