import React from 'react'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number | string;
}

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index } = props;
    return (
        <div role="tabpanel" hidden={value !== index} className='custom-container1'>
            {
                value === index && children
            }
        </div>
    );
}

export default CustomTabPanel