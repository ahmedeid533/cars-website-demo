'use client'
import React, { useEffect } from 'react'
import { Divider, ListItem, ListItemButton } from '@mui/material'
import { drawerContact } from '@/mocks/drawerConatct'
import { drawerUserInfo } from '@/mocks/drawerUserInfo'
import DrawerAccordionList from './DrawerAccordionList'
import DrawerUserInfoList from './DrawerUserInfoList'
import DrawerContactList from './DrawerContactList'
import Link from 'next/link'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import { useTranslations } from 'next-intl'
import { Category } from '@/types'
import { getCategories } from '@/libs/get-categories'

const DrawerDepartmentList = ({
  toggleDrawer
}: {
  toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void
}) => {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }
  const t = useTranslations('Header')
  const [departments, setDepartments] = React.useState<Category[]>([])
  useEffect(() => {
    const fetchDepartments = async () => {
      const response = (await getCategories()) as Category[]
      setDepartments(response)
    }
    fetchDepartments()
  },[])
  return (
    <div className='mb-10'>
      <ListItem>
        <h3 className='mb-5 font-bold text-custom-black text-xl capitalize'>
          {t('Departments')}
        </h3>
      </ListItem>
      {departments&&departments.length > 0 &&
        departments?.map((link, index) => (
          <DrawerAccordionList
            expanded={expanded}
            handleChange={handleChange}
            key={index}
            index={index}
            link={link}
            toggleDrawer={toggleDrawer}
          />
        ))}
      <Divider className='my-10' />
      {drawerUserInfo.map((link, index) => (
        <DrawerUserInfoList
          key={index}
          link={link}
          toggleDrawer={toggleDrawer}
        />
      ))}
      <Divider className='mb-10' />
      {drawerContact.map((link, index) => (
        <DrawerContactList
          key={index}
          link={link}
          toggleDrawer={toggleDrawer}
        />
      ))}
      <ListItem disablePadding className='mb-3'>
        <Link href='/trader' className='w-full' onClick={toggleDrawer}>
          <ListItemButton className='flex flex-row items-center gap-3 w-full'>
            <ContactPageIcon />
            <h4 className='text-custom-black'>{t('For Traders')}</h4>
          </ListItemButton>
        </Link>
      </ListItem>
    </div>
  )
}

export default DrawerDepartmentList
