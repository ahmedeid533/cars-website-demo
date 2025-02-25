"use client"
import React from 'react'
import Select, { SingleValueProps } from 'react-select'
import { ValueContainer } from 'react-select/animated';
interface Option {
    value: string;
    label: string;
}
const options: Option[] = [
    { value: 'recomended', label: 'recomended' },
    { value: 'latest', label: 'latest' },
    { value: 'chepest', label: 'chepest' }
]
const customStyles = {
    control: (provided: any) => ({
        ...provided,
        padding: "10px 5px",
        border: "1px solid #333"
    }),
    valueContainer: (provided: any) => ({
        ...provided,
        display: 'flex'
    })
};
const defaultValue = options[0]

const CustomSingleValue: React.FC<SingleValueProps<Option>> = ({ children }) => (
    <div className="css-1dimb5e-singleValue flex flex-col justify-start items-start">
        <span className='text-[#828282]'>Sort by</span>
        <span className='text-[#333]'>{children}</span>
    </div>
);
const SortServices = () => (
    <Select
        options={options}
        components={{ SingleValue: CustomSingleValue }}
        isSearchable={false}
        defaultValue={defaultValue}
        styles={customStyles}
    />
)

export default SortServices