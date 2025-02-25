import { ListItem, ListItemButton } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type props = {
    link: {
        title: string;
        desc: string;
    }
    toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void
}
const DrawerUserInfoList = ({ link, toggleDrawer }: props) => {
    return (
        <ListItem disablePadding className='mb-3'>
            <Link href={"#"} className='w-full' onClick={toggleDrawer}>
                <ListItemButton className='flex flex-row items-center justify-between w-full'>
                    <div className='flex flex-row items-center gap-3'>
                        <h4 className='text-custom-black' >{link.title}</h4>
                        <h6 className='text-[#525252]' >{link.desc}</h6>
                    </div>
                </ListItemButton>
            </Link>
        </ListItem>
    )
}

export default DrawerUserInfoList
