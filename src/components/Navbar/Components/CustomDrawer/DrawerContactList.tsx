import { ListItem, ListItemButton } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type props = {
    link: {
        image: string;
        title: string;
    }
    toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void
}
const DrawerContactList = ({ link, toggleDrawer }: props) => {
    return (
        <ListItem disablePadding className='mb-3'>
            <Link href={"#"} className='w-full' onClick={toggleDrawer}>
                <ListItemButton className='flex gap-3 flex-row items-center w-full'>
                    {
                        link.image &&
                        <Image src={link.image} alt={link.title} width={20} height={20} className='object-contain' />
                    }
                    <h4 className='text-custom-black' >{link.title}</h4>

                </ListItemButton>
            </Link>
        </ListItem>
    )
}

export default DrawerContactList
