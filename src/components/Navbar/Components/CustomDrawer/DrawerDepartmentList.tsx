"use client"
import React from 'react';
import { Divider, ListItem, ListItemButton } from '@mui/material'
import { drawerItems } from '@/mocks/drawerItems';
import { drawerContact } from '@/mocks/drawerConatct';
import { drawerUserInfo } from '@/mocks/drawerUserInfo';
import DrawerAccordionList from './DrawerAccordionList';
import DrawerUserInfoList from './DrawerUserInfoList';
import DrawerContactList from './DrawerContactList';
import Link from 'next/link';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const DrawerDepartmentList = ({ toggleDrawer }: { toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void }) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <div className='mb-10'>
            <ListItem>
                <h3 className='capitalize text-custom-black font-bold text-xl mb-5'>Departments</h3>
            </ListItem>
            {
                drawerItems.map((link, index) => (
                    <DrawerAccordionList expanded={expanded} handleChange={handleChange} key={index} index={index} link={link} toggleDrawer={toggleDrawer} />
                ))
            }
            <Divider className='my-10' />
            {
                drawerUserInfo.map((link, index) => (<DrawerUserInfoList key={index} link={link} toggleDrawer={toggleDrawer} />))
            }
            <Divider className='mb-10' />
            {
                drawerContact.map((link, index) => (<DrawerContactList key={index} link={link} toggleDrawer={toggleDrawer} />))
            }
            <ListItem disablePadding className='mb-3'>
                <Link href='/trader' className='w-full' onClick={toggleDrawer}>
                    <ListItemButton className='flex gap-3 flex-row items-center w-full'>
                        <ContactPageIcon />
                        <h4 className='text-custom-black' >For Traders</h4>
                    </ListItemButton>
                </Link>
            </ListItem>

        </div>
    )
}

export default DrawerDepartmentList