"use client"
import React from 'react'
import Select, { SingleValueProps, Props as SelectProps } from 'react-select'

interface Option {
    value: string;
    label: string;
}

interface SortServicesProps extends SelectProps<Option> {
    label?: string;
}

const options: Option[] = [
    { value: 'option1', label: 'option1' },
    { value: 'option2', label: 'option2' },
    { value: 'option3', label: 'option3' }
]

const customStyles = {
    control: (provided: any) => ({
        ...provided,
        padding: "10px 5px"
    }),
    valueContainer: (provided: any) => ({
        ...provided,
        display: 'flex',
    }),

};

const defaultValue = options[0];

const CustomSingleValue: React.FC<SingleValueProps<Option> & { label: string }> = ({ children, label }) => (
    <div className="css-1dimb5e-singleValue flex flex-col justify-start items-start">
        <span className='text-custom-black font-bold'>{label}</span>
        <span className='text-[#828282] w-[100px] font-bold'>{children}</span>
    </div>
);

const SortServices: React.FC<SortServicesProps> = ({ label = 'Sort by', ...props }) => (
    <Select
        options={options}
        components={{ SingleValue: (singleValueProps) => <CustomSingleValue {...singleValueProps} label={label} /> }}
        isSearchable={false}
        defaultValue={defaultValue}
        styles={customStyles}
        {...props}
    />
);

export default SortServices;
