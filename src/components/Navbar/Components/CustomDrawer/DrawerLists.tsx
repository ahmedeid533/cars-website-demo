"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Divider, List, ListItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DrawerDepartmentList from './DrawerDepartmentList';

const DrawerLists = ({ toggleDrawer }: { toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void }) => {
    return (
        <Box
            sx={{ width: 350 }}
            role="presentation"
            onKeyDown={toggleDrawer}
        >
            <ListItem className='flex justify-between items-center py-5 w-full'>
                <Link href={'/'} onClick={toggleDrawer}>
                    <Image src={'/main-logo-1.png'} alt='logo' width={100} height={50} />
                </Link>
                <CloseIcon onClick={toggleDrawer} className='cursor-pointer' />
            </ListItem>
            <Divider />
            <List>
                <DrawerDepartmentList toggleDrawer={toggleDrawer} />
            </List>
        </Box>
    )
}

export default DrawerLists