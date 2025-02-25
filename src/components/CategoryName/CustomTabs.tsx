"use client"
import React from 'react'
import { Tab, Tabs } from '@mui/material';
import { tabsAndItems } from '@/mocks/tabsAndItems'

type props = {
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
}
const CustomTabs = ({ value, setValue }: props) => {
    return (
        <div className="custom-container1">
            <div className='w-full flex justify-center items-center overflow-hidden'>

                <div className='custom-overlay-scrollbar w-screen overflow-x-scroll lg:overflow-x-auto overflow-y-hidden'>
                    <Tabs
                        value={value}
                        onChange={(_, index) => setValue(index)}
                        TabIndicatorProps={{
                            sx: {
                                color: "black",
                                backgroundColor: 'black',
                                width: "auto"
                            },
                        }}
                        sx={{
                            '.Mui-selected': {
                                color: "black",
                                borderBottom: '2px solid black',
                            },
                            display: { xs: '-webkit-inline-box', lg: "block" },
                            margin: 0
                        }}
                    >
                        {
                            tabsAndItems.map((tab) => (
                                <Tab
                                    key={tab.id}
                                    label={tab.tab}
                                    className='text-black flex-1 p-0 font-bold text-xs lg:text-lg capitalize min-w-[120px] min-h-[35px]'
                                    sx={{
                                        '&.Mui-selected': {
                                            color: 'black',
                                        },
                                    }}
                                />
                            ))
                        }
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default CustomTabs