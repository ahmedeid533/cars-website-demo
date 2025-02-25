"use client"
import React from 'react'
import { Box, Divider, List, ListItem, ListItemButton } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import DrawerAccordionList from '../Navbar/Components/CustomDrawer/DrawerAccordionList'
import { drawerItems } from '@/mocks/drawerItems'
import { drawerUserInfo } from '@/mocks/drawerUserInfo'
import DrawerUserInfoList from '../Navbar/Components/CustomDrawer/DrawerUserInfoList'
import DrawerContactList from '../Navbar/Components/CustomDrawer/DrawerContactList'
import { drawerContact } from '@/mocks/drawerConatct'
import ContactPageIcon from '@mui/icons-material/ContactPage';

const MobileList = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <div className='absolute top-0 w-full min-h-screen bg-white z-[100]'>
            <div >
                <ListItem className='flex items-center justify-between w-full py-5'>
                    <Link href={'/'}>
                        <Image src={'/logo.svg'} alt='logo' width={100} height={50} />
                    </Link>
                </ListItem>
                <Divider />
                <List>
                    <div className='mb-10'>
                        <ListItem>
                            <h3 className='capitalize text-custom-black font-bold text-xl mb-5'>Departments</h3>
                        </ListItem>
                        {
                            drawerItems.map((link, index) => (
                                <DrawerAccordionList expanded={expanded} handleChange={handleChange} key={index} index={index} link={link} toggleDrawer={function (event: React.KeyboardEvent | React.MouseEvent): void {
                                    throw new Error('Function not implemented.')
                                }} />
                            ))
                        }
                        <Divider className='my-10' />
                        {
                            drawerUserInfo.map((link, index) => (<DrawerUserInfoList key={index} link={link} toggleDrawer={function (event: React.KeyboardEvent | React.MouseEvent): void {
                                throw new Error('Function not implemented.')
                            }} />))
                        }
                        <Divider className='mb-10' />
                        {
                            drawerContact.map((link, index) => (<DrawerContactList key={index} link={link} toggleDrawer={function (event: React.KeyboardEvent | React.MouseEvent): void {
                                throw new Error('Function not implemented.')
                            }} />))
                        }
                        <ListItem disablePadding className='mb-24'>
                            <Link href='/trader' className='w-full'>
                                <ListItemButton className='flex gap-3 flex-row items-center w-full'>
                                    <ContactPageIcon />
                                    <h4 className='text-custom-black' >For Traders</h4>
                                </ListItemButton>
                            </Link>
                        </ListItem>

                    </div>
                </List>
            </div>
        </div>
    )
}

export default MobileList
